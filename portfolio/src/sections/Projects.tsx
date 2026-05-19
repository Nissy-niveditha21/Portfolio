import { motion } from 'framer-motion'

const projects = [
    {
        title: 'Adaptive AI Learning Agent',
        description:
            'Checkpoint-based AI tutoring system using retrieval-augmented generation, vector embeddings, and automated learner assessment with mastery-based progression.',

        tech: 'Python • LangGraph • LangChain • FAISS',

        github: 'YOUR_GITHUB_LINK',
        live: '#',
    },

    {
        title: 'SilentLink',
        description:
            'Real-time multilingual gesture-to-speech system using computer vision and deep learning with low-latency inference and accessibility-focused design.',

        tech: 'Python • OpenCV • Deep Learning',

        github: 'YOUR_GITHUB_LINK',
        live: '#',
    },
]

function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-[var(--bg)] text-[var(--text)] px-8 py-24"
        >
            <h2 className="text-4xl font-bold mb-12">
                Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            y: -10,
                        }}
                        className="relative border border-[var(--border)] p-8 rounded-3xl bg-[var(--surface)]/95 shadow-soft overflow-hidden"
                    >

                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(223,162,144,0.18)] to-[rgba(201,151,137,0.12)]"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold mb-4 text-[var(--text)]">
                                {project.title}
                            </h3>

                            <p className="text-[var(--text-muted)] leading-7">
                                {project.description}
                            </p>
                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    )
}

export default Projects