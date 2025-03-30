// src/content/winners.ts
import { Language, WinnerContent } from "@/types/content";

export const winnersContent: Record<Language, WinnerContent> = {
  hindi: {
    title: "प्रतियोगिता विजेता",
    subtitle: "हमारे विजेताओं को बधाई!",
    winners: [
      {
        position: "प्रथम स्थान",
        name: "विजेता का नाम",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🏆",
      },
      {
        position: "द्वितीय स्थान",
        name: "उपविजेता",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🥈",
      },
      {
        position: "तृतीय स्थान",
        name: "दूसरा उपविजेता",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🥉",
      },
    ],
  },
  english: {
    title: "Competition Winners",
    subtitle: "Congratulations to our Winners!",
    winners: [
      {
        position: "1st Place",
        name: "Winner Name",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🏆",
      },
      {
        position: "2nd Place",
        name: "Runner Up",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🥈",
      },
      {
        position: "3rd Place",
        name: "Second Runner Up",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🥉",
      },
    ],
  },
  tamil: {
    title: "போட்டி வெற்றியாளர்கள்",
    subtitle: "எங்கள் வெற்றியாளர்களுக்கு வாழ்த்துக்கள்!",
    winners: [
      {
        position: "முதல் இடம்",
        name: "வெற்றியாளர் பெயர்",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🏆",
      },
      {
        position: "இரண்டாவது இடம்",
        name: "இரண்டாம் இடம் பெற்றவர்",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🥈",
      },
      {
        position: "மூன்றாவது இடம்",
        name: "இரண்டாவது இரண்டாம் இடம் பெற்றவர்",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🥉",
      },
    ],
  },
  telugu: {
    title: "పోటీ విజేతలు",
    subtitle: "మా విజేతలకు అభినందనలు!",
    winners: [
      {
        position: "మొదటి స్థానం",
        name: "విజేత పేరు",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🏆",
      },
      {
        position: "రెండవ స్థానం",
        name: "రన్నర్ అప్",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🥈",
      },
      {
        position: "మూడవ స్థానం",
        name: "రెండవ రన్నర్ అప్",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🥉",
      },
    ],
  },

  kannada: {
    title: "ಪೊಟಿ ವಿಜೇತರು",
    subtitle: "ನಮ್ಮ ವಿಜೇತರಿಗೆ ಅಭಿನಂದನೆಗಳು!",
    winners: [
      {
        position: "ಮೊದಲ ಸ್ಥಾನ",
        name: "ವಿಜೇತ ಹೆಸರು",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🏆",
      },
      {
        position: "ಎರಡನೇ ಸ್ಥಾನ",
        name: "ರನ್ನರ್ ಅಪ್",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🥈",
      },
      {
        position: "ಮೂರನೇ ಸ್ಥಾನ",
        name: "ಎರಡನೇ ರನ್ನರ್ ಅಪ್",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        trophy: "🥉",
      },
    ],
  },
};