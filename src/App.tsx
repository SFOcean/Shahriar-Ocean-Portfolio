import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
// Import your new details page component here once you create it
// import { ProjectDetails } from './components/ProjectDetails' 

// Create a component for the main landing page
function Home() {
  return (
    <main>
      <HeroSection />
      {/* You can keep a featured projects section here, or remove it entirely */}
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}

export default function App() {
  return (
    <Router>
      <div className="dark min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />
          
          {/* Separate Projects Page */}
          <Route path="/projects" element={<ProjectsSection />} />
          
          {/* Specific Project Details Page (You need to build this component) */}
          {/* <Route path="/projects/:projectId" element={<ProjectDetails />} /> */}
        </Routes>
      </div>
    </Router>
  )
}