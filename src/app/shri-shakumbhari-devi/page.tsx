"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Flower } from "lucide-react";
import { useLanguageStore } from "@/store/languageStore";
import { shakumbhariDeviContent } from "@/content/ShakumbhariDevi";

const ShakumbhariDevi = () => {
  const { selectedLanguage } = useLanguageStore();
  const displayLanguage = selectedLanguage || "english"; // Default to English
  const content = shakumbhariDeviContent[displayLanguage as keyof typeof shakumbhariDeviContent] || shakumbhariDeviContent.english;

  // State for showing full content for each section
  const [showFullContent, setShowFullContent] = useState<boolean[]>(new Array(content.sections.length).fill(false));

  // Toggle function for each section
  const toggleContent = (index: number) => {
    setShowFullContent((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <div className="container mx-auto px-4 py-8 space-y-16">
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

        {/* Image Grid with Content Below Each Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.sections.map((section, index) => (
            <div key={index}>
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl mb-6">
                <Image
                  src={content.images[index]}
                  alt={`Shakumbhari Devi ${index + 1}`}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>

              {/* Content Section Below Image */}
              <div className="rounded-xl bg-white/5 p-6 text-gray-200 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">{section.heading}</h3>
                <div className="space-y-4">
                  {section.paragraphs.slice(0, showFullContent[index] ? section.paragraphs.length : 1).map((paragraph, paraIndex) => (
                    <p key={paraIndex} className="text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.paragraphs.length > 1 && (
                  <button
                    onClick={() => toggleContent(index)}
                    className="mt-4 px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition-colors"
                  >
                    {showFullContent[index] ? content.showLessText : content.showMoreText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShakumbhariDevi;