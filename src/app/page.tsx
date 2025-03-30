"use client";
import Banner from "@/components/Banner";
import RegistrationForm from "@/components/RegistrationForm";
import FeatureCards from "@/components/FeatureCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      {/* Banner Section */}
      <Banner />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Registration Form - Left Side */}
          <div className="w-full lg:w-1/2">
            <RegistrationForm />
          </div>
          
          {/* Shining Banner - Right Side */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-md p-8 rounded-2xl overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-90 animate-pulse"></div>
              
              {/* Shining effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-shimmer"></div>
              
              <div className="relative flex flex-col items-center text-center space-y-6">
                <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Registration Open!</h2>
                <p className="text-white/80 text-lg">Share your experience with us through your video submission</p>
                <div className="py-4 px-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <p className="text-white font-medium">
                    Complete the form to participate in our exclusive event
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -top-10 -left-10 h-40 w-40 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <FeatureCards />
        </div>
      </div>
    </div>
  );
}