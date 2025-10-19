import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function Contact() {
  const navigate = useNavigate()

  const handleSendMessageClick = () => {
    navigate('/contact')
  }

  const handleGithubClick = () => {
    window.open('https://github.com/Keane111', '_blank')
  }

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/keane-richard-christopher-a7693b32b/', '_blank')
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
    <footer id="contact" className="bg-black text-white py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 w-screen absolute left-0 right-0 mt-0 mb-0 transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 transition-all duration-300 ease-in-out">
            {/* Contact Info */}
            <div className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 transition-all duration-300 ease-in-out">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-left leading-tight transition-all duration-300 ease-in-out">Contact</h2>
              <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-left leading-relaxed transition-all duration-300 ease-in-out">Feel free to contact me :D</p>

              <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 transition-all duration-300 ease-in-out">
                <div className="flex justify-start">
                  <Button
                    variant="outline"
                    className="w-full max-w-md border-2 border-white text-white hover:bg-white hover:text-gray-900 py-6 xs:py-8 sm:py-8 md:py-10 lg:py-12 px-8 xs:px-10 sm:px-12 md:px-16 lg:px-20 text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl bg-transparent transition-all duration-300 ease-in-out"
                    onClick={handleSendMessageClick}
                  >
                    Send a message
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-3 max-w-md transition-all duration-300 ease-in-out">
                  <Button
                    variant="outline"
                    className="flex-1 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent py-2 xs:py-2 sm:py-3 md:py-3 lg:py-4 px-3 xs:px-3 sm:px-4 md:px-5 lg:px-6 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base transition-all duration-300 ease-in-out"
                  >
                    keane11.work@gmail.com
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent py-2 xs:py-2 sm:py-3 md:py-3 lg:py-4 px-3 xs:px-3 sm:px-4 md:px-5 lg:px-6 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base transition-all duration-300 ease-in-out"
                  >
                    +62 898-2395-496
                  </Button>
                </div>
              </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 transition-all duration-300 ease-in-out">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-300 ease-in-out">More</h3>

            <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 flex flex-col items-center transition-all duration-300 ease-in-out">
              <Button
                variant="outline"
                className="w-32 xs:w-36 sm:w-48 md:w-56 lg:w-64 xl:w-72 border-white text-white hover:bg-white hover:text-gray-900 py-2 xs:py-3 sm:py-6 md:py-8 lg:py-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 justify-center lg:justify-start bg-transparent text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 ease-in-out"
                onClick={handleLinkedinClick}
              >
                <Linkedin className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mr-2 xs:mr-2 sm:mr-3 md:mr-4 lg:mr-5 transition-all duration-300 ease-in-out" />
                LinkedIn
              </Button>

              <Button
                variant="outline"
                className="w-32 xs:w-36 sm:w-48 md:w-56 lg:w-64 xl:w-72 border-white text-white hover:bg-white hover:text-gray-900 py-2 xs:py-3 sm:py-6 md:py-8 lg:py-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 justify-center lg:justify-start bg-transparent text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 ease-in-out"
                onClick={handleGithubClick}
              >
                <Github className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mr-2 xs:mr-2 sm:mr-3 md:mr-4 lg:mr-5 transition-all duration-300 ease-in-out" />
                Github
              </Button>

              <Button
                variant="outline"
                className="w-32 xs:w-36 sm:w-48 md:w-56 lg:w-64 xl:w-72 border-white text-white hover:bg-white hover:text-gray-900 py-2 xs:py-3 sm:py-6 md:py-8 lg:py-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 justify-center lg:justify-start bg-transparent text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 ease-in-out"
                onClick={handleCVClick}
              >
                <FileText className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mr-2 xs:mr-2 sm:mr-3 md:mr-4 lg:mr-5 transition-all duration-300 ease-in-out" />
                CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}