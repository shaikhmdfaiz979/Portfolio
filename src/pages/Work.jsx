import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/project";

export default function Work() {
  return (
    <div className="min-h-scree dark:bg-[#020617] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            <span className="text-white">Selected</span>
            <span className="text-indigo-600 italic">Work.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            A collection of frontend projects focusing on complex state
            management and responsive UI.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
