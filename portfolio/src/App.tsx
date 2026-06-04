import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)] min-h-screen">
      {/* Background Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-blob-1"></div>
        <div className="absolute top-[40%] -right-24 w-[450px] h-[450px] rounded-full bg-blob-2"></div>
        <div className="absolute -bottom-24 left-[30%] w-[400px] h-[400px] rounded-full bg-blob-3"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
