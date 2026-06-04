import { motion } from 'framer-motion'

function Leadership() {
    return (
        <motion.section
            id="leadership"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-h-screen bg-[var(--bg)] text-[var(--text)] px-8 py-24"
        >
            <h2 className="text-4xl font-bold mb-12">
                Leadership & Achievements
            </h2>

            <div className="max-w-3xl space-y-6">
                <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-soft"
                >
                    <div className="text-3xl">🏆</div>
                    <div>
                        <h3 className="text-xl font-semibold text-[var(--text)]">Hack2Skills Ambassador</h3>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-soft"
                >
                    <div className="text-3xl">💻</div>
                    <div>
                        <h3 className="text-xl font-semibold text-[var(--text)]">Open Source Contributor (GSSoC '26)</h3>
                        <p className="text-[var(--text-muted)]">Bug fixes, feature enhancements, plugin development</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Leadership
