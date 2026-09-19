const projects = [
  {
    title: 'Tailwind Landing Page',
    description: 'A responsive landing page built while learning Tailwind CSS.',
    tags: ['HTML', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Weather App',
    description: 'Search any city and see the current weather and forecast.',
    tags: ['React', 'API'],
    link: '#',
  },
  {
    title: 'Todo List',
    description: 'Add, complete, and delete tasks, saved between visits.',
    tags: ['React', 'Tailwind'],
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <h2 className="text-3xl font-bold">
        <span className="text-emerald-500">01.</span> Projects
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-800/50"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-3 flex-1 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a href={project.link}
              className="mt-6 text-sm font-semibold text-emerald-500 transition hover:text-emerald-400"
            >
              View project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects