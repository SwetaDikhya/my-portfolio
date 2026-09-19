function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start px-6 py-24 sm:py-32">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-500">
        Hi, my name is 
      </p>

      <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
        Sweta Dikhya Basantia.
      </h1>

      <h2 className="mt-2 text-3xl font-bold text-slate-500 sm:text-5xl dark:text-slate-400">
        I build things for the web.
      </h2>

      <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
        I'm a developer learning React and Tailwind CSS, and I enjoy turning
        ideas into clean, responsive websites.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#projects"
          className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
        >
          View my work
        </a>
        <a href="#contact"
          className="rounded-lg border border-slate-300 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          Contact me
        </a>
      </div>
    </section>
  )
}

export default Hero