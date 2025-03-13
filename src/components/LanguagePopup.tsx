"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";


export default function LanguagePopup({ initialLanguage }: { initialLanguage: string | null }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!initialLanguage) {
      setShowPopup(true);
    }
  }, [initialLanguage]);

  const handleLanguageSelect = (language: "hindi" | "english" | "kannada") => {
    Cookies.set("selectedLanguage", language, { expires: 365 });
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
        <h2 className="text-lg font-bold mb-4">Choose Your Language</h2>

        {/* Language Selection Dropdown */}
        <Select onValueChange={(value) => handleLanguageSelect(value as "hindi" | "english" | "kannada")}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hindi">हिंदी</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="kannada">ಕನ್ನಡ</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
