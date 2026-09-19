const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'GitHub']

function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <h3 className="text-xl font-bold">Skills</h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-800/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills