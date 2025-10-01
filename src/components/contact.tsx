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
    <footer id="contact" className="bg-black text-white py-24 w-screen absolute left-0 right-0 mt-0 mb-0">
      <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-left">Contact</h2>
              <p className="text-gray-300 text-xl text-left">Feel free to contact me :D</p>

              <div className="space-y-6">
                <div className="flex justify-start">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 py-10 px-16 text-2xl bg-transparent min-w-[365px]"
                    onClick={handleSendMessageClick}
                  >
                    Send a message
                  </Button>
                </div>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                  >
                    keane11.work@gmail.com
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                  >
                    +62 898-2395-496
                  </Button>
                </div>
              </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold">More</h3>

            <div className="space-y-4 flex flex-col items-center">
              <Button
                variant="outline"
                className="w-64 border-white text-white hover:bg-white hover:text-gray-900 py-8 px-8 justify-start bg-transparent text-lg"
                onClick={handleLinkedinClick}
              >
                <Linkedin className="h-6 w-6 mr-4" />
                LinkedIn
              </Button>

              <Button
                variant="outline"
                className="w-64 border-white text-white hover:bg-white hover:text-gray-900 py-8 px-8 justify-start bg-transparent text-lg"
                onClick={handleGithubClick}
              >
                <Github className="h-6 w-6 mr-4" />
                Github
              </Button>

              <Button
                variant="outline"
                className="w-64 border-white text-white hover:bg-white hover:text-gray-900 py-8 px-8 justify-start bg-transparent text-lg"
                onClick={handleCVClick}
              >
                <FileText className="h-6 w-6 mr-4" />
                CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}