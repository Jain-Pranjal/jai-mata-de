import React from 'react'
import Image from 'next/image'

const MelaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55] px-4 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8">
          Mela at SHAKUMBHARI DEVI
        </h1>
        
        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-2xl mx-auto">
            <div className="transform transition-transform duration-300 hover:scale-105">
              <Image 
                src="/mela.png" 
                alt="Mela at Shakumbhari Devi" 
                width={800} 
                height={600}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </div>
          </div>
          
          <div className="w-full max-w-3xl">
            <div className="text-white space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                धर्म ग्रंथों के अनुसार, पौष माह के शुक्ल पक्ष की अष्टमी तिथि से नवरात्रि का पर्व प्रारम्भ होता है जो पौष माह की पूर्णिमा तक मनाया जाता है और पूर्णिमा तिथि पर माता शाकम्भरी की जयंती मनाई जाती है| 51 शक्ति पीठ में से एक माँ शाकम्भरी, सहारनपुर की शिवालिक घाटियों में स्थापित हैं|
              </p>
              
              <p>
                सहारनपुर से लगभग 45 कि. मी. दूर स्थित माँ के दर्शन के लिए श्रद्धालू आते हैं| माता के दरबार से पहले भूरे देव जी का मंदिर पडता है | मान्यता है माता के दर्शनों के जाते हुए पहले बाबा भूरे देव जी के दर्शन करते हैं और माता के दर्शनों के लिए अग्रसर होते हैं |
              </p>
              
              <p>
                माता के दर्शनों के लिए लोग लंबी लंबी कतारों में आकर दर्शन प्राप्त करते हैं |
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MelaPage