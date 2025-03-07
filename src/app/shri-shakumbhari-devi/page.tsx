"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { Flower } from "lucide-react";
import { Content } from '@/types/content';


const ShakumbhariDevi = () => {
  // Create independent state variables for each content section
  const [showFullContent1, setShowFullContent1] = useState(false);
  const [showFullContent2, setShowFullContent2] = useState(false);
  const [showFullContent3, setShowFullContent3] = useState(false);
  const [showFullEnglish1, setShowFullEnglish1] = useState(false);
  const [showFullEnglish2, setShowFullEnglish2] = useState(false);
  const [showFullEnglish3, setShowFullEnglish3] = useState(false);


  // Content for each section
  const contentData = [
    {
      hindi: "माता भ्रामरी देवी आदिशक्ति का ही एक स्वरुप है। दुर्गा सप्तशती के ग्यारहवें अध्याय में दिये गये अपने वचनों के अनुसार आदिशक्ति जगत जननी जगदम्बा ने शुम्भ- निशुंभ तथा वैप्रचित दानवों का वध के साथ- साथ दुर्गमासुर और अरुणासुर दानवों के वध का आश्वासन देवताओं को दिया था। दुर्गा सप्तशती के अनुसार माता ने योगमाया देवी,रक्तदंतिका, शताक्षी,शाकम्भरी, दुर्गा, भीमा और भ्रामरी देवी के अवतारों की स्वयं भविष्यवाणी की थी।",
      english: "Mata Bhramari Devi is a form of Adishakti. According to his words given in the eleventh chapter of Durga Saptashati, Adishakti Jagat Janani Jagadamba had given the assurance of slaughter of Shumbha-Nishumbha and Viprita Danavas as well as slaughter of Durgamasura and Arunasura demons. According to Durga Saptashati, Mother herself predicted the incarnations of Yogamaya Devi, Raktadantika, Shatakshi, Shakambhari, Durga, Bhima and Bhramari Devi.",
      hindiHeading: "माता भ्रामरी देवी",
      englishHeading: "Mata Bhramari Devi"
    },
    {
      hindi: "माता भीमा देवी महाशक्ति जगदंबा शाकम्भरी देवी का ही एक स्वरूप है। माँ भीमा देवी हिमालय और शिवालिक पर्वतों पर तपस्या करने वालों की रक्षा करने वाली देवी है। जब हिमालय पर्वत पर असुरों का अत्याचार बढा तब भक्तों के निवेदन से महामाया ने भीमा देवी का भयानक भयनाशक रूप धारण किया। माँ भीमा देवी का प्रमुख मंदिर हरियाणा राज्य के पिंजौर के समीप स्थित है। माँ भीमा देवी नीले वर्ण वाली और चार भुजाओं मे चंद्रहास नामक तलवार, कपाल और डमरू धारण करती है। माँ भीमा देवी की एक प्रतिमा सिद्धपीठ माँ शाकम्भरी देवी जी के मंदिर मे भी है जो कि सहारनपुर की शिवालिक पर्वमाला मे विराजमान है।दुर्गा सप्तशती के मूर्ति रहस्य के अनुसार-भीमापि नीलवर्णा सा दंष्ट्रादशनभासुरा। विशाललोचना नारी वृत्तपीनपयोधरा चन्द्रहासं च डमरुं शिर: पात्रं च बिभ्रती। एकावीरा कालरात्रि: सैवोक्ता कामदा स्तुता। अर्थात: भीमादेवी का वर्ण भी नीला ही है। उनकी दाढें और दाँत चमकते रहते हैं। उनके नेत्र बडे-बडे हैं,माँ का स्वरूप स्त्री का है। वे अपने हाथों में चन्द्रहास नामक खड्ग, डमरू, मस्तक और पानपात्र धारण करती हैं। वे ही एकवीरा, कालरात्रि तथा कामदा कहलाती और इन नामों से प्रशंसित होती हैं।",
      english: "Mata Bhima Devi is a form of Mahashakti Jagadamba Shakambhari Devi. Maa Bhima Devi is the goddess protecting the ascetics on the Himalayas and Shivalik mountains. When the persecution of the asuras increased on the Himalayas, Mahamaya took the terrible frightening form of Bhima Devi at the request of the devotees. The main temple of Maa Bhima Devi is located near Pinjore in the state of Haryana. Maa Bhima Devi bears a blue character and four arms holding a sword, skull and damru named Chandrahas. There is also a statue of Maa Bhima Devi in ​​the temple of Siddhpeetha Maa Shakambhari Devi Ji, which sits in the Shivalik Parvamala of Saharanpur. According to the idol mystery of Durga Saptashati-\"Bhimapi Nilavarna Sa Dastradashanbhasura. Vishalalochana Nari Sarpanepayodhara Chandrahasam D Damrun Shir: The character is beautiful. Ekavira Kalratri: Saivokta Kamada Praise\". That is, the character of Bhimadevi is also blue. Their teeth and teeth keep shining. Her eyes are large, the mother's form is that of a woman. She holds a Khadga, Damru, Mastak and Panpatra named Chandrahas in her hands. They are called Ekaveera, Kalratri and Kamada and are acclaimed with these names.",
      hindiHeading: "माता भीमा देवी",
      englishHeading: "Mata Bhima Devi"
    },
    {
      hindi: "माँ शताक्षी देवी जगतजननी जगदंबा भुवनेश्वरी देवी का ही एक स्वरूप है। प्राचीन काल मे दुर्गमासुर नामक महादैत्य के उपद्रव से तीनों लोको मे हाहाकार मच गया और सौ वर्षों तक जल की वर्षा नही हुई। संपूर्ण पृथ्वी पर भयंकर अकाल पड गया। तब देवता महादेवी का ध्यान, जप, पूजन और स्तुति करने के विचार से हिमालय पर्वत पर गये। देवी के प्रकट होने पर स्तुति करते हुए बोले: महेशानी घोर संकट उपस्थित हैं तुम इससे हमारी रक्षा करो। तब देवी ने अपने अद्भुत रूप के दर्शन कराये जिनकी पूरी देह पर सौ आंखे थी। माता का स्वरूप नीले रंग का था और आंखे नीलकमल के सदृश्य थी। चारों भुजाओं मे कमल धनुष बाण और शाक- समूह धारण किये हुए थी। माता के सौ नेत्रों से नौ दिन तक अश्रुवृष्टि हुई और संपूर्ण धरातल हरी- भरी हो गई। नदियाँ, तालाब आदि जल से परिपूर्ण हो गये। सौ नयनों से देखने के कारण देवी का स्वरूप शताक्षी देवी नाम से सदा के लिए अमर हो गया। देवी शताक्षी ने उसके बाद दिव्य रूप धारण किया और अपने शरीर से विभिन्न कंदमूल, शाक, फल इत्यादि प्रकट कर सब जीवो की बुभुक्षा को शांत किया और शाकम्भरी देवी के नाम से प्रसिद्ध हो गई। शाकम्भरी देवी ने दुर्गमासुर दैत्य का वध कर दिया और दुर्गा देवी के नाम से अमर हो गई। वास्तव मे लोक प्रसिद्ध शताक्षी, शाकम्भरी तथा दुर्गा ये एक ही देवी के नाम है।",
      english: "Mother Shatakshi Devi Jagatjanani Jagadamba is a form of Bhuvaneshwari Devi. In ancient times, the disturbance of Mahaditya named Durgamasura caused havoc in the three locos and there was no rain of water for a hundred years. There was a severe famine all over the earth. Then the gods went to the Himalayas with the idea of ​​meditating, chanting, worshiping and praising Mahadevi. Praising the goddess's appearance, he said: Maheshani great crisis is present, you protect us from it. Then the Goddess appeared in her wonderful form, who had a hundred eyes on her whole body. Mother's form was blue and eyes resembled Nilkamal's. In all the four arms, the lotus was holding a bow and arrow. Mother's hundred eyes had a tear for nine days and the entire surface became green.Rivers, ponds etc. became full of water. Due to viewing with hundred nines, the form of the Goddess became immortal forever under the name Shatakshi Devi. Goddess Shatakshi took divine form after that and by manifesting various Kandamul, Shak, fruits etc. from her body, calmed the speech of all living beings and became famous as Shakambhari Devi. Shakambhari Devi killed the Durgamasura monster and became immortal in the name of Durga Devi. In fact, folk famous Shatakshi, Shakambhari and Durga are the names of the same goddess.",
      hindiHeading: "माँ शताक्षी देवी",
      englishHeading: "Mother Shatakshi Devi"
    }
  ];


  const ContentSection = ({ 
    index, 
    hindiHeading, 
    englishHeading, 
    showFullHindi, 
    toggleHindi, 
    showFullEnglish, 
    toggleEnglish 
  }:Content ) => {
    return (
      <div className="flex flex-col space-y-4">
        {/* Hindi Content */}
        <div className="rounded-xl bg-white/5 p-6 text-gray-200 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">{hindiHeading}</h3>
          <div className="space-y-4">
            <p className="text-base">
              {showFullHindi 
                ? contentData[index].hindi 
                : `${contentData[index].hindi.substring(0, 100)}...`}
            </p>
            <button
              onClick={toggleHindi}
              className="mt-4 px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition-colors"
            >
              {showFullHindi ? 'कम दिखाएं' : 'और दिखाएं'}
            </button>
          </div>
        </div>
        
        {/* English Content */}
        <div className="rounded-xl bg-white/5 p-6 text-gray-200 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">{englishHeading}</h3>
          <p className="text-base">
            {showFullEnglish
              ? contentData[index].english
              : `${contentData[index].english.substring(0, 100)}...`}
          </p>
          <button
            onClick={toggleEnglish}
            className="mt-4 px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition-colors"
          >
            {showFullEnglish ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <div className="container mx-auto px-4 py-8 space-y-16">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl leading-normal break-words whitespace-normal">
            माता शाकम्भरी देवी, माँ भीमा देवी, भ्रामरी देवी और माता शताक्षी
          </h1>
          <div className="flex items-center justify-center gap-3">
            <Flower className="h-5 w-5 text-yellow-400" />
            <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
              ।। जय माता दी ।।
            </h2>
            <Flower className="h-5 w-5 text-yellow-400" />
          </div>
        </header>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Column */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl mb-6">
              <Image
                src="/shakumbhari1.png"
                alt="Shakumbhari Devi 1"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
            <ContentSection 
              index={0}
              hindiHeading={contentData[0].hindiHeading}
              englishHeading={contentData[0].englishHeading}
              showFullHindi={showFullContent1}
              toggleHindi={() => setShowFullContent1(!showFullContent1)}
              showFullEnglish={showFullEnglish1}
              toggleEnglish={() => setShowFullEnglish1(!showFullEnglish1)}
            />
          </div>
          
          {/* Second Column */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl mb-6">
              <Image
                src="/shakumbhari2.png"
                alt="Shakumbhari Devi 2"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
            <ContentSection 
              index={1}
              hindiHeading={contentData[1].hindiHeading}
              englishHeading={contentData[1].englishHeading}
              showFullHindi={showFullContent2}
              toggleHindi={() => setShowFullContent2(!showFullContent2)}
              showFullEnglish={showFullEnglish2}
              toggleEnglish={() => setShowFullEnglish2(!showFullEnglish2)}
            />
          </div>
          
          {/* Third Column */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl mb-6">
              <Image
                src="/shakumbhari3.png"
                alt="Shakumbhari Devi 3"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
            <ContentSection 
              index={2}
              hindiHeading={contentData[2].hindiHeading}
              englishHeading={contentData[2].englishHeading}
              showFullHindi={showFullContent3}
              toggleHindi={() => setShowFullContent3(!showFullContent3)}
              showFullEnglish={showFullEnglish3}
              toggleEnglish={() => setShowFullEnglish3(!showFullEnglish3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShakumbhariDevi;
