"use server"; // Mark this file as a Server Component/Action

import { z } from "zod";
import prisma from "@/lib/db"; // Adjust the path to your Prisma Client
import { redirect } from "next/navigation"; // For redirecting after successful submission

// Define the schema for validation (same as in the form)
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  // city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "Please select a state." }),
  country: z.string({ required_error: "Please select a country." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  youtubeLink: z.string().url({ message: "Please enter a valid YouTube URL." }),
});

// Server Action to handle form submission
export async function submitRegistration(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      // city: formData.get("city") as string,
      state: formData.get("state") as string,
      country: formData.get("country") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      youtubeLink: formData.get("youtubeLink") as string,
    };

    console.log("Server received form data:", data);

    // Validate the data using Zod
    const validatedData = formSchema.parse(data);

    // Save to the database using Prisma
    const newUser = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        // city: validatedData.city,
        state: validatedData.state,
        country: validatedData.country,
        phone: validatedData.phone,
        address: validatedData.address,
        youtubeLink: validatedData.youtubeLink,
      },
    });

    console.log("User created successfully:", newUser);

    // Redirect to a success page or the homepage after successful submission
    redirect("/?success=true&message=Registration%20successful!"); // You can redirect to a success page or homepage
  } catch (error) {
    console.error("Error in submitRegistration:", error);
    
    // If there's an error, redirect with an error message in the query string
    if (error instanceof z.ZodError) {
      const errorMessage = encodeURIComponent("Validation failed: " + error.errors[0].message);
      redirect(`/?success=false&message=${errorMessage}`);
    }
    
    if (error instanceof Error) {
      const errorMessage = encodeURIComponent(error.message);
      redirect(`/?success=false&message=${errorMessage}`);
    }
    
    redirect("/?success=false&message=An%20unexpected%20error%20occurred.");
  }
}