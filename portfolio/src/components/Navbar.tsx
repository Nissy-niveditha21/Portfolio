import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 bg-[rgba(255,233,220,0.92)] backdrop-blur-sm border-b border-[var(--border)] shadow-soft">
            <div className="flex justify-between items-center px-8 py-5 max-w-6xl mx-auto">
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text)]">
                    Nissy Niveditha
                </h1>

                <ul className="hidden md:flex gap-8 text-[var(--text)]">
                    <li><a href="#home" className="transition hover:text-[var(--accent-dark)]">Home</a></li>
                    <li><a href="#about" className="transition hover:text-[var(--accent-dark)]">About</a></li>
                    <li><a href="#projects" className="transition hover:text-[var(--accent-dark)]">Projects</a></li>
                    <li><a href="#experience" className="transition hover:text-[var(--accent-dark)]">Experience</a></li>
                    <li><a href="#skills" className="transition hover:text-[var(--accent-dark)]">Skills</a></li>
                    <li><a href="#contact" className="transition hover:text-[var(--accent-dark)]">Contact</a></li>
                </ul>

                <button
                    className="md:hidden text-[var(--text)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col gap-5 px-8 py-6 bg-[var(--surface)] border-t border-[var(--border)] shadow-soft text-[var(--text)]">
                    <a href="#home" className="transition hover:text-[var(--accent-dark)]">Home</a>
                    <a href="#about" className="transition hover:text-[var(--accent-dark)]">About</a>
                    <a href="#projects" className="transition hover:text-[var(--accent-dark)]">Projects</a>
                    <a href="#experience" className="transition hover:text-[var(--accent-dark)]">Experience</a>
                    <a href="#skills" className="transition hover:text-[var(--accent-dark)]">Skills</a>
                    <a href="#contact" className="transition hover:text-[var(--accent-dark)]">Contact</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar