"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLanguageStore } from "@/store/languageStore";

export default function LanguagePopup() {
  const { selectedLanguage, setLanguage } = useLanguageStore();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!selectedLanguage) {
      setTimeout(() => setShowPopup(true), 500);
    }
  }, [selectedLanguage]);

  const confirmLanguage = () => {
    if (selectedLanguage) {
      setShowPopup(false);
    }
  };

  return (
    <AnimatePresence>
      {showPopup && (
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
              <Image src="/om.jpg" alt="Translate" width={32} height={32} className="mb-4" />
              <h2 className="text-xl md:text-2xl font-bold mb-2">Welcome! Choose Your Language</h2>
              <p className="text-muted-foreground mb-6">
                Select your preferred language to enhance your browsing experience
              </p>

              <div className="w-full space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: "english", label: "English" },
                    { value: "hindi", label: "Hindi" },
                    { value: "tamil", label: "Tamil" },
                    { value: "telugu", label: "Telugu" },
                    { value: "kannada", label: "Kannada" },   
                  ].map((lang) => (
                    <LanguageOption
                      key={lang.value}
                      value={lang.value}
                      label={lang.label}
                      selected={selectedLanguage === lang.value}
                      onSelect={setLanguage}
                    />
                  ))}
                </div>

                <Button
                  onClick={confirmLanguage}
                  disabled={!selectedLanguage}
                  className="w-full"
                  size="lg"
                >
                  Continue
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface LanguageOptionProps {
  value: string;
  label: string;
  selected: boolean;
  onSelect: (value: string) => void;
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