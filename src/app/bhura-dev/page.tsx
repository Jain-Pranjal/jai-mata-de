"use client";

import React from "react";
import Image from "next/image";
import { Flower } from "lucide-react";
import { useLanguageStore } from "@/store/languageStore";
import { bhuraDevContent } from "@/content/bhuraDev";

const BhuraDevPage = () => {
  const { selectedLanguage } = useLanguageStore();
  const displayLanguage = selectedLanguage || "english"; 

  // Fetch content based on the selected language, fallback to English
  const content = bhuraDevContent[displayLanguage as keyof typeof bhuraDevContent] || bhuraDevContent.english;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      {/* Header Section */}
      <header className="container mx-auto pt-8 pb-4 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
          {content.title}
        </h1>
        <div className="flex items-center justify-center gap-3">
          <Flower className="h-5 w-5 text-yellow-400" />
          <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
            {content.subtitle}
          </h2>
          <Flower className="h-5 w-5 text-yellow-400" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Image Section - Centered */}
        <div className="relative mx-auto my-8 flex justify-center">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl">
            <div className="transform transition-transform duration-700 hover:scale-110">
              <Image
                src="/bhura.png"
                alt={content.title} 
                width={1920}
                height={1080}
                priority
                className="object-cover w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mx-auto max-w-3xl space-y-6 pb-12">
          <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
            <div className="space-y-4 text-gray-200 text-base lg:text-xl">
              {content.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BhuraDevPage;