import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  const handleMoreClick = () => {
    navigate('/projects')
  }

  const handleProjectClick = (path: string | null) => {
    if (path) {
      navigate(path)
    }
  }
  
  const projects = [
    {
      title: "FoodHub",
      image: "/FoodHub.png",
      alt: "FoodHub Project",
      path: "/projects/foodhub"
    },
    {
      title: "Jenius Academy",
      image: "/Jenius Academy.png",
      alt: "Jenius Academy Project",
      path: "/projects/jenius-academy"
    },
    {
      title: "BananaCat",
      image: "/BananaCat.png",
      alt: "BananaCat Project",
      path: "/projects/BananaCat"
    },
    {
      title: "ChipiChapa",
      image: "/ChipiChapa.png",
      alt: "ChipiChapa Project",
      path: "/projects/ChipiChapa"
    },
    {
      title: "KBMK Website",
      image: "/KBMK Web.png",
      alt: "KBMK Website Project",
      path: "/projects/kbmk-web"
    },
    {
      title: "KBMK",
      image: "/KBMK.jpg",
      alt: "KBMK Project",
      path: "/projects/kbmk"
    },
    {
      title: "World University",
      image: "/World University.png",
      alt: "World University Project",
      path: "/projects/world-university"
    },
    {
      title: "To Be Continue",
      image: "/to-be-continue.jpg",
      alt: "More Projects Coming Soon",
      path: null // No path for "To Be Continue"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length)
    }, isHovered ? 8000 : 4000) // Slower when hovered (8s), normal when not hovered (4s)

    return () => clearInterval(interval)
  }, [projects.length, isHovered])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="projects" className="py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16 transition-all duration-300 ease-in-out">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight transition-all duration-300 ease-in-out">Projects</h2>

          {/* Project Slider */}
          <div 
            className="relative transition-all duration-300 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slider Container */}
            <div className="overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-in-out">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-2 xs:p-4 sm:p-6 md:p-8 lg:p-10 transition-all duration-300 ease-in-out">
                    <div 
                      className={`aspect-video relative overflow-hidden rounded-lg bg-white transition-all duration-300 ease-in-out ${
                        project.path ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''
                      }`}
                      onClick={() => handleProjectClick(project.path)}
                    >
                      <img 
                        src={project.image} 
                        alt={project.alt} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div className="mt-4 md:mt-6 text-center">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Previous project"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Next project"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-gray-900' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="bg-gray-900 text-white hover:bg-gray-800 px-8"
              onClick={handleMoreClick}
            >
              More
            </Button>
          </div>

          <div className="text-center border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600">
              * Jenius Academy, BananaCat, ChipiChapa, FoodHub, KBMK Website, KBMK, World University, and more exciting projects are all part of
              my projects portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
