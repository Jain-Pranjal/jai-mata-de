
import { Language } from "@/types/content";

export interface BannerContent {
  message: string;
  linkText: string;
  linkUrl: string;
}

export const bannerContent: Record<Language, BannerContent> = {
  english: {
    message: "Winners have been announced, please check the",
    linkText: "Contest Winner Page",
    linkUrl: "/winner", 
  },
  hindi: {
    message: "विजेताओं की घोषणा हो चुकी है, कृपया देखें",
    linkText: "प्रतियोगिता विजेता पेज",
    linkUrl: "/winner",
  },
  tamil: {
    message: "வெற்றியாளர்கள் அறிவிக்கப்பட்டுள்ளனர், தயவுசெய்து பார்க்கவும்",
    linkText: "போட்டி வெற்றியாளர் பக்கம்",
    linkUrl: "/winner",
  },
  telugu: {
    message: "విజేతలు ప్రకటించబడ్డారు, దయచేసి చూడండి",
    linkText: "పోటీ విజేతల పేజీ",
    linkUrl: "/winner",
  },
  kannada: {
    message: "ವಿಜೇತರು ಘೋಷಿಸಲಾಗಿದೆ, ದಯವಿಟ್ಟು ಪರಿಶೀಲಿಸಿ",
    linkText: "ಪೋಟಿಯ ವಿಜೇತ ಪುಟ",
    linkUrl: "/winner",
  },
};