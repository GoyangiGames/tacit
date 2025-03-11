"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

interface NewsItem {
  id: string
  title: string
  date: string
  image: string
  link: string
  isNew?: boolean
}

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  // New state to store the computed vertical center of the news items
  const [arrowTop, setArrowTop] = useState("50%")
  // Ref attached to the news items container
  const containerRef = useRef<HTMLDivElement>(null)

  const newsItems: NewsItem[] = [
    {
      id: "item 1",
      title: "Test 1 pog",
      date: "2025.03.10",
      image: "/assets/images/MysteryPFP.png",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isNew: true,
    },
    {
      id: "item 2",
      title: "Test 2",
      date: "2025.03.09",
      image: "/assets/images/MysteryPFP.png",
      link: "https://www.youtube.com/watch?v=gjV35rfGgV0",
      isNew: false,
    },
    {
      id: "item 3",
      title: "Regis STEALS FROM MONSTER HUNTER WEBSITE AHHHH",
      date: "2025.03.08",
      image: "/placeholder.svg?height=640&width=640",
      link: "/wilds/en-us/topics/character-creation-data/",
      isNew: false,
    },
    {
      id: "item 4",
      title: "Amongus",
      date: "SUS",
      image: "/assets/images/MysteryPFP.png",
      link: "https://www.innersloth.com/games/among-us/",
      isNew: false,
    },
    {
      id: "benchmark",
      title: "Im here to show off the funny slider",
      date: "I did not exist",
      image: "/assets/images/MysteryPFP.png",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isNew: false,
    },
        // {
    //   id: "ps5-pro",
    //   title: "PS5®Pro Enhanced Features",
    //   date: "2025.02.05",
    //   image: "/placeholder.svg?height=640&width=640",
    //   link: "/wilds/en-us/product/",
    //   isNew: false,
    // },
    // {
    //   id: "showcase",
    //   title: "Monster Hunter Wilds Showcase | 2025.2.5",
    //   date: "2025.02.05",
    //   image: "/placeholder.svg?height=640&width=640",
    //   link: "https://www.youtube.com/watch?v=-PDife4pEeo",
    //   isNew: false,
    // },
    // {
    //   id: "community-update",
    //   title: "Join us on Dec 19, 6am PT/2pm GMT for the Monster Hunter Wilds - Pre-Launch Community Update!",
    //   date: "2024.12.19",
    //   image: "/placeholder.svg?height=640&width=640",
    //   link: "/wilds/en-us/community-update/",
    // },
  ]

  // Calculate dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth
        setContainerWidth(containerWidth)

        // Determine items per view based on screen width
        let itemsPerView = 4
        if (window.innerWidth < 640) {
          itemsPerView = 1
        } else if (window.innerWidth < 1024) {
          itemsPerView = 2
        } else if (window.innerWidth < 1280) {
          itemsPerView = 3
        }

        setItemsPerView(itemsPerView)

        // Calculate item width including gap
        const gapSize = 24 // 24px gap size
        const totalGapWidth = gapSize * (itemsPerView - 1)
        const itemWidth = (containerWidth - totalGapWidth) / itemsPerView
        setItemWidth(itemWidth)
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Compute the true vertical center of the news items container relative to its parent
  useEffect(() => {
    if (containerRef.current) {
      const offsetTop = containerRef.current.offsetTop // distance from parent's top
      const height = containerRef.current.clientHeight
      setArrowTop(`${offsetTop + height / 2}px`)
    }
  }, [containerWidth])

  const slideLeft = () => {
    setCurrentIndex((prev) => Math.max(prev - 2, 0))
  }

  const slideRight = () => {
    setCurrentIndex((prev) => Math.min(prev + 2, newsItems.length - itemsPerView))
  }

  // Calculate total pages for pagination dots
  const totalPages = Math.ceil((newsItems.length - itemsPerView) / 2) + 1
  const currentPage = Math.floor(currentIndex / 2)

  const goToPage = (page: number) => {
    const newIndex = page * 2
    setCurrentIndex(Math.min(newIndex, newsItems.length - itemsPerView))
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      {/* Royal Frame with decorative elements */}
      <div className="royal-frame bg-emerald-200 text-sky-100 rounded-lg overflow-hidden border border-sky-700 relative">
        {/* Top decorative line */}
        <div className="royal-frame__lines-top absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>

        {/* Bottom decorative line */}
        <div className="royal-frame__lines-bottom absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>

        {/* Title section */}
        <div className="text-center py-6 relative">
          <h3 className="text-3xl font-bold text-sky-300 tracking-wider">NEWS</h3>
          <div className="h-under-lines flex items-center justify-center gap-1 mt-1">
            <span className="h-under-lines__l w-12 h-0.5 bg-sky-500"></span>
            <span className="h-under-lines__c w-2 h-2 rounded-full bg-sky-500"></span>
            <span className="h-under-lines__r w-12 h-0.5 bg-sky-500"></span>
          </div>
        </div>

        {/* News container */}
        <div className="news-container px-8 pb-8 pt-2 relative">
          {/* News items */}
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              initial={false}
              animate={{
                x: -currentIndex * (itemWidth + 24), // 24px is the gap size
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {newsItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-item block flex-shrink-0"
                  style={{
                    width: `${itemWidth}px`,
                    minWidth: `${itemWidth}px`,
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="news-item__inner bg-gray-900 rounded-lg overflow-hidden border border-sky-800/50 h-full flex flex-col">
                    <div className="news-item__img relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={640}
                        height={640}
                        className="w-full aspect-square object-cover"
                      />
                      {item.isNew && (
                        <div className="absolute top-2 right-2 bg-sky-500 text-black text-xs font-bold px-2 py-0.5 rounded">
                          NEW
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <p className="news-item__text text-sm mb-2 flex-grow">{item.title}</p>
                      <p className="news-item__ymd text-xs text-sky-400/80">{item.date}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons with dynamic vertical position and horizontal offset */}
          <div
            className="absolute"
            style={{ top: arrowTop, left: "-4px", transform: "translateY(-50%)" }}
          >
           <Button
              variant="ghost"
              size="icon"
              onClick={slideLeft}
              disabled={currentIndex === 0}
              className="text-gray-900 hover:text-red-700 hover:bg-gray-900/0 disabled:opacity-10"
            >
              <ChevronLeft className="h-12 w-12" 
              style={{ 
                transform: 'scale(2.5)'}}/>
              <span className="sr-only">Previous</span>
            </Button>
          </div>

          <div
            className="absolute"
            style={{ top: arrowTop, right: "-4px", transform: "translateY(-50%)" }}
          >
           <Button
              variant="ghost"
              size="icon"
              onClick={slideRight}
              disabled={currentIndex >= newsItems.length - itemsPerView}
              className="text-gray-900 hover:text-red-700 hover:bg-gray-900/0 disabled:opacity-10"
            >
              <ChevronRight className="h-12 w-12" 
              style={{ 
                transform: 'scale(2.5)'}}/>
              <span className="sr-only">Next</span>
            </Button>
          </div>

          {/* Pagination dots */}
          <div className="swiper-pagination flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPage === index ? "bg-sky-500" : "bg-gray-600 hover:bg-sky-700"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom section line */}
        <div className="section_line_bottom h-1 bg-gradient-to-r from-transparent via-sky-700/50 to-transparent"></div>
      </div>

      {/* Decorative elements for the page */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="w-32 h-32 bg-[url('/placeholder.svg?height=128&width=128')] bg-no-repeat opacity-30"></div>
            <div className="w-32 h-32 bg-[url('/placeholder.svg?height=128&width=128')] bg-no-repeat opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
