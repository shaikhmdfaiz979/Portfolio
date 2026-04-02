import ContactAction from "./ContactAction";

export default function Footer() {
  return (
    <footer className="mt-5 pb-20 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto pt-24 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-12">
          <span className="text-white">Ready to start a</span>
          <br />
          <span className="text-indigo-600 italic">new project?</span>
        </h2>

        {/* This is where your ContactAction component goes */}
        <ContactAction />

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
          <p>© 2026 Md Faiz. Built with React & Vite.</p>
          <div className="flex gap-8">
            <a
              href="https://github.com/shaikhmdfaiz979"
              className="hover:text-indigo-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fz979/"
              className="hover:text-indigo-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
