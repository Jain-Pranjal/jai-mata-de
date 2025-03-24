"use client";

import React from "react";
import { Flower } from "lucide-react";
import { useLanguageStore } from "@/store/languageStore";
import { shriShakumbhariDeviContent } from "@/content/mata-stories"; 

const ShriShakumbhariDeviPage = () => {
  const { selectedLanguage } = useLanguageStore();
  const displayLanguage = selectedLanguage || "english";
  const content = shriShakumbhariDeviContent[displayLanguage as keyof typeof shriShakumbhariDeviContent] || shriShakumbhariDeviContent.english;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <div className="container mx-auto px-4 py-8">
        <div className="w-full">
          {/* Header Section */}
          <header className="text-center">
            <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl leading-normal break-words whitespace-normal">
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

          {/* Main Paragraphs */}
          <div className="mt-8 space-y-6 rounded-xl bg-white/5 p-6 text-justify backdrop-blur-sm">
            {content.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-gray-200 md:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-8 space-y-6 rounded-xl bg-white/5 p-6 text-justify backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-yellow-400 text-center mb-6">
              {content.additionalInfo.title}
            </h3>
            <div className="space-y-8">
              {content.additionalInfo.sections.map((section, index) => (
                <div key={index}>
                  <h4 className="text-xl font-semibold text-yellow-300 mb-2">
                    {section.heading}
                  </h4>
                  <p className="text-base leading-relaxed text-gray-200 md:text-xl">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShriShakumbhariDeviPage;