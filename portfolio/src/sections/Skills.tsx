import { motion } from 'framer-motion'

function Skills() {
  const skillCategories = [
    {
      number: '01',
      title: 'Data & AI',
      skills: ['Python', 'Pandas', 'NumPy', 'TensorFlow', 'Scikit-Learn', 'NLP']
    },
    {
      number: '02',
      title: 'Programming',
      skills: ['Python', 'Java', 'C', 'SQL', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      number: '03',
      title: 'Web Dev',
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Angular']
    },
    {
      number: '04',
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Postman', 'Docker', 'MySQL']
    }
  ]

  return (
    <section id="skills" className="px-8 py-24 bg-[var(--surface)]">
      <p className="text-[var(--accent)] text-sm uppercase tracking-[0.4em] mb-4">— EXPERTISE</p>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-16"
      >
        Skills & Tooling
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-[var(--accent)] opacity-50">{category.number}</span>
              <h3 className="text-2xl font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
