import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/db";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z
    .string()
    .nullable() // Allow null instead of optional()
    .transform((val) => (val === "" ? null : val)) // Convert empty string to null
    .refine((val) => val === null || z.string().email().safeParse(val).success, {
      message: "Please enter a valid email address.",
    }),
  phone: z
    .string()
    .length(10, { message: "Phone number must be exactly 10 digits." })
    .regex(/^\d{10}$/, { message: "Phone number must contain only digits." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  youtubeLink: z.string().url({ message: "Please enter a valid YouTube URL." }),
});

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    throw new Error("reCAPTCHA secret key is not configured.");
  }

  const response = await axios.post(
    "https://www.google.com/recaptcha/api/siteverify",
    null,
    {
      params: {
        secret: secretKey,
        response: token,
      },
    }
  );

  const { success, score } = response.data;
  if (!success) {
    throw new Error("reCAPTCHA verification failed");
  }

  const SCORE_THRESHOLD = 0.5;
  if (score < SCORE_THRESHOLD) {
    throw new Error("reCAPTCHA score too low. Possible bot detected.");
  }

  return true;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string | null, // Expect null for email
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      youtubeLink: formData.get("youtubeLink") as string,
      recaptchaToken: formData.get("recaptchaToken") as string,
    };

    // Ensure required fields aren’t null or empty
    if (!data.name || data.name === "") {
      throw new Error("Name is required");
    }
    if (!data.phone || data.phone === "") {
      throw new Error("Phone number is required");
    }
    if (!data.address || data.address === "") {
      throw new Error("Address is required");
    }
    if (!data.youtubeLink || data.youtubeLink === "") {
      throw new Error("YouTube link is required");
    }
    if (!data.recaptchaToken || data.recaptchaToken === "") {
      throw new Error("reCAPTCHA token is missing");
    }

    // Verify reCAPTCHA
    await verifyRecaptcha(data.recaptchaToken);

    // Validate the data with the schema
    const validatedData = formSchema.parse(data);

    const existingUser = await prisma.user.findUnique({
      where: { phone: validatedData.phone },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User with this phone number already exists" },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: validatedData, // No conversion needed, email is already null if blank
    });

    console.log("User created successfully:", newUser);

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful!",
        user: { id: newUser.id, name: newUser.name, email: newUser.email },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in registration API:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: `Validation error: ${error.errors[0].message}` },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An error occurred while processing your request",
      },
      { status: 500 }
    );
  }
}