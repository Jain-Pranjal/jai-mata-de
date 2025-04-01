// app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/db';

// Define the schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
//   city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "Please select a state." }),
  country: z.string({ required_error: "Please select a country." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  youtubeLink: z.string().url({ message: "Please enter a valid YouTube URL." }),
});

export async function POST(request: NextRequest) {
  try {
    // Get form data from the request
    const formData = await request.formData();
    
    // Convert FormData to a plain object
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    //   city: formData.get('city') as string,
      state: formData.get('state') as string,
      country: formData.get('country') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      youtubeLink: formData.get('youtubeLink') as string,
    };

    console.log('Received form data:', data);

    // Validate data
    const validatedData = formSchema.parse(data);

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    // apply on phone also 
    // aslo email make opttional and validate by phone (compulsory)


    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Save to database
    const newUser = await prisma.user.create({
      data: validatedData,
    });

    console.log('User created successfully:', newUser);

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration successful!',
        user: { id: newUser.id, name: newUser.name, email: newUser.email }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in registration API:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: `Validation error: ${error.errors[0].message}` },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}