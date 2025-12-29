import { Contact } from "@/components/contact"
import { FadeIn } from "@/components/FadeIn"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-8 text-left">
          {/* About Me Header */}
          <FadeIn delay={100}>
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 text-left">About me</h1>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
          </FadeIn>

          {/* Hello Section */}
          <FadeIn delay={300}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">Hello !</h2>
              <p className="text-2xl text-gray-700 leading-relaxed text-left">
                My name is Keane, I'm currently a Computer Science student at BINUS University. I'm interested in learning
                new things, I am also interested in the fields of design and video editing.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="w-full h-px bg-gray-300 mb-12"></div>
          </FadeIn>

          {/* Organization Section */}
          <FadeIn delay={500}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-left">Organization</h2>

            {/* KBMK */}
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-gray-900 mb-2 text-left">
                KBMK <span className="text-sm font-normal text-gray-600">( Keluarga Besar Mahasiswa Khonghucu )</span>
              </h3>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-xl font-medium text-gray-900">
                    Coordinator of Resources & Education and Development
                  </span>
                  <span className="ml-auto text-sm text-gray-600">2025 - Present</span>
                </div>
                <div className="ml-5 text-sm text-gray-700 mb-4">
                  <div className="flex items-start mb-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span className= "text-xl">
                      Chosen to be a Coordinator of the Resources & Education and Development (RED) Division, which
                      responsible for managing resources, gathering weekly education subjects and materials, planning,
                      coordinating the activities on the RED Division, and instruct the participants who attended the
                      Ming De about the subject and the material of the week.
                    </span>
                  </div>
                </div>  
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-xl font-medium text-gray-900">Activist</span>
                  <span className="ml-auto text-sm text-gray-600">2024 - 2025</span>
                </div>
                <div className="ml-5 text-sm text-gray-700">
                  <div className="flex items-start mb-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span className= "text-xl" >Participated to be an event committee in several of the event</span>
                  </div>
                  <div className="flex items-start mb-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span className= "text-xl">
                      Active member of Resources & Education and Development (RED) Division, which responsible for
                      planning and executing the KBMK Ming De worship Activities.
                    </span>
                  </div>
                  <div className="flex items-start mb-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span className= "text-xl">
                      Have served as Project Manager, Person In Charge, Program Division, Public Relations Division, and
                      Business funds Division of some of the events in the organization.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* BNCC */}
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-gray-900 mb-2 text-left">
                BNCC <span className="text-sm font-normal text-gray-600">( Bina Nusantara Computer Club )</span>
              </h3>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-xl font-medium text-gray-900">Member</span>
                  <span className="ml-auto text-sm text-gray-600">2024 - 2025</span>
                </div>
                <div className="ml-5 text-sm text-gray-700">
                  <div className="flex items-start mb-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span className= "text-xl">
                      Participated in the BNCC Learning and Training Program, selected and complete in the Back-End
                      Development Course (Laravel, XAMPP, PHP).
                    </span>
                  </div>
                  <div className="flex items-start mb-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span className= "text-xl">
                      Participated in the BNCC Bootcamp Program, Complete the Front-End Development Bootcamp Course
                      (HTML, CSS, JS, React, Tailwind, TypeScript).
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* BCC */}
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-gray-900 mb-2 text-left">
                BCC <span className="text-sm font-normal text-gray-600">( BINUS Chess Club )</span>
              </h3>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-xl font-medium text-gray-900">Member</span>
                  <span className="ml-auto text-sm text-gray-600">2025 - Present</span>
                </div>
                <div className="ml-5 text-sm text-gray-700">
                  <div className="flex items-start mb-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></div>
                    <span className= "text-xl">
                      Participated in a BINUS Chess Club Competition in Kemanggisan Competition Event by BINUS Student
                      Support Office.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="w-full h-px bg-gray-300 mb-12"></div>
          </FadeIn>

          {/* Education Section */}
          <FadeIn delay={700}>
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-left">Education</h2>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-3xl font-semibold text-gray-900 text-left">Bina Nusantara University</h3>
                  <span className="text-sm text-gray-600">2023 - Present</span>
                </div>
                <p className="text-xl text-gray-700 text-left">Undergraduate Computer Science Student</p>
              </div>

              <div className="mb-6 mt-12">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-3xl font-semibold text-gray-900 text-left">SMA Santo Yoseph Pangkalpinang</h3>
                  <span className="text-sm text-gray-600">2020 - 2023</span>
                </div>
                <p className="text-xl text-gray-700 text-left">High School Diploma, Science</p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={800}>
            <div className="w-full h-px bg-gray-300"></div>
          </FadeIn>
        </div>
      </main>

      <Contact />
    </div>
  )
}
