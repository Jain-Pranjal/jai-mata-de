import React from 'react'
import Image from 'next/image'
import { Flower } from 'lucide-react'

const MelaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      {/* Header Section */}
      <header className="container mx-auto pt-8 pb-4 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
          Mela at SHAKUMBHARI DEVI
        </h1>
        <div className="flex items-center justify-center gap-3">
          <Flower className="h-5 w-5 text-yellow-400" />
          <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
            ।। जय माँ शाकम्भरी देवी ।।
          </h2>
          <Flower className="h-5 w-5 text-yellow-400" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Image Section - Centered */}
        <div className="relative mx-auto my-8 flex justify-center">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl">
            <div className="transform transition-transform duration-700 hover:scale-110">
              <Image
                src="/mela.png"
                alt="Mela at Shakumbhari Devi"
                width={1920}
                height={1080}
                priority
                className="object-cover w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mx-auto max-w-3xl space-y-6 pb-12">
          <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
            <div className="space-y-4 text-gray-200 text-base lg:text-xl">
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
      </main>
    </div>
  )
}

export default MelaPage
