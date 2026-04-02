import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

export default function Navbar() {
  const hireBtnClick = () => {
    window.scrollTo({
      top: 2000,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass px-6 py-3 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <Link
          to="/"
          className="font-black text-xl tracking-tighter text-slate-900 dark:text-white"
        >
          MF.
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/work"
            className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors"
          >
            Work
          </Link>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800"></div>

          <ThemeToggle />

          {/* Direct Link to Email for quick access */}
          <button
            className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded text-xs font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
            onClick={hireBtnClick}
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
