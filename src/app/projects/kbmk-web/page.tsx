import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/FadeIn"

export default function KBMKPage() {
  const handleGithubClick = () => {
    window.open('https://github.com/Keane111/KBMK', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-6 py-16 pt-24">
        {/* Project Header */}
        <FadeIn delay={0.1}>
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Project</h1>
            <div className="w-full h-px bg-gray-300 mb-12"></div>

            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold text-gray-900">KBMK</h2>
              <span className="text-2xl font-medium text-gray-600">2025</span>
            </div>
          </div>
        </FadeIn>

        {/* Project Image - KBMK Website */}
        <FadeIn delay={0.3}>
          <div className="mb-16">
            <div className="bg-white border border-gray-200 shadow-lg">
              <img
                src="/KBMK Web.png"
                alt="KBMK Website Interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </FadeIn>

        {/* Project Description */}
        <div className="mb-16">
          <p className="text-2xl text-gray-700 leading-relaxed mb-8 text-left">
            We’ve developed a first university-based Confucian organization website with the team of 3, I was responsible for designing UI/UX and creating a front-end of the website.
          </p>

          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              onClick={handleGithubClick}
            >
              GitHub
            </Button>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300"></div>
      </main>

      <Contact />
    </div>
  )
}
