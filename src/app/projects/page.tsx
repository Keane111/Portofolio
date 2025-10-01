import { Contact } from "@/components/contact"
import { Link } from "react-router-dom"
import { FadeIn } from "@/components/FadeIn"

export default function ProjectsPage() {
  const projects = [
    {
      name: "Jenius Academy",
      image: "/Jenius Academy.png",
      description: "Educational platform with fun learning approach",
      href: "/projects/jenius-academy", // Added link to Jenius Academy project page
    },
    {
      name: "World University",
      image: "/World University.png",
      description: "Global country explorer for university information",
      href: "/projects/world-university", // Added link to World University project page
    },
    {
      name: "FoodHub",
      image: "/FoodHub.png",
      description: "Food delivery and restaurant discovery platform",
      href: "/projects/foodhub", // Added link to FoodHub project page
    },
    {
      name: "BananaCat",
      image: "/BananaCat.png",
      description: "Simple and clean interface design",
      href: "/projects/BananaCat",
    },
    {
      name: "KBMK Website",
      image: "/KBMK Web.png",
      description: "Organization website with community features",
      href: "/projects/kbmk-web", // Added link to KBMK project page
    },
    {
      name: "ChipiChapa",
      image: "/ChipiChapa.png",
      description: "Bright and colorful application interface",
      href: "/projects/ChipiChapa",
    },
    {
      name: "KBMK",
      image: "/KBMK.jpg",
      description: "Event organization and management project",
      href: "/projects/kbmk", // Added link to KBMK project page
    },
    {
      name: "To Be Continue",
      image: "/to-be-continue.jpg",
      description: "More exciting projects coming soon",
      href: null, 
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-6 py-16 pt-24">
        <FadeIn delay={100}>
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <div className="w-full h-px bg-gray-300 mb-12"></div>
            
            <p className="text-xl text-gray-700">Some of my projects :</p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => {
            const ProjectCard = (
              <div key={index} className="group">
                <div className="overflow-hidden mb-4 rounded-lg shadow-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
              </div>
            )

            return project.href ? (
              <Link key={index} to={project.href} className="block">
                {ProjectCard}
              </Link>
            ) : (
              ProjectCard
            )
          })}
        </div>
        </FadeIn>
      </main>

      <Contact />
    </div>
  )
}
