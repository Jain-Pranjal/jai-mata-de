"use client";

import React from "react";
import Image from "next/image";
import { Flower } from "lucide-react";
import { useLanguageStore } from "@/store/languageStore";
import { aartiContent } from "@/content/aarti"; 

const AartiPage = () => {
  const { selectedLanguage } = useLanguageStore();
  const displayLanguage = selectedLanguage || "english"; 
  const content = aartiContent[displayLanguage as keyof typeof aartiContent] || aartiContent.english;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:w-1/2">
            <header className="text-center lg:text-left">
              <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl leading-normal break-words whitespace-normal">
                {content.title}
              </h1>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Flower className="h-5 w-5 text-yellow-400" />
                <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
                  {content.subtitle}
                </h2>
                <Flower className="h-5 w-5 text-yellow-400" />
              </div>
            </header>

            <div className="mt-8 space-y-6 rounded-xl bg-white/5 p-6 text-center backdrop-blur-sm lg:text-left">
              <div className="text-lg font-medium text-yellow-100">
                {content.aartiTitle}
              </div>
              <div className="space-y-4 text-gray-200 text-base lg:text-xl">
                {content.verses.map((versePair, index) => (
                  <p key={index}>
                    {versePair[0]}
                    <br />
                    {versePair[1]}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-5/12">
            <div className="sticky top-8 aspect-square w-full overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src={content.image}
                  alt={content.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AartiPage;