import { motion } from 'framer-motion'

function Certifications() {
  const certifications = [
    {
      title: 'HackerRank',
      description: 'Python, Java, SQL (Gold Badges)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png'
    },
    {
      title: 'Cisco',
      description: 'Advanced C, Cybersecurity Essentials, Network Technician Path',
      logo: 'https://www.logo.wine/a/logo/Cisco_Systems/Cisco_Systems-Icon-Logo.wine.svg'
    },
    {
      title: 'IBM',
      description: 'Python for Data Science (NumPy, Pandas)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
    }
  ]

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-8 py-24"
    >
      <p className="text-[var(--accent)] text-sm uppercase tracking-[0.4em] mb-4">— ACHIEVEMENTS</p>
      <h2 className="text-4xl font-bold mb-16">Certifications</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)]"
          >
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-[var(--bg)] rounded-2xl border border-dashed border-[var(--border)]">
              <img src={cert.logo} alt={cert.title} className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{cert.title}</h3>
            <p className="text-[var(--text-muted)] text-center">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Certifications
