"use client";
import React from "react";
import Link from "next/link";
import { useLanguageStore } from "@/store/languageStore"; // Adjust the path as needed
import { notFoundContent } from "@/content/not-found"; // Adjust the path as needed

const NotFound = () => {

  const { selectedLanguage } = useLanguageStore();
  const language = (selectedLanguage as "english" | "hindi" | "tamil" | "telugu" | "kannada") || "english";

  // Fetch the content for the selected language
  const content = notFoundContent[language];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border-2 border-yellow-400/20 shadow-2xl m-3">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-4">
          {content.title}
        </h1>
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          {content.subtitle}
        </h2>
        <p className="text-gray-200 mb-6">
          {content.description}
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-white/5 text-yellow-400 rounded-lg border-2 border-yellow-400/20 hover:bg-white/10 transition-colors"
        >
          {content.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;