import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="px-8 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's connect to build something meaningful.</h2>
        <p className="text-xl text-[var(--text-muted)] mb-12">
          Open to Software Engineering, AI/ML, and Full-Stack opportunities. Based in Telangana, India — open to remote and relocation.
        </p>

        <h3 className="text-2xl font-semibold mb-10">Let's Connect</h3>
        <p className="text-[var(--text-muted)] mb-8">I'm always open to discussing new projects, creative ideas or opportunities.</p>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:v.nissyniveditha37@gmail.com" className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
              alt="Gmail"
              className="w-12 h-12"
            />
          </a>
          <a href="https://www.linkedin.com/in/nissy-niveditha-vanguri-a63700344" target="_blank" rel="noreferrer" className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-12 h-12"
            />
          </a>
          <a href="https://github.com/Nissy-niveditha21" target="_blank" rel="noreferrer" className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-12 h-12"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
