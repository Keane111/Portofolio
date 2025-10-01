import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function About() {
  const navigate = useNavigate()

  const handleMoreClick = () => {
    navigate('/about')
  }

  return (
    <section id="about" className="py-24 px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Me Section */}
          <div className="space-y-8">
            <h2 className="text-6xl font-bold text-gray-900 text-left">About me</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-left">
              <p className="text-xl"  >Currently a Computer Science student at BINUS University, 5th semester, 3rd year.
                Software Engineer, I’m  also interested in learning new things, I am also interested in the fields of design and video editing.
              </p>
              
            </div>

            {/* Hard Skills Section */}
            <div className="space-y-6">
              <h3 className="text-5xl font-bold text-gray-900 text-left">Skills</h3>
              <div className="border-2 border-gray-900 p-6">
                <h4 className="text-3xl font-bold text-gray-900 mb-6 text-left">Hard Skills</h4>
                <ul className="space-y-3 text-gray-700 text-left text-lg">
                  <li>• Video Editing</li>
                  <li>• Power Point</li>
                  <li>• UI / UX Design</li>
                  <li>• HTML</li>
                  <li>• CSS</li>
                  <li>• Laravel</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Organization Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 text-left">Organization</h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">• KBMK</span>
                    <span className="text-gray-600">- Coordinator</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-4">( Keluarga Besar Mahasiswa Khoirudin )</p>
                </div>
                <span className="text-sm text-gray-500">2023 - Now</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">• BNCC</span>
                    <span className="text-gray-600">- Member</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-4">( Bina Nusantara Computer Club )</p>
                </div>
                <span className="text-sm text-gray-500">2024 - 2025</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">• BCC</span>
                    <span className="text-gray-600">- Member</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-4">( BINUS Chess Club )</p>
                </div>
                <span className="text-sm text-gray-500">2025 - Now</span>
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="space-y-6">
              <div className="bg-gray-900 text-white p-6">
                <h4 className="text-3xl font-bold mb-6 text-left">Soft Skills</h4>
                <ul className="space-y-3 text-left text-lg">
                  <li>• Experienced to be a Event Committee several times</li>
                  <li>• Get chosen to be one of the Coordinators for the organization</li>
                  <li>• Have served as PM and PIC for some of the organization events</li>
                  <li>• Collaborate with committees on other organizations events</li>
                  <li>• Coordinating a team of activist in one of the division</li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* More Button */}
        <div className="text-center mt-12">
          <Button 
            className="bg-gray-900 text-white hover:bg-gray-800 px-8"
            onClick={handleMoreClick}
          >
            More
          </Button>
        </div>
      </div>
    </section>
  )
}
