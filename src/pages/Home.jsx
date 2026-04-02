import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/project";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-32 pt-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white">
          <span className="text-white">Frontend</span>{" "}
          <span className="text-indigo-600 italic">Engineer.</span>
        </h1>
        <p className="mt-8 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Specializing in building clean, responsive, and user-centric web
          applications. Expertise in React, modern state management, and
          pixel-perfect CSS.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/work"
            className="bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            View My Work
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section id="work" className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}

        {/* Contact/Bio Card */}
        {/* <div className="md:col-span-1 rounded-2xl p-8 bg-indigo-600 text-white flex flex-col justify-between">
          <h3 className="text-2xl font-bold italic tracking-tight leading-tight">
            Looking for a developer who understands UX and Code?
          </h3>
          <a
            href="mailto:shaikhmdfaiz979@gmail.com"
            className="mt-8 text-lg font-bold underline decoration-2 underline-offset-8"
          >
            Let's talk frontend.
          </a>
        </div> */}
      </section>
    </div>
  );
}
