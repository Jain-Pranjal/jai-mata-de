import React from 'react';
import Image from "next/image";
import { Flower } from "lucide-react";
import { mataChinnamastaDevi } from '@/content/mataChinnamastaDevi';

const MataChinnamastaDevi = () => {
  const { hindi, english, images } = mataChinnamastaDevi;
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <div className="container mx-auto px-4 py-8 space-y-16">
        {/* Hindi Section */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:w-1/2">
            <header className="text-center lg:text-left">
              <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl leading-normal break-words whitespace-normal">
                {hindi.title}
              </h1>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Flower className="h-5 w-5 text-yellow-400" />
                <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
                  {hindi.subtitle}
                </h2>
                <Flower className="h-5 w-5 text-yellow-400" />
              </div>
            </header>

            <div className="mt-8 space-y-6 rounded-xl bg-white/5 p-6 text-gray-200 text-base lg:text-xl backdrop-blur-sm">
              <p>{hindi.description}</p>
            </div>
          </div>

          {/* Image - Right side */}
          <div className="relative w-full lg:w-5/12">
            <div className="sticky top-8 aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src={images.primary}
                  alt={hindi.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* English Section */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:mt-3">
          <div className="relative w-full lg:w-5/12 order-2 lg:order-1">
            <div className="sticky top-8 aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src={images.secondary}
                  alt={english.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <header className="text-center lg:text-left">
              <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl leading-normal break-words whitespace-normal">
                {english.title}
              </h1>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Flower className="h-5 w-5 text-yellow-400" />
                <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
                  {english.subtitle}
                </h2>
                <Flower className="h-5 w-5 text-yellow-400" />
              </div>
            </header>

            <div className="mt-8 space-y-6 rounded-xl bg-white/5 p-6 text-gray-200 text-base lg:text-xl backdrop-blur-sm">
              <p>{english.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MataChinnamastaDevi;