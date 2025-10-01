import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { FadeIn } from "@/components/FadeIn"

export function Hero() {
  const navigate = useNavigate()

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
    <section id="home" className="min-h-screen relative px-8 pt-20">
      <FadeIn delay={100}>
        {/* Hello! positioned in top left */}
        <div className="absolute top-20 left-8">
          <h1 className="text-3xl font-bold text-gray-900">Hello!</h1>
        </div>
      </FadeIn>
      
      {/* Main content positioned higher */}
      <div className="pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <FadeIn delay={300}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-8xl font-normal">
                  <span className="underline decoration-2 underline-offset-4">Welcome</span> to my
                </h2>
                <h2 className="text-8xl font-normal text-gray-600">Portfolio :D</h2>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="flex items-center justify-center space-x-4 pt-8">
              <Button
                variant="outline"
                className="px-8 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
                onClick={handleCVClick}
              >
                CV
              </Button>
              <Button 
                className="px-8 py-2 bg-gray-900 text-white hover:bg-gray-800"
                onClick={handleContactClick}
              >
                Contact
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
