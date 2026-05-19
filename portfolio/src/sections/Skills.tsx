import { motion } from 'framer-motion'

const skills = [
    'Python',
    'Java',
    'JavaScript',
    'React',
    'Angular',
    'Node.js',
    'Express.js',
    'LangChain',
    'LangGraph',
    'FAISS',
    'Machine Learning',
    'Git',
    'ServiceNow',
]

function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen bg-[var(--bg)] text-[var(--text)] px-8 py-24"
        >
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold mb-12"
            >
                Skills
            </motion.h2>

            <div className="flex flex-wrap gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.05,
                        }}
                        className="px-6 py-3 rounded-full cursor-pointer border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-soft"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills