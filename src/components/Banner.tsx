
"use client";

import React from "react";
import Link from "next/link";
import { useLanguageStore } from "@/store/languageStore";
import { bannerContent } from "@/content/banner";

const Banner = () => {
  const { selectedLanguage } = useLanguageStore();
  const displayLanguage = selectedLanguage || "english"; // Default to English
  const content = bannerContent[displayLanguage as keyof typeof bannerContent] || bannerContent.english;

  return (
    <div className="bg-gradient-to-r from-amber-200 to-yellow-400 text-center py-3 px-4 shadow-md">
      <p className="text-sm md:text-base font-semibold text-gray-800">
        {content.message}{" "}
        <Link
          href={content.linkUrl}
          className="underline text-blue-600 hover:text-blue-800 transition-colors"
        >
          {content.linkText}
        </Link>
      </p>
    </div>
  );
};

export default Banner;