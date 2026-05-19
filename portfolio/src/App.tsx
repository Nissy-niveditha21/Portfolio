import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
//import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)] min-h-screen">

      {/* Background Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full glow-1"></div>
        <div className="absolute top-[40%] right-0 w-[450px] h-[450px] rounded-full glow-2"></div>
        <div className="absolute bottom-0 left-[30%] w-[400px] h-[400px] rounded-full glow-3"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
