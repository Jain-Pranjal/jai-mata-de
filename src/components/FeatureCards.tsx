"use client"

import Link from "next/link"
import { BookOpen, MapPin, Calendar, Music } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-yellow-400" />,
    title: "Banshankari",
    description: "Explore the divine stories and legends of Mata Shakumbhari Devi.",
    link: "/shri-shakumbhari-devi/banshankari",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <MapPin className="h-10 w-10 text-red-400" />,
    title: "Temple Navigation",
    description: "Find your way to the sacred temple and important locations.",
    link: "/navigation",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: <Calendar className="h-10 w-10 text-green-400" />,
    title: "Mela Information",
    description: "Get details about upcoming melas, festivals and events.",
    link: "/mela",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: <Music className="h-10 w-10 text-blue-400" />,
    title: "Aarti & Bhajans",
    description: "Listen to and learn sacred aartis and bhajans dedicated to the goddess.",
    link: "/aarti",
    color: "from-blue-500 to-cyan-500",
  },
]

export default function FeatureCards() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Link href={feature.link} key={index} className="block transform transition-all duration-300 hover:scale-105">
            <Card className="h-full bg-white/10 backdrop-blur-sm border-none shadow-xl overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 rounded-xl`}></div>
            <CardHeader>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-2xl font-bold text-white">{feature.title}</CardTitle>
              <CardDescription className="text-gray-300">{feature.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/20">
                Explore {feature.title}
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
      </div>
    </div>
  )
}

