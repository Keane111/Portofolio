import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
// Import the detailed pages from app folder
import AboutPage from "@/app/about/page"
import ProjectsPage from "@/app/projects/page"
import ContactPage from "@/app/contact/page"
// Import individual project pages
import FoodHubPage from "@/app/projects/foodhub/page"
import JeniusAcademyPage from "@/app/projects/jenius-academy/page"
import KBMKPage from "@/app/projects/kbmk/page"
import KBMKWebPage from "@/app/projects/kbmk-web/page"
import WorldUniversityPage from "@/app/projects/world-university/page"
import BananaCatPage from "@/app/projects/BananaCat/page"
import DanaKaryaPage from "@/app/projects/Dana-Karya/page"
import ChipiChapaPage from "@/app/projects/ChipiChapa/page"
import './App.css'

// Home page component
function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Individual project routes */}
          <Route path="/projects/foodhub" element={<FoodHubPage />} />
          <Route path="/projects/jenius-academy" element={<JeniusAcademyPage />} />
          <Route path="/projects/kbmk" element={<KBMKPage />} />
          <Route path="/projects/kbmk-web" element={<KBMKWebPage />} />
          <Route path="/projects/world-university" element={<WorldUniversityPage />} />
          <Route path="/projects/BananaCat" element={<BananaCatPage />} />
          <Route path="/projects/Dana-Karya" element={<DanaKaryaPage />} />
          <Route path="/projects/ChipiChapa" element={<ChipiChapaPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
