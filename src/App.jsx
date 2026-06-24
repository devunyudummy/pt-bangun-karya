import { LanguageProvider } from './context/LanguageContext'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Stats         from './components/Stats'
import About         from './components/About'
import VisionMission from './components/VisionMission'
import Services      from './components/Services'
import Portfolio     from './components/Portfolio'
import Partners      from './components/Partners'
import Testimonials  from './components/Testimonials'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <VisionMission />
          <Services />
          <Portfolio />
          <Partners />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
