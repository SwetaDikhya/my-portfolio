function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <h2 className="text-3xl font-bold">
        <span className="text-emerald-500">03.</span> Contact
      </h2>

      <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
        I'm open to internships, collaborations, and new opportunities. If you
        have a question or just want to say hi, my inbox is always open.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a href="mailto:swetadikhya2006@gmail.com"
          className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
        >
          Say hello!
        </a>
        <a href="https://github.com/SwetaDikhya" target="_blank" rel="noreferrer"
          className="rounded-lg border border-slate-300 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/sweta-dikhya-basantia-61ba7034a/"
         target="_blank" rel="noreferrer"
          className="rounded-lg border border-slate-300 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          LinkedIn
          </a>
      </div>
    </section>
  )
}

export default Contact