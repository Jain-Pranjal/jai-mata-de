// "use client";

// import React from "react";
// import { Flower } from "lucide-react";
// import { useLanguageStore } from "@/store/languageStore";
// import { winnersContent } from "@/content/winner"; 
// import RegistrationForm from "@/components/RegistrationForm";

// const ContestPage = () => {
//   const { selectedLanguage } = useLanguageStore();
//   const displayLanguage = selectedLanguage || "english"; // Default to English
//   const content = winnersContent[displayLanguage as keyof typeof winnersContent] || winnersContent.english;

 
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
               

//       <div className="flex flex-col lg:flex-row gap-8 mb-16">
//               {/* Registration Form - Left Side */}
//               <div className="w-full lg:w-1/2">
//                 <RegistrationForm />
//               </div>
              
//               {/* Shining Banner - Right Side */}
//               <div className="w-full lg:w-1/2 flex items-center justify-center">
//                 <div className="relative w-full max-w-md p-8 rounded-2xl overflow-hidden">
//                   {/* Animated gradient background */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-90 animate-pulse"></div>
                  
//                   {/* Shining effect */}
//                   <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-shimmer"></div>
                  
//                   <div className="relative flex flex-col items-center text-center space-y-6">
//                     <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                       </svg>
//                     </div>
//                     <h2 className="text-3xl font-bold text-white">Registration Open!</h2>
//                     <p className="text-white/80 text-lg">Share your experience with us through your video submission</p>
//                     <div className="py-4 px-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
//                       <p className="text-white font-medium">
//                         Complete the form to participate in our exclusive event
//                       </p>
//                     </div>
//                     <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
//                     <div className="absolute -top-10 -left-10 h-40 w-40 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>



//       {/* Header Section */}
//       <header className="container mx-auto pt-8 pb-4 text-center">
//         <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl p-2">
//           {content.title}
//         </h1>
//         <div className="flex items-center justify-center gap-3">
//           <Flower className="h-5 w-5 text-yellow-400" />
//           <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
//             {content.subtitle}
//           </h2>
//           <Flower className="h-5 w-5 text-yellow-400" />
//         </div>
//       </header>

//       {/* Winners Section */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {content.winners.map((winner, index) => (
//             <div
//               key={index}
//               className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border-2 border-yellow-400/20 transform transition-transform duration-500 hover:scale-105"
//             >
//               {/* Winner Details Above Video */}
//               <div className="text-center mb-4">
//                 <span className="text-4xl mb-2 block">{winner.trophy}</span>
//                 <h3 className="text-yellow-400 text-xl font-bold mb-1">
//                   {winner.position}
//                 </h3>
//                 <p className="text-gray-200">{winner.name}</p>
//               </div>

//               {/* YouTube Video Embed */}
//               <div className="relative w-full aspect-video rounded-lg overflow-hidden">
//               <iframe
//                   className="w-full h-full"
//                   src={winner.videoUrl}
//                   title={`Winner Video ${index + 1}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                 ></iframe>

//                  {/* Fallback Link
//                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
//                   <a
//                     href={getWatchUrl(winner.videoUrl)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-yellow-400 underline"
//                   >
//                     Watch on YouTube
//                   </a>
//                 </div> */}

                
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ContestPage;




"use client";

import React from "react";
import { Flower } from "lucide-react";
import { useLanguageStore } from "@/store/languageStore";
import { winnersContent } from "@/content/winner"; 
import RegistrationForm from "@/components/RegistrationForm";

const ContestPage = () => {
  const { selectedLanguage } = useLanguageStore();
  const displayLanguage = selectedLanguage || "english"; // Default to English
  const content = winnersContent[displayLanguage as keyof typeof winnersContent] || winnersContent.english;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="pt-8 pb-4 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl p-2">
            {content.title}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <Flower className="h-5 w-5 text-yellow-400" />
            <h2 className="text-xl font-semibold text-yellow-400 md:text-2xl">
              {content.subtitle}
            </h2>
            <Flower className="h-5 w-5 text-yellow-400" />
          </div>
        </header>

        {/* Registration Form and Shining Banner Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Registration Form - Left Side */}
          <div className="w-full lg:w-1/2">
            <RegistrationForm />
          </div>
          
          {/* Shining Banner - Right Side */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-md p-8 rounded-2xl overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-90 animate-pulse"></div>
              
              {/* Shining effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-shimmer"></div>
              
              <div className="relative flex flex-col items-center text-center space-y-6">
                <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Registration Open!</h2>
                <p className="text-white/80 text-lg">Share your experience with us through your video submission</p>
                <div className="py-4 px-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <p className="text-white font-medium">
                    Complete the form to participate in our exclusive event
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -top-10 -left-10 h-40 w-40 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Winners Section */}
        <main className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.winners.map((winner, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border-2 border-yellow-400/20 transform transition-transform duration-500 hover:scale-105"
              >
                {/* Winner Details Above Video */}
                <div className="text-center mb-4">
                  <span className="text-4xl mb-2 block">{winner.trophy}</span>
                  <h3 className="text-yellow-400 text-xl font-bold mb-1">
                    {winner.position}
                  </h3>
                  <p className="text-gray-200">{winner.name}</p>
                </div>

                {/* YouTube Video Embed */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={winner.videoUrl}
                    title={`Winner Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContestPage;