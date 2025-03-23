import { Language,NavigationContent } from "@/types/content";



export const navigationContent: Record<Language, NavigationContent> = {
  english: {
    title: "How to Reach Us",
    byAir: {
      heading: "By Air",
      description: "Nearest Airport: Dehradun",
    },
    byTrain: {
      heading: "By Train",
      nearestStation: "Nearest Railway Station: Saharanpur",
      fromDelhi: {
        heading: "From Delhi to Saharanpur",
        details: [
          "Train: Shatabdi Express (12017)",
          "Departure: New Delhi station (NDLS) at 06:45",
          "Arrival: Saharanpur station (SRE) at 09:50",
          "Stops: 4 stoppages",
        ],
      },
      toDelhi: {
        heading: "From Saharanpur to Delhi",
        details: [
          "Train: Dehradun Shatabdi (12018)",
          "Departure: Saharanpur at 19:50",
          "Duration: 2h 55m",
          "Alternative: Jalandhar City New Delhi Express (14682)",
          "Departure: Saharanpur at 09:20",
          "Duration: 3h 30m",
        ],
      },
    },
    byRoad: {
      heading: "By Road",
      description: "The temple is well connected by road from:",
      routes: ["Saharanpur", "Chhutmalpur (via Behat)", "Delhi to Saharanpur route available"],
    },
    locationMap: {
      heading: "Location Map",
    },
  },
  hindi: {
    title: "हम तक कैसे पहुंचें",
    byAir: {
      heading: "हवाई मार्ग से",
      description: "निकटतम हवाई अड्डा: देहरादून",
    },
    byTrain: {
      heading: "रेल मार्ग से",
      nearestStation: "निकटतम रेलवे स्टेशन: सहारनपुर",
      fromDelhi: {
        heading: "दिल्ली से सहारनपुर तक",
        details: [
          "ट्रेन: शताब्दी एक्सप्रेस (12017)",
          "प्रस्थान: नई दिल्ली स्टेशन (NDLS) सुबह 06:45 बजे",
          "आगमन: सहारनपुर स्टेशन (SRE) सुबह 09:50 बजे",
          "रुकावटें: 4 स्टॉप",
        ],
      },
      toDelhi: {
        heading: "सहारनपुर से दिल्ली तक",
        details: [
          "ट्रेन: देहरादून शताब्दी (12018)",
          "प्रस्थान: सहारनपुर रात 19:50 बजे",
          "अवधि: 2 घंटे 55 मिनट",
          "वैकल्पिक: जालंधर सिटी नई दिल्ली एक्सप्रेस (14682)",
          "प्रस्थान: सहारनपुर सुबह 09:20 बजे",
          "अवधि: 3 घंटे 30 मिनट",
        ],
      },
    },
    byRoad: {
      heading: "सड़क मार्ग से",
      description: "मंदिर निम्नलिखित स्थानों से सड़क द्वारा अच्छी तरह जुड़ा हुआ है:",
      routes: ["सहारनपुर", "छुटमलपुर (बेहट के रास्ते)", "दिल्ली से सहारनपुर मार्ग उपलब्ध"],
    },
    locationMap: {
      heading: "स्थान नक्शा",
    },
  },
  tamil: {
    title: "எங்களை எப்படி அடைவது",
    byAir: {
      heading: "விமானம் மூலம்",
      description: "அருகிலுள்ள விமான நிலையம்: டெஹ்ராடூன்",
    },
    byTrain: {
      heading: "ரயில் மூலம்",
      nearestStation: "அருகிலுள்ள ரயில் நிலையம்: சஹாரன்பூர்",
      fromDelhi: {
        heading: "டெல்லியில் இருந்து சஹாரன்பூர் வரை",
        details: [
          "ரயில்: சதாப்தி எக்ஸ்பிரஸ் (12017)",
          "புறப்பாடு: புது டெல்லி நிலையம் (NDLS) காலை 06:45 மணிக்கு",
          "வருகை: சஹாரன்பூர் நிலையம் (SRE) காலை 09:50 மணிக்கு",
          "நிறுத்தங்கள்: 4 நிறுத்தங்கள்",
        ],
      },
      toDelhi: {
        heading: "சஹாரன்பூரில் இருந்து டெல்லி வரை",
        details: [
          "ரயில்: டெஹ்ராடூன் சதாப்தி (12018)",
          "புறப்பாடு: சஹாரன்பூர் இரவு 19:50 மணிக்கு",
          "கால அளவு: 2 மணி நேரம் 55 நிமிடங்கள்",
          "மாற்று: ஜலந்தர் சிட்டி புது டெல்லி எக்ஸ்பிரஸ் (14682)",
          "புறப்பாடு: சஹாரன்பூர் காலை 09:20 மணிக்கு",
          "கால அளவு: 3 மணி நேரம் 30 நிமிடங்கள்",
        ],
      },
    },
    byRoad: {
      heading: "சாலை மூலம்",
      description: "கோயில் பின்வரும் இடங்களிலிருந்து சாலை மூலம் நன்கு இணைக்கப்பட்டுள்ளது:",
      routes: ["சஹாரன்பூர்", "சுட்மல்பூர் (பெஹத் வழியாக)", "டெல்லியிலிருந்து சஹாரன்பூர் பாதை உள்ளது"],
    },
    locationMap: {
      heading: "இருப்பிட வரைபடம்",
    },
  },
  telugu: {
    title: "మమ్మల్ని ఎలా చేరుకోవాలి",
    byAir: {
      heading: "విమానం ద్వారా",
      description: "దగ్గరలోని విమానాశ్రయం: డెహ్రాడూన్",
    },
    byTrain: {
      heading: "రైలు ద్వారా",
      nearestStation: "దగ్గరలోని రైల్వే స్టేషన్: సహరాన్‌పూర్",
      fromDelhi: {
        heading: "ఢిల్లీ నుండి సహరాన్‌పూర్ వరకు",
        details: [
          "రైలు: శతాబ్ది ఎక్స్‌ప్రెస్ (12017)",
          "బయలుదేరు: న్యూ ఢిల్లీ స్టేషన్ (NDLS) ఉదయం 06:45కి",
          "ఆగమనం: సహరాన్‌పూర్ స్టేషన్ (SRE) ఉదయం 09:50కి",
          "ఆగుతుంది: 4 స్టాప్‌లు",
        ],
      },
      toDelhi: {
        heading: "సహరాన్‌పూర్ నుండి ఢిల్లీ వరకు",
        details: [
          "రైలు: డెహ్రాడూన్ శతాబ్ది (12018)",
          "బయలుదేరు: సహరాన్‌పూర్ రాత్రి 19:50కి",
          "వ్యవధి: 2 గంటల 55 నిమిషాలు",
          "ప్రత్యామ్నాయం: జలంధర్ సిటీ న్యూ ఢిల్లీ ఎక్స్‌ప్రెస్ (14682)",
          "బయలుదేరు: సహరాన్‌పూర్ ఉదయం 09:20కి",
          "వ్యవధి: 3 గంటల 30 నిమిషాలు",
        ],
      },
    },
    byRoad: {
      heading: "రోడ్డు ద్వారా",
      description: "ఈ ఆలయం కింది ప్రాంతాల నుండి రోడ్డు ద్వారా బాగా అనుసంధానించబడి ఉంది:",
      routes: ["సహరాన్‌పూర్", "ఛుట్మల్పూర్ (బెహట్ ద్వారా)", "ఢిల్లీ నుండి సహరాన్‌పూర్ మార్గం అందుబాటులో ఉంది"],
    },
    locationMap: {
      heading: "స్థాన చిత్రం",
    },
  },
};