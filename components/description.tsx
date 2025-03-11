import Image from "next/image"

export default function GameDescription() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4"> {/* Reduced gap */}
        {/* Left Side: Flavor Text */}
        <div className="flex-1 text-center md:text-center md:pl-8"> {/* Added left padding on md screens */}
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Play Against Your Friends In EPIC PVP Battles
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">
            I created a really cool description to put here, it will be awesome and amazing right chat?
          </p>
        </div>

        {/* Right Side: Image with Smooth Scaling */}
        <div className="flex-1 w-full">
          <div className="relative w-full max-w-[800px] mx-auto overflow-hidden rounded-lg">
            {/* Use a padding hack to enforce aspect ratio */}
            <div className="pb-[56.25%]"> {/* 16:9 aspect ratio (9/16 = 0.5625) */}
              <Image
                src="/assets/images/titled.png" // Replace with your image path
                alt="Game Screenshot"
                fill // Makes the image fill the container
                className="object-cover" // Ensures the image covers the area
                sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizes
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}