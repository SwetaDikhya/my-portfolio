import { useState, useEffect } from 'react'

function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <nav className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-emerald-500">
          Sweta Dikhya
        </a>

        <ul className="hidden gap-8 text-sm font-medium sm:flex">
          <li><a href="#about" className="transition hover:text-emerald-500">About</a></li>
          <li><a href="#projects" className="transition hover:text-emerald-500">Projects</a></li>
          <li><a href="#contact" className="transition hover:text-emerald-500">Contact</a></li>
        </ul>

        <button
          onClick={() => setDark(!dark)}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar