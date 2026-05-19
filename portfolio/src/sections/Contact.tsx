function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen bg-[var(--surface)] text-[var(--text)] px-8 py-24 flex flex-col justify-center"
        >
            <h2 className="text-4xl font-bold mb-8">
                Contact
            </h2>

            <p className="text-[var(--text-muted)] mb-8">
                Let’s work together.
            </p>

            <button className="w-fit px-8 py-4 rounded-full bg-[var(--accent-dark)] text-[var(--bg)] shadow-soft hover:scale-105 transition-transform">
                Say Hello
            </button>
        </section>
    )
}

export default Contact