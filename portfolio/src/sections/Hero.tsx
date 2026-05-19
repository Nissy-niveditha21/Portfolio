import { useState } from 'react'
import { motion } from 'framer-motion'

const cursorOptions = [
  { id: 'dot', label: 'Light dot', className: 'cursor-dot' },
  { id: 'ring', label: 'Outline ring', className: 'cursor-ring' },
  { id: 'filled', label: 'Filled orb', className: 'cursor-filled' },
  { id: 'cross', label: 'Crosshair', className: 'cursor-cross' },
]

function Hero() {
  const [cursorClass, setCursorClass] = useState(cursorOptions[0].className)

  return (
    <section className={`min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden ${cursorClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <p className="text-[var(--accent-dark)] text-sm uppercase tracking-[0.4em] mb-4">
          {'</>'} Nissy Niveditha
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight text-[var(--text)]">
          Creating aesthetic, functional web experiences.
        </h1>

        <p className="mt-8 text-lg md:text-2xl leading-9 max-w-3xl mx-auto text-[var(--text-muted)]">
          I build aesthetic, functional and impactful web experiences with a focus on real-world problem solving.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="https://github.com/Nissy-niveditha21"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-[var(--accent-dark)] bg-[var(--surface)] text-[var(--text)] font-medium hover:bg-[var(--accent)]/20 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nissy-niveditha-vanguri-a63700344"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-[var(--accent-dark)] bg-[var(--surface)] text-[var(--text)] font-medium hover:bg-[var(--accent)]/20 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:v.nissyniveditha37@gmail.com"
            className="px-6 py-3 rounded-full border border-[var(--accent-dark)] bg-[var(--surface)] text-[var(--text)] font-medium hover:bg-[var(--accent)]/20 transition"
          >
            Email
          </a>
        </div>

        <div className="hero-marquee mt-10 rounded-full border border-[var(--accent-dark)] bg-[var(--surface)]/80 py-3 px-4 shadow-soft">
          <div className="marquee-track text-[var(--text)] font-medium text-base">
            <span>AI Developer</span>
            <span>Product Engineer</span>
            <span>Full Stack Creator</span>
            <span>Open Source Builder</span>
            <span>ServiceNow Automation</span>
            <span>AI Developer</span>
            <span>Product Engineer</span>
            <span>Full Stack Creator</span>
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-soft sm:grid-cols-[auto_1fr] sm:items-center">
          <img
            src="https://nissy-niveditha21.github.io/Portfolio/your-photo.jpg"
            alt="Profile"
            className="h-28 w-28 rounded-3xl border border-[var(--accent-dark)] object-cover"
          />
          <div className="text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-dark)]">LinkedIn profile</p>
            <p className="mt-2 text-xl font-semibold text-[var(--text)]">vanguri-nissy</p>
            <p className="mt-2 text-[var(--text-muted)] leading-7">
              AI Developer • Full Stack Engineer • ServiceNow Automation
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--accent-dark)]">Choose cursor style</p>
          <div className="flex flex-wrap justify-center gap-3">
            {cursorOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setCursorClass(option.className)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${cursorClass === option.className ? 'bg-[var(--accent-strong)] text-[var(--bg)] border-[var(--accent-dark)]' : 'bg-[var(--surface)] text-[var(--text)] border-[var(--border)] hover:bg-[var(--accent)]/20'}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <a
            href="#projects"
            className="cursor-pointer px-8 py-4 rounded-full bg-[var(--accent-strong)] text-[var(--text)] font-semibold shadow-soft hover:scale-105 transition"
          >
            Explore Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="cursor-pointer px-8 py-4 rounded-full border border-[var(--accent-dark)] text-[var(--text)] bg-[var(--surface)] hover:bg-[var(--bg)] transition shadow-soft"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero