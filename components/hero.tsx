"use client"

// import { useState } from "react"
import Image from "next/image"

export default function Hero() {
  // const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <div className="relative w-full" style={{ height: "95vh" }}> {/* Set height to 90vh */}
      {/* Background image using <Image> component */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/jacif_offical_art.png" // Path to your image
          alt="Background Art"
          layout="fill" // Fill the container
          objectFit="cover" // Ensure the image covers the area
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-blue-950/40"></div>
      </div>

      {/* Video (fixed background) */}
      {/*       <div className="absolute inset-0"> 
                <div className="fixed inset-0 z-0">*/}
                {/* Changed from absolute to fixed, added z-0 */}
      {/* <div className="absolute inset-0"> 
        <video
          className="relative h-screen w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src="/assets/videos/test720.mp4" type="video/mp4" />
        </video>
        {videoLoaded && <div className="absolute inset-0 bg-blue-950/40"></div>}
      </div> */}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-fuchsia-600">
        <div className="container px-4">
          <h1 className="mb-4 text-4xl font-bold md:mb-6 md:text-7xl">Tacit</h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg md:mb-8 md:text-xl">
            This is our really shitty game
          </p>
          <button className="rounded-full bg-blue-600 px-6 py-2.5 font-bold text-white transition-colors hover:bg-blue-700 md:px-8 md:py-3">
          {`Don't Click`}
          </button>
        </div>
      </div>
    </div>
  )
}