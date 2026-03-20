export const ProjectCard = ({ project, span }) => (
  <div
    className={`group relative overflow-hidden rounded-[2.5rem] 
    /* Light Mode */
    bg-white border-slate-200 shadow-sm
    /* Dark Mode */
    dark:bg-slate-900 dark:border-slate-800 
    border p-8 transition-all duration-500 hover:shadow-xl ${span}`}
  >
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div>
        <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 dark:text-indigo-400 uppercase">
          {project.category}
        </span>
        <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          {project.title}
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
          {project.description}
        </p>
      </div>

      <div className="mt-8 flex gap-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-100 dark:bg-white/5 px-3 py-1 text-[10px] text-slate-600 dark:text-white/70 border border-slate-200 dark:border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);
