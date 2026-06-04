import { motion } from 'framer-motion'

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-8 py-24"
    >
      <p className="text-[var(--accent)] text-sm uppercase tracking-[0.4em] mb-4">— JOURNEY</p>
      <h2 className="text-4xl font-bold mb-16">Education & Experience</h2>

      <div className="max-w-4xl space-y-12">
        <div className="border-l-2 border-[var(--border)] pl-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-[var(--accent)] font-semibold mb-2">2022 – 2026</p>
            <h3 className="text-2xl font-bold mb-2">Bachelor of Technology (B.Tech) – Computer Science & Engineering</h3>
            <p className="text-[var(--text-muted)] mb-4">Malla Reddy Engineering College for Women, Telangana</p>
            <p className="text-[var(--text-muted)]">CGPA: 8.7</p>
          </motion.div>
        </div>

        <div className="border-l-2 border-[var(--border)] pl-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-[var(--accent)] font-semibold mb-2">May – Aug 2025</p>
            <h3 className="text-2xl font-bold mb-2">ServiceNow Intern</h3>
            <ul className="text-[var(--text-muted)] space-y-2 mt-4">
              <li>• Built ITSM workflow automation prototypes using Flow Designer</li>
              <li>• Worked on Agentic AI concepts, orchestration, and platform configuration</li>
              <li>• Validated workflows with ATF</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
