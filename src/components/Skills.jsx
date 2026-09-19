const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React (learning)", "Tailwind CSS"],
  },
  {
    title: "Programming",
    items: ["Python", "Data Structures & Algorithms"],
  },
  {
    title: "Projects & Tools",
    items: ["Dashboards", "Git", "GitHub", "VS Code"],
  },
];

function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <h3 className="text-xl font-bold">Skills</h3>

      <div className="mt-6 grid gap-8 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-500">
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-800/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
