import { Language,NotFoundContent } from "@/types/content";


export const notFoundContent: Record<Language, NotFoundContent> = {
    english: {
      title: "404",
      subtitle: "Page Not Found",
      description: "The page you're looking for doesn't exist or has been moved.",
      buttonText: "Return Home",
    },
    hindi: {
      title: "404",
      subtitle: "पेज नहीं मिला",
      description: "आप जो पेज ढूंढ रहे हैं, वह मौजूद नहीं है या स्थानांतरित कर दिया गया है।",
      buttonText: "होम पर वापस जाएं",
    },
    tamil: {
      title: "404",
      subtitle: "பக்கம் கிடைக்கவில்லை",
      description: "நீங்கள் தேடும் பக்கம் இல்லை அல்லது நகர்த்தப்பட்டுவிட்டது.",
      buttonText: "முகப்பு பக்கத்திற்கு திரும்பு",
    },
    telugu: {
      title: "404",
      subtitle: "పేజీ కనుగొనబడలేదు",
      description: "మీరు వెతుకుతున్న పేజీ ఉనికిలో లేదు లేదా తరలించబడింది.",
      buttonText: "హోమ్‌కి తిరిగి వెళ్ళు",
    },
    kannada: {
      title: "404",
      subtitle: "ಪುಟ ಸಿಗಲಿಲ್ಲ",
      description: "ನೀವು ಹುಡುಕುತ್ತಿರುವ ಪುಟವು ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ ಅಥವಾ ಸ್ಥಳಾಂತರಿಸಲಾಗಿದೆ.",
      buttonText: "ಮುಖಪುಟಕ್ಕೆ ಮರಳಿ",
    },
  };
  
  