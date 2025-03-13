
"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function LanguagePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    const savedLanguage = Cookies.get("selectedLanguage"); // Read from cookies
    if (!savedLanguage) {
      setTimeout(() => setShowPopup(true), 500); // Show popup only if no language is set
    } else {
      setSelectedLanguage(savedLanguage); // Keep language state updated
    }
  }, []);

  const handleLanguageSelect = (language: "hindi" | "english" | "kannada" | "tamil") => {
    setSelectedLanguage(language);
  };

  const confirmLanguage = () => {
    if (selectedLanguage) {
      Cookies.set("selectedLanguage", selectedLanguage, { expires:1 });
      setShowPopup(false); // Close the popup after selecting
    }
  };

  if (!showPopup) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl shadow-2xl max-w-md w-full"
      >
        <div className="flex flex-col items-center text-center">
          <div className="  flex items-center justify-center mb-4">
            <Image src="/om.jpg" alt="Translate" width={32} height={32} />
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-2">Welcome! Choose Your Language</h2>
          <p className="text-muted-foreground mb-6">
            Select your preferred language to enhance your browsing experience
          </p>

          <div className="w-full space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <LanguageOption
                value="english"
                label="English"
                selected={selectedLanguage === "english"}
                onSelect={handleLanguageSelect}
              />
              <LanguageOption
                value="hindi"
                label="हिंदी"
                selected={selectedLanguage === "hindi"}
                onSelect={handleLanguageSelect}
              />
              <LanguageOption
                value="kannada"
                label="ಕನ್ನಡ"
                selected={selectedLanguage === "kannada"}
                onSelect={handleLanguageSelect}
              />
              <LanguageOption
                value="tamil"
                label="தமிழ்"
                selected={selectedLanguage === "tamil"}
                onSelect={handleLanguageSelect}
              />
            </div>

            <Button onClick={confirmLanguage} disabled={!selectedLanguage} className="w-full" size="lg">
              Continue
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface LanguageOptionProps {
  value: "hindi" | "english" | "kannada" | "tamil";
  label: string;
  selected: boolean;
  onSelect: (value: "hindi" | "english" | "kannada" | "tamil") => void;
}


function LanguageOption({ value, label, selected, onSelect }: LanguageOptionProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`relative flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 ${
        selected
          ? "border-primary bg-primary/5 text-primary"
          : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
      }`}
    >
      {selected && (
        <div className="absolute top-2 right-2">
          <Check className="h-4 w-4 text-primary" />
        </div>
      )}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
