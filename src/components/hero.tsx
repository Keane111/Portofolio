import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { FadeIn } from "@/components/FadeIn"
import { LogoLoop, type LogoItem } from "@/components/LogoLoop"

export function Hero() {
  const navigate = useNavigate()

  const techLogos: LogoItem[] = [
    { src: "/html logo.png", alt: "HTML5", title: "HTML5" },
    { src: "/css-3 logo.png", alt: "CSS3", title: "CSS3" },
    { src: "/js logo.png", alt: "JavaScript", title: "JavaScript" },
    { src: "/React logo.png", alt: "React", title: "React" },
    { src: "/figma logo.png", alt: "Figma", title: "Figma" },
    { src: "/github logo.png", alt: "GitHub", title: "GitHub" },
    { src: "/laravel logo.png", alt: "Laravel", title: "Laravel" }
  ]

  const handleContactClick = () => {
    navigate('/contact')
  }

  const handleCVClick = () => {
    const link = document.createElement('a')
    link.href = '/Keane Richard Christopher CV.pdf'
    link.download = 'Keane Richard Christopher CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="relative px-4 sm:px-6 md:px-8 lg:px-12 pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-12 transition-all duration-300 ease-in-out">
      <FadeIn delay={100}>
        {/* Hello! positioned in top left with more space from navbar - enhanced responsive positioning */}
        <div className="absolute top-8 xs:top-10 sm:top-12 md:top-14 lg:top-16 left-3 xs:left-4 sm:left-6 md:left-8 lg:left-12">
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 transition-all duration-300 ease-in-out leading-tight">Hello!</h1>
        </div>
      </FadeIn>
      
      {/* Main content positioned lower to avoid collision with Hello text - enhanced responsive spacing */}
      <div className="pt-16 xs:pt-18 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 transition-all duration-300 ease-in-out">
        <div className="max-w-4xl mx-auto text-center space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 transition-all duration-300 ease-in-out">
          <FadeIn delay={300}>
            <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 transition-all duration-300 ease-in-out">
              <div className="space-y-1 xs:space-y-1 sm:space-y-2 md:space-y-3 transition-all duration-300 ease-in-out">
                <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-normal leading-tight xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight transition-all duration-300 ease-in-out">
                  <span className="underline decoration-2 sm:decoration-3 md:decoration-4 lg:decoration-6 underline-offset-4 sm:underline-offset-6 md:underline-offset-8 lg:underline-offset-10 transition-all duration-300 ease-in-out">Welcome</span> to my
                </h2>
                <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-normal text-gray-600 leading-tight xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight transition-all duration-300 ease-in-out">Portfolio :D</h2>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 xs:space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4 lg:space-x-6 pt-3 xs:pt-4 sm:pt-6 md:pt-8 lg:pt-10 transition-all duration-300 ease-in-out">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-1.5 xs:py-2 sm:py-2.5 md:py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent transition-all duration-300 ease-in-out text-xs xs:text-sm sm:text-base md:text-lg"
                onClick={handleCVClick}
              >
                CV
              </Button>
              <Button 
                className="w-full sm:w-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-1.5 xs:py-2 sm:py-2.5 md:py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 ease-in-out text-xs xs:text-sm sm:text-base md:text-lg"
                onClick={handleContactClick}
              >
                Contact
              </Button>
            </div>
          </FadeIn>

          {/* Tech Logos Infinite Loop */}
          <FadeIn delay={700}>
            <div className="pt-8 sm:pt-12 md:pt-16 transition-all duration-300 ease-in-out">
              <LogoLoop 
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={50}
                gap={40}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="#ffffff"
                ariaLabel="Technology stack"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
