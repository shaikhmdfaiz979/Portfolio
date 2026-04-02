import { useState } from "react";

export default function ContactAction() {
  const [copied, setCopied] = useState(false);
  const email = "shaikhmdfaiz979@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex flex-col items-center group">
        <button
          onClick={handleCopy}
          className="text-2xl md:text-4xl font-bold text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer relative"
        >
          {email}
          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 transition-all group-hover:w-full"></span>
        </button>

        <p
          className={`mt-4 text-sm font-medium transition-all duration-300 ${copied ? "text-green-500 scale-110" : "text-slate-400 opacity-0 group-hover:opacity-100"}`}
        >
          {copied
            ? "✓ Email copied to clipboard!"
            : "Click to copy email address"}
        </p>
      </div>
      <div className="mt-5 flex justify-center">
        <a
          target="_blank"
          href="https://shaikhmdfaiz979.github.io/Resume/resume.pdf"
          className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded text-xs font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
          onClick={() => {}}
        >
          Go to resume page
        </a>
      </div>
    </>
  );
}
