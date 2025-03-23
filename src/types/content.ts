
export interface Content {
    index: number;
    hindiHeading: string;
    englishHeading: string;
    showFullHindi: boolean;
    toggleHindi: () => void;
    showFullEnglish: boolean;
    toggleEnglish: () => void;
  }


  export type Language = "english" | "hindi" | "tamil" | "telugu"; 
  export interface contentStyling {
  title: string;
  paragraphs: string[];
}