"use client"

import { useEffect, useState } from "react"
import { Calendar } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguageStore } from "@/store/languageStore";
import Autoplay from "embla-carousel-autoplay"
import {navratriEventsContent} from "@/content/carousel"
import type { EmblaCarouselType } from 'embla-carousel'


export default function EventsCarousel() {
  const { selectedLanguage } = useLanguageStore();
  const displayLanguage = selectedLanguage || "english"; 

  const content = navratriEventsContent[displayLanguage as keyof typeof navratriEventsContent] || navratriEventsContent.english;


  const [api, setApi] = useState<EmblaCarouselType | null>(null)


  const [current, setCurrent] = useState(0)

  const plugin = Autoplay({ delay: 5000, stopOnInteraction: true })

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section className="w-full py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
        </div>

        <Carousel
          setApi={(api) => setApi(api ?? null)}

          plugins={[plugin]}
          className="w-full"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {content.map((event) => (
              <CarouselItem key={event.id} className="pl-4 basis-full">
                <div className="flex justify-center">
                  <Card className="h-full border-none overflow-hidden bg-white/5 backdrop-blur-md max-w-xl w-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.gradientColor} opacity-20 rounded-xl`}></div>
                    <CardContent className="p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">{event.day}</h3>
                      <div className="space-y-3 text-gray-200">
                        <div className="flex items-center justify-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-300" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                      {/* <span className="block mt-2 text-lg font-semibold text-white">{event.color}</span> */}
                      <p className="mt-4 text-gray-300">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    current === index ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

            <div className="relative w-full max-w-xl mx-auto">
              <CarouselPrevious className="hidden md:flex absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
              <CarouselNext className="hidden md:flex absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            </div>
        </Carousel>
      </div>
    </section>
  )
}
