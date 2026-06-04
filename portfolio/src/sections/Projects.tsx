import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SilentLink',
    description: 'Real-Time Multilingual Gesture-to-Speech System. ASL recognition with 86% accuracy, ~20ms latency. Converts gestures to multilingual speech (English/Hindi).',
    tech: 'Python • OpenCV • MediaPipe • TensorFlow • Flask',
  },
  {
    title: 'Adaptive AI Learning Agent',
    description: 'Retrieval-augmented tutoring with FAISS + LangGraph. Automated question generation and mastery threshold-based learning.',
    tech: 'Python • React.js • LangChain • HuggingFace',
  },
]

function Projects() {
  return (
    <section id="projects" className="px-8 py-24 bg-[var(--surface)]">
      <div className="flex justify-between items-center mb-16">
        <div>
          <p className="text-[var(--accent)] text-sm uppercase tracking-[0.4em] mb-4">— PORTFOLIO</p>
          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-[var(--bg)] border border-[var(--border)]"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-[var(--text-muted)] leading-7 mb-6">{project.description}</p>
            <p className="text-sm font-semibold text-[var(--accent)]">{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
