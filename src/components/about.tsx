import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function About() {
  const navigate = useNavigate()

  const handleMoreClick = () => {
    navigate('/about')
  }

  return (
    <section id="about" className="py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto">
        {/* First Row: About me (left) + Organization (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-300 ease-in-out">
          
          {/* About Me Section */}
          <div className="space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-10 transition-all duration-300 ease-in-out">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-left leading-tight transition-all duration-300 ease-in-out">About me</h2>
            <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5 text-gray-700 leading-relaxed text-left transition-all duration-300 ease-in-out">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-300 ease-in-out">Currently a Computer Science student at BINUS University, 5th semester, 3rd year.
                Software Engineer, I'm  also interested in learning new things, I am also interested in the fields of design and video editing.
              </p>
            </div>
          </div>

          {/* Organization Section */}
          <div className="space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-10 transition-all duration-300 ease-in-out">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 text-left leading-tight transition-all duration-300 ease-in-out">Organization</h3>

            <div className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-300 ease-in-out">
              <div className="space-y-1 transition-all duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight transition-all duration-300 ease-in-out text-left">• KBMK</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed transition-all duration-300 ease-in-out text-left">- Coordinator</span>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-gray-500 transition-all duration-300 ease-in-out text-right">2023 - Now</span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 ml-0 sm:ml-4 leading-relaxed transition-all duration-300 ease-in-out text-left">( Keluarga Besar Mahasiswa Khonghucu )</p>
              </div>

              <div className="space-y-1 transition-all duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight transition-all duration-300 ease-in-out text-left">• BNCC</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed transition-all duration-300 ease-in-out text-left">- Member</span>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-gray-500 transition-all duration-300 ease-in-out text-right">2024 - 2025</span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 ml-0 sm:ml-4 leading-relaxed transition-all duration-300 ease-in-out text-left">( Bina Nusantara Computer Club )</p>
              </div>

              <div className="space-y-1 transition-all duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight transition-all duration-300 ease-in-out text-left">• BCC</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed transition-all duration-300 ease-in-out text-left">- Member</span>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-gray-500 transition-all duration-300 ease-in-out text-right">2025 - Now</span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 ml-0 sm:ml-4 leading-relaxed transition-all duration-300 ease-in-out text-left">( BINUS Chess Club )</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-300 ease-in-out">
          {/* Skills Title */}
          <div className="mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 transition-all duration-300 ease-in-out">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 text-left leading-tight transition-all duration-300 ease-in-out">Skills</h3>
          </div>

          {/* Hard Skills (left) + Soft Skills (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 transition-all duration-300 ease-in-out">
            
            {/* Hard Skills Section */}
            <div className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-300 ease-in-out">
              <div className="border-2 border-gray-900 p-3 xs:p-4 sm:p-6 md:p-8 transition-all duration-300 ease-in-out">
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6 md:mb-8 text-left leading-tight transition-all duration-300 ease-in-out">Hard Skills</h4>
                <ul className="space-y-1.5 xs:space-y-2 sm:space-y-3 md:space-y-4 text-gray-700 text-left text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-300 ease-in-out">
                  <li>• Video Editing</li>
                  <li>• Power Point</li>
                  <li>• UI / UX Design</li>
                  <li>• HTML</li>
                  <li>• CSS</li>
                  <li>• Laravel</li>
                </ul>
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-300 ease-in-out">
              <div className="bg-gray-900 text-white p-3 xs:p-4 sm:p-6 md:p-8 transition-all duration-300 ease-in-out">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 xs:mb-4 sm:mb-6 md:mb-8 text-left leading-tight transition-all duration-300 ease-in-out">Soft Skills</h4>
                <ul className="space-y-1.5 xs:space-y-2 sm:space-y-3 md:space-y-4 text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed transition-all duration-300 ease-in-out">
                  <li>• Experienced to be a Event Committee several times</li>
                  <li>• Get chosen to be one of the Coordinators for the organization to coordinate a team of activist</li>
                  <li>• Have served as PM and PIC for some of the organization events</li>
                  <li>• Collaborate with committees on other organizations events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* More Button */}
        <div className="text-center mt-6 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-16 transition-all duration-300 ease-in-out">
          <Button 
            className="bg-gray-900 text-white hover:bg-gray-800 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 w-full sm:w-auto text-sm sm:text-base md:text-lg transition-all duration-300 ease-in-out"
            onClick={handleMoreClick}
          >
            More
          </Button>
        </div>
      </div>
    </section>
  )
}