"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const features = [
  {
    title: "Banshankari",
    link: "/banshankari",
    imageSrc: "/bhura.png", // Replace with actual image path
    altText: "Banshankari Temple"
  },
  {
    title: "Temple Navigation",
    link: "/navigation",
    imageSrc: "/bhura.png", // Replace with actual image path
    altText: "Temple Map"
  },
  {
    title: "Temple Events",
    link: "/mela",
    imageSrc: "/bhura.png", // Replace with actual image path
    altText: "Temple Festival"
  },
  {
    title: "Sacred Chants",
    link: "/aarti",
    imageSrc: "/bhura.png", // Replace with actual image path
    altText: "Sacred Chants"
  }
]

export default function FeatureCards() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl min-h-80 md:min-h-96">
              {/* Image */}
              <Image 
                src={feature.imageSrc} 
                alt={feature.altText}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={index < 2}
              />
              
              {/* Text link that appears on hover */}
              <Link href={feature.link}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/40 backdrop-blur-sm">
                  <span className="text-3xl font-bold text-black px-6 py-3 rounded-lg">
                    {feature.title}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}