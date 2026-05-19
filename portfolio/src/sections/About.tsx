import { motion } from 'framer-motion'

function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-h-screen bg-[var(--surface)] text-[var(--text)] px-8 py-24 flex flex-col justify-center"
        >
            <h2 className="text-4xl font-bold mb-8">
                About Me
            </h2>

            <p className="max-w-3xl text-[var(--text-muted)] text-lg leading-8">

                Computer Science student passionate about AI systems,
                full stack development, and workflow automation.

                Experienced in building intelligent applications using
                LangChain, LangGraph, FAISS, React, and Node.js with
                focus on scalable architecture and real-time systems.

                Previously worked as a ServiceNow Intern where I built
                ITSM workflow automation prototypes and gained hands-on
                experience in platform configuration, testing, and
                service management processes.

            </p>
        </motion.section>
    )
}

export default About