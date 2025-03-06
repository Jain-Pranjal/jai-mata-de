import React from 'react';
import Image from "next/image";
import { Flower } from "lucide-react";

const MataChinnamastaDevi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <div className="container mx-auto px-4 py-8 space-y-16">
        {/* Hindi Section */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:w-1/2">
            <header className="text-center lg:text-left">
              <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl leading-normal break-words whitespace-normal">
                माता छिन्नमस्ता देवी मंदिर
              </h1>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Flower className="h-5 w-5 text-yellow-400" />
                <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
                  ।। जय माता छिन्नमस्ता ।।
                </h2>
                <Flower className="h-5 w-5 text-yellow-400" />
              </div>
            </header>

            <div className="mt-8 space-y-6 rounded-xl bg-white/5 p-6 text-gray-200 text-base lg:text-xl backdrop-blur-sm">
              <p>
                शाकम्भरी देवी मंदिर के पास ही माता छिन्नमस्ता देवी और मनसा देवी का संयुक्त मंदिर है। माता छिन्नमस्ता का मंदिर चार शिव मंदिरों के बीच मे है पूर्व मे कमलेश्वर महादेव,पश्चिम मे शाकेश्वर महादेव, उत्तर मे वटुकेश्वर महादेव और दक्षिण मे इन्दरेश्वर महादेव के मंदिर है।
              </p>
            </div>
          </div>

          {/* Image - Right side */}
          <div className="relative w-full lg:w-5/12">
            <div className="sticky top-8 aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-yellow-400/20 shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src="/chinmastadevi1.png"
                  alt="माता छिन्नमस्ता देवी"
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
                  src="/chinmastadevi2.png"
                  alt="Mata Chinnamasta Devi"
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
                Mata Chinnamasta Devi Temple
              </h1>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Flower className="h-5 w-5 text-yellow-400" />
                <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
                  || Jai Mata Chinnamasta ||
                </h2>
                <Flower className="h-5 w-5 text-yellow-400" />
              </div>
            </header>

            <div className="mt-8 space-y-6 rounded-xl bg-white/5 p-6 text-gray-200 text-base lg:text-xl backdrop-blur-sm">
              <p>
                Adjacent to the Shakambhari Devi temple is the combined temple of Mata Chinnamasta Devi and Mansa Devi. The temple of Mata Chinnamasta is in the midst of four Shiva temples, in the east are the temples of Kamleshwar Mahadev in the east, Shakeshwar Mahadev in the west, Vatukeshwar Mahadev in the north and Indreshwar Mahadev in the south.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MataChinnamastaDevi;