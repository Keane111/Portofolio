import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/FadeIn"

export default function KBMKPage() {
  const handleArticlesClick = () => {
    window.open('https://student-activity.binus.ac.id/kbmk/2025/06/artikel-ldk-cp-kbmk-2025/', '_blank');
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

        {/* Project Image - Group photo from KBMK event */}
        <FadeIn delay={0.3}>
          <div className="mb-16">
            <div className="bg-white border border-gray-200 shadow-lg">
              <img
                src="/KBMK.jpg"
                alt="KBMK Volunteer Group Photo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </FadeIn>

        {/* Project Description */}
        <FadeIn delay={0.5}>
          <div className="mb-16">
            <p className="text-2xl text-gray-700 leading-relaxed mb-8 text-left">
              Became Project Manager for one of the events in the KBMK organization at BINUS University and Responsible
              for organizing and monitoring the event committee of the event.
            </p>

            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="px-8 py-3 text-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                onClick={handleArticlesClick}
              >
                Articles
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="w-full h-px bg-gray-300"></div>
        </FadeIn>
      </main>

      <FadeIn delay={0.9}>
        <Contact />
      </FadeIn>
    </div>
  )
}
