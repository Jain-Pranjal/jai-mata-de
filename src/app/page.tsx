"use client";

import Image from "next/image";
import { useLanguageStore } from "@/store/languageStore";
import { homePageLangContent } from "@/content/homePage";
import Banner from "@/components/Banner";
export default function Home() {
  const { selectedLanguage } = useLanguageStore();
  const displayLanguage = selectedLanguage || "english"; 

  // Fetch content based on the selected language, fallback to English if unavailable
  const content = homePageLangContent[displayLanguage as keyof typeof homePageLangContent] || homePageLangContent.english;

  return (
    <div className="h-full bg-gradient-to-r from-[#141E30] to-[#243B55]">
      {/* Banner Section */}
      <Banner />

      {/* Header Section */}
      <header className="container mx-auto pt-8 pb-4 text-center">
        <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          {content.title}
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Image Section - Centered */}
        <div className="relative mx-auto my-8 flex justify-center">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-xl">
            <div className="transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/home.png"
                alt={
                  displayLanguage === "english"
                    ? "Jai Mata Di"
                    : displayLanguage === "hindi"
                    ? "जय माता दी"
                    : displayLanguage === "tamil"
                    ? "ஜெய் மாதா தீ"
                    : "జై మాత దీ" // Telugu
                }
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mx-auto max-w-3xl space-y-4 pb-12 text-justify text-gray-200">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}