"use client";

import React from "react";
import { Flower } from "lucide-react";
import { useLanguageStore } from "@/store/languageStore";
import { winnersContent } from "@/content/winner"; 

const WinnerPage = () => {
  const { selectedLanguage } = useLanguageStore();
  const displayLanguage = selectedLanguage || "english"; // Default to English
  const content = winnersContent[displayLanguage as keyof typeof winnersContent] || winnersContent.english;

   // Convert embed URL to watch URL for fallback link
   const getWatchUrl = (embedUrl: string) => {
    const videoId = embedUrl.split("/embed/")[1]?.split("?")[0];
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      {/* Header Section */}
      <header className="container mx-auto pt-8 pb-4 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl p-2">
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

      {/* Winners Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.winners.map((winner, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border-2 border-yellow-400/20 transform transition-transform duration-500 hover:scale-105"
            >
              {/* Winner Details Above Video */}
              <div className="text-center mb-4">
                <span className="text-4xl mb-2 block">{winner.trophy}</span>
                <h3 className="text-yellow-400 text-xl font-bold mb-1">
                  {winner.position}
                </h3>
                <p className="text-gray-200">{winner.name}</p>
              </div>

              {/* YouTube Video Embed */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                  className="w-full h-full"
                  src={winner.videoUrl}
                  title={`Winner Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                 {/* Fallback Link
                 <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                  <a
                    href={getWatchUrl(winner.videoUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 underline"
                  >
                    Watch on YouTube
                  </a>
                </div> */}

                
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WinnerPage;