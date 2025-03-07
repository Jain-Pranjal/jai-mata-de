import React from 'react';
import Image from "next/image";
import { Flower } from "lucide-react";

const BhuraDevPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <div className="container mx-auto px-4 py-8 space-y-16">
        {/* Hindi Section - Original Layout (Text left, Image right) */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Text content - Left side */}
          <div className="w-full lg:w-1/2">
            <header className="text-center lg:text-left">
              <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl leading-normal break-words whitespace-normal">
                भूरा देव मंदिर
              </h1>

              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Flower className="h-5 w-5 text-yellow-400" />
                <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
                  ।। जय भूरा देव ।।
                </h2>
                <Flower className="h-5 w-5 text-yellow-400" />
              </div>
            </header>

            {/* Temple description - Hindi */}
            <div className="mt-8 space-y-6 rounded-xl bg-white/5 p-6 text-gray-200 text-base lg:text-xl backdrop-blur-sm">
              <p>
                माता के दर्शन से पहले यहां मान्यता है कि भूरा देव के दर्शन करने पडते है। श्री दुर्गासप्तशती पुस्तक में शाकुंभरी देवी का वर्णन आता है कि जब एक बार देवताओ और दानवो में युद्ध चल रहा था जिसमें दानवो की ओर से शुंभ, निशुंभ, महिषासुर आदि बडे बडे राक्षस लड रहे थे तो देवता उनसे लडते लडते शिवालिक की पहाडियो में छुप छुपकर विचरण करने लगे।
              </p>

              <p>
                जब बात ना बनी तो नारद मुनि के कहने पर उन्होने देवी मां से मदद मांगी। इसी बीच भूरादेव अपने पांच साथियो के साथ मां की शरण में आया और देवताओ के साथ मिलकर लडने की आज्ञा मांगी। मां ने वरदान दिया और युद्ध होने लगा।
              </p>

              <p>
                राक्षसों की ओर से रक्तबीज नाम का असुर आया जिसकी खून की एक बूंद गिरने पर एक और उसी के समान असुर पैदा हो जाता था। मां ने विकराल रूप धरकर और चक्र चलाकर इन सब दानवो को मार डाला। माता काली ने खप्पर से रक्तबीज का सिर काटकर उसका सारा खून पी लिया जिससे नये असुर पैदा नही हुए।
              </p>

              <p>
                इस बीच शुंभ और निशुंभ ने भूरादेव के बाण मार दिया जिससे वो गिर पडा। युद्ध समाप्त होने के बाद माता ने भूरादेव को जीवित कर वरदान मांगने को कहा तो उन्होने हमेशा मां के चरणो की सेवा मांगी जिस पर माता ने वरदान दिया कि जो भी मेरे दर्शन करेगा उसे पहले भूरादेव के दर्शन करने होंगे तभी मेरी यात्रा पूरी होगी।
              </p>

              <p>
                भूरा देव का मंदिर माता के मंदिर से एक किलोमीटर पहले है। भूरा देव के दर्शन करने के बाद ही माता के दर्शनो के लिये जाते है।
              </p>
            </div>
          </div>

          {/* Image - Right side */}
          <div className="relative w-full lg:w-5/12">
            <div className="sticky top-8 aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src="/bhura.png"
                  alt="भूरा देव मंदिर"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>



        {/* English Section - Reversed Layout (Image left, Text right) */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:mt-3">
          {/* Image - Left side */}
          <div className="relative w-full lg:w-5/12 order-2 lg:order-1">
            <div className="sticky top-8 aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src="/bhura.png"
                  alt="Bhura Dev Temple"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Text content - Right side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <header className="text-center lg:text-left">
              <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl leading-normal break-words whitespace-normal">
                Bhura Dev Temple
              </h1>

              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Flower className="h-5 w-5 text-yellow-400" />
                <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
                  || Jai Bhura Dev ||
                </h2>
                <Flower className="h-5 w-5 text-yellow-400" />
              </div>
            </header>

            {/* Temple description - English */}
            <div className="mt-8 space-y-6 rounded-xl bg-white/5 p-6 text-gray-200 text-base lg:text-xl backdrop-blur-sm">
              <p>
                Before Mata&apos;s darshan, belief is to visit Bhura the deity first. In the book Sri Durgasaptashti, there is a description of Shakumbhari Devi that when there was a war going on between the gods and Demons, in which big demons were fighting on behalf of Demons or Danavas, Shumbh, Nishumbha, Mahishasura etc. then the gods fought with them hiding in the hills of Shivalik.
              </p>

              <p>
                They started wandering and when things did not happen, they asked for help from the Mother Goddess at the behest of Narada Muni. Meanwhile, Bhuradev, along with his five companions, came to the mother&apos;s shelter and asked for permission to fight with the gods. Mother gave boon and war started.
              </p>

              <p>
                On behalf of the demoness came a demon named Rakabbeej, when a drop of blood fell, another asura was born. The mother killed all these demons by taking a gigantic form and running a cycle. Mother Kali cut the head of the bloodbearer from the khapar and drank all the blood from it, which did not create new asuras.
              </p>

              <p>
                In the meantime Shumbha and Nishumbha killed Bhuradev&apos;s arrow which caused him to fall. After the war ended, Mother asked Bhuradev to come alive and ask for a boon, then he always asked for the service of the feet of the mother, on which Mother gave a boon that whoever visits me, must first see Bhuradev, then only my journey will be completed.
              </p>

              <p>
                The temple of Bhura Dev is one kilometer before the temple of Mata. Only after seeing the brown god, they go to see the mother.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhuraDevPage;