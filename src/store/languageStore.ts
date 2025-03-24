import { create } from "zustand";
import Cookies from "js-cookie";

interface LanguageState {
  selectedLanguage: string | null;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => {
  const savedLanguage = Cookies.get("selectedLanguage") || null;
  
  return {
    selectedLanguage: savedLanguage,
    setLanguage: (language) => {
      Cookies.set("selectedLanguage", language, { expires: 30 });
      set({ selectedLanguage: language });
    },
  };
});
