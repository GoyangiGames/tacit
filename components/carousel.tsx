"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CarouselItem {
  image: string
  title: string
  description: string
  icon: string
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const carouselItems: CarouselItem[] = [
    {
      image: "/assets/images/RabbitGREENSCREENED.png",
      title: "Rabbit",
      description: "Just a silly little rabbit pog that had a dream.",
      icon: "/assets/images/RabbitBetaArt.png",
    },
    {
      image: "/assets/images/PhayuGREENSCREENED.png",
      title: "Phayu",
      description: "Magic Pog",
      icon: "/assets/images/PhayuBetaArt.png",
    },
    {
      image: "/assets/images/MysteryPFP.png",
      title: "???",
      description: "NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE",
      icon: "/assets/images/MysteryPFP.png",
    },
    {
      image: "/assets/images/MysteryPFP.png",
      title: "???",
      description: "NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE",
      icon: "/assets/images/MysteryPFP.png",
    },
  ]

  return (
    <div className="mx-auto max-w-5xl pt-0 pb-8 px-4 md:px-8">
      {/* Title */}
      <h1 className="mb-6 text-center text-5xl font-bold text-black">
        Playable Characters
      </h1>

      {/* Mobile Layout */}
      <div className="block flex flex-col gap-6 lg:hidden">
        {/* Icon Grid: Using CSS Grid for perfect squares */}
        <div className="mx-auto w-full max-w-xs">
          <div className="grid grid-cols-2 gap-4">
            {carouselItems.map((item, index) => (
              <div key={index} className="aspect-square">
                <Button variant="ghost" className="group h-full w-full p-0" onClick={() => setActiveIndex(index)}>
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt={`${item.title} icon`}
                      width={100} // Set intrinsic width
                      height={100} // Set intrinsic height
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Title overlay with larger text */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-1 text-center text-xs font-bold text-black sm:text-sm">
                      {item.title}
                    </div>
                    <div
                      className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                        activeIndex === index ? "opacity-50" : "opacity-0 group-hover:opacity-50"
                      }`}
                    />
                  </div>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Image Carousel */}
        <div className="w-full">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description and Button */}
        <div className="text-center">
          <p className="text-base text-black">{carouselItems[activeIndex].description}</p>
          <div className="mt-4">
            <Button className="bg-blue-600 px-8 py-4 text-lg hover:bg-blue-700">See All Heroes</Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row lg:gap-8">
        {/* Image Carousel Section */}
        <div className="w-1/2">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Icons + Description + Button Section */}
        <div className="flex w-1/2 flex-col justify-between">
          {/* Icon Grid using CSS Grid for perfect squares */}
          <div className="mx-auto w-full max-w-xs">
            <div className="grid grid-cols-2 gap-4">
              {carouselItems.map((item, index) => (
                <div key={index} className="aspect-square">
                  <Button variant="ghost" className="group h-full w-full p-0" onClick={() => setActiveIndex(index)}>
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        alt={`${item.title} icon`}
                        width={100} // Set intrinsic width
                        height={100} // Set intrinsic height
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 z-10 p-1 text-center text-sm font-bold text-black">
                        {item.title}
                      </div>
                      <div
                        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                          activeIndex === index ? "opacity-50" : "opacity-0 group-hover:opacity-50"
                        }`}
                      />
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Description and Button aligned at the bottom */}
          <div className="text-center">
            <p className="text-base font-bold text-black">{carouselItems[activeIndex].description}</p>
            <div className="mt-4">
              <Button className="bg-blue-600 px-8 py-4 text-lg hover:bg-blue-700">See All Heroes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}