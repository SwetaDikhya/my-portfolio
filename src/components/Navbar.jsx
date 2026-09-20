import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-emerald-500">
          <span className="hidden sm:inline">Sweta Dikhya Basantia</span>
          <span className="sm:hidden">Sweta D.B.</span>
        </a>

        <ul className="hidden gap-8 text-sm font-medium sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-emerald-500">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm transition hover:bg-slate-100 sm:hidden dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <ul className="space-y-1 border-t border-slate-200 px-6 py-3 sm:hidden dark:border-slate-800">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
