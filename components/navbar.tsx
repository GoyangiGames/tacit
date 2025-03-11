"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link" // Import the Link component
import Image from "next/image" // Import the Image component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Characters", href: "/characters" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex items-center justify-between px-4 py-4 w-full max-w-screen-3xl">
        <div className="text-2xl font-bold text-white">
          <Image 
            src="/assets/images/RabbitBetaArt.png" 
            alt="Game Logo" 
            width={240} // Set intrinsic width
            height={64} // Set intrinsic height
            className="block h-16 w-auto max-w-[180px] sm:max-w-[240px]"
          />
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              className="text-black hover:bg-white/10 p-0 rounded-full h-12 w-12 flex items-center justify-center mr-[2px] sm:mr-[6px]"
            >
              <div className="relative h-10 w-10">
                <Menu
                  className="absolute inset-0 m-auto" 
                  size={20}
                  strokeWidth={2.5}
                  style={{ 
                    transform: 'scale(3)',
                    transformOrigin: 'center'
                  }}
                />
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-blue-950/95 text-white">
            <div className="mt-12 flex flex-col gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href} // Use the href prop
                  className="text-2xl font-bold transition-colors hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}