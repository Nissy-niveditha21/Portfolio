import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <p className="text-[var(--accent)] text-sm uppercase tracking-[0.4em] mb-6">
          Hi, I'm
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-[var(--text)] mb-4">
          Nissy Niveditha.
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--text-muted)] mb-8">
          Software Engineer & AI Developer passionate about building intelligent solutions.
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:v.nissyniveditha37@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
              alt="Gmail"
              className="w-6 h-6"
            />
            Gmail
          </a>
          <a
            href="https://www.linkedin.com/in/nissy-niveditha-vanguri-a63700344"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/Nissy-niveditha21"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
            GitHub
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-[var(--accent)]">AI & ML</p>
            <p className="text-[var(--text-muted)]">Specialist</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[var(--accent)]">15+</p>
            <p className="text-[var(--text-muted)]">Projects Completed</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
