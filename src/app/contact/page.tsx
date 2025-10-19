import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, FileText } from "lucide-react"
import { useState } from "react"
import { FadeIn } from "@/components/FadeIn"
import EmailNotification from "@/components/EmailNotification"


export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showNotification, setShowNotification] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "45984c4b-654a-45c5-b560-1dc86cd3727a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setSubmitStatus('success');
        setShowNotification(true);
        // Reset form
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/keane-richard-christopher-a7693b32b/', '_blank')
  }

  const handleGithubClick = () => {
    window.open('https://github.com/Keane111', '_blank')
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
    <div className="min-h-screen bg-white">
      {/* Main Contact Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 pt-24">
        <FadeIn delay={100}>
          <h1 className="text-5xl font-bold text-black mb-4 text-left">Contact</h1>
          <div className="w-full h-px bg-gray-300 mb-12"></div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <FadeIn delay={300}>
            <div>
              <h2 className="text-2xl font-semibold text-black mb-8 text-left">Send a message</h2>

            <form className="space-y-8" onSubmit={onSubmit}>
              <div>
                <label className="text-lg text-black mb-2 block text-left">Name :</label>
                <Input
                  type="text"
                  name="name"
                  required
                  className="w-full border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-0 py-2 focus:border-black focus:ring-0"
                />
              </div>

              <div>
                <label className="text-lg text-black mb-2 block text-left">Email :</label>
                <Input
                  type="email"
                  name="email"
                  required
                  className="w-full border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-0 py-2 focus:border-black focus:ring-0"
                />
              </div>

              <div>
                <label className="text-lg text-black mb-2 block text-left">Message :</label>
                <Textarea 
                  name="message"
                  required
                  className="w-full border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-0 py-2 focus:border-black focus:ring-0 min-h-[100px] resize-none" 
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm">
                  ✓ Message sent successfully! Thank you for contacting me.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm">
                  ✗ Failed to send message. Please try again or contact me directly.
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black border-2 border-black hover:bg-black hover:text-white px-8 py-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={500}>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg text-gray-600 mb-4">Contact Info :</h3>
              <p className="text-black mb-2">keane11.work@gmail.com</p>
              <p className="text-black">+62 898-2395-496</p>
            </div>

            <div>
              <h3 className="text-lg text-gray-600 mb-4">Socials and Info :</h3>
              <div className="space-y-3">
                <div className="space-y-4 flex flex-col items-center">
                    <Button
                        variant="outline"
                        className="w-64 border-black text-black hover:bg-black hover:text-white py-8 px-8 justify-start bg-transparent text-lg"
                        onClick={handleLinkedinClick}
                            >
                                <Linkedin className="h-6 w-6 mr-4" />
                                LinkedIn
                    </Button>
                
                    <Button
                        variant="outline"
                        className="w-64 border-black text-black hover:bg-black hover:text-white py-8 px-8 justify-start bg-transparent text-lg"
                        onClick={handleGithubClick}
                            >
                                <Github className="h-6 w-6 mr-4" />
                                Github
                    </Button>
                
                    <Button
                        variant="outline"
                        className="w-64 border-black text-black hover:bg-black hover:text-white py-8 px-8 justify-start bg-transparent text-lg"
                        onClick={handleCVClick}
                            >
                                <FileText className="h-6 w-6 mr-4" />
                                CV
                    </Button>
                            </div>
              </div>
            </div>

            <div>
              <p className="text-gray-600">Location : Indonesia</p>
            </div>
          </div>
          </FadeIn>
        </div>
      </main>

      <Contact />
      
      {/* Email Notification */}
      <EmailNotification 
        showNotification={showNotification} 
        onHide={() => setShowNotification(false)} 
      />
    </div>
  )
}
