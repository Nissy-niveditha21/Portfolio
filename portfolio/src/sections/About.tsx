import { motion } from 'framer-motion'

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-8 py-24"
    >
      <p className="text-[var(--accent)] text-sm uppercase tracking-[0.4em] mb-4">— DISCOVER</p>
      <h2 className="text-4xl font-bold mb-16">About Me</h2>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">Nissy Niveditha</h3>
            <p className="text-xl text-[var(--accent)] mb-4">Software Engineer & AI Developer</p>
            <div className="space-y-2 text-[var(--text-muted)]">
              <p><span className="font-semibold text-[var(--text)]">Location:</span> Telangana, India</p>
              <p><span className="font-semibold text-[var(--text)]">Education:</span> B.Tech CSE (Final Year)</p>
              <p><span className="font-semibold text-[var(--text)]">Email:</span> v.nissyniveditha37@gmail.com</p>
            </div>
            <p className="text-green-600 font-semibold mt-4">Open to new opportunities</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">My Story</h4>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">
              I am a Final-year Computer Science student at <span className="font-semibold text-[var(--text)]">Malla Reddy Engineering College for Women</span> with a CGPA of <span className="font-semibold text-[var(--text)]">8.7</span>.
            </p>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">
              Passionate about machine learning, software engineering, and full-stack development, I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Core Pillars</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h5 className="font-semibold mb-2">Software Dev</h5>
                <p className="text-sm text-[var(--text-muted)]">Building robust, scalable applications using React, Node.js, Python</p>
              </div>
              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h5 className="font-semibold mb-2">Machine Learning</h5>
                <p className="text-sm text-[var(--text-muted)]">Developing predictive models, neural networks, and NLP solutions</p>
              </div>
              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h5 className="font-semibold mb-2">Full-Stack</h5>
                <p className="text-sm text-[var(--text-muted)]">End-to-end web development from frontend to backend</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center">
              <p className="text-2xl font-bold text-[var(--accent)]">8.7</p>
              <p className="text-sm text-[var(--text-muted)]">CGPA</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center">
              <p className="text-2xl font-bold text-[var(--accent)]">15+</p>
              <p className="text-sm text-[var(--text-muted)]">Projects</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center">
              <p className="text-2xl font-bold text-[var(--accent)]">GSSoC</p>
              <p className="text-sm text-[var(--text-muted)]">Contributor</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center">
              <p className="text-2xl font-bold text-[var(--accent)]">2026</p>
              <p className="text-sm text-[var(--text-muted)]">Graduating</p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-xl bg-[var(--accent)] text-white font-semibold hover:opacity-90 transition"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default About
