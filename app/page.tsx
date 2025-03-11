import Hero from "@/components/hero"
import Slideshow from "@/components/slideshow"
import Carousel from "@/components/carousel"
import Description from "@/components/description"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-emerald-100">
      <Hero />
      <Description />
      
      {/* New Section with Custom Background */}
      {/* <section className="relative z-10 bg-neutral-800 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience next-level gaming with these incredible features:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Dynamic Combat</h3>
              <p className="text-gray-600">Fluid real-time battle system with combo mechanics</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Open World</h3>
              <p className="text-gray-600">Explore vast landscapes with seamless transitions</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Character Customization</h3>
              <p className="text-gray-600">Create your unique hero with deep RPG systems</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Existing Transparent Section */}
      <section className="relative z-10 pt-[2vh]">
        <Carousel />
        <div className="w-full">
          <div className="container mx-auto px-4 py-8 md:py-16">
            <Slideshow />
            <div className="mt-8 md:mt-16 text-black">
              <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold">About the Game</h2>
              <p className="mb-4 text-base md:text-lg">
                Bottom Text.
              </p>
              <p className="text-base md:text-lg">
                Super Bottom Text.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
