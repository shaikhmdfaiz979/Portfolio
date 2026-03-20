import { useState } from "react";

export default function ContactEmail() {
  const [copied, setCopied] = useState(false);
  const email = "shaikhmdfaiz979@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href={`mailto:${email}`}
        className="mt-8 text-lg font-bold underline decoration-2 underline-offset-8 hover:text-indigo-200 transition-colors"
      >
        Let's talk frontend.
      </a>

      <button
        onClick={copyToClipboard}
        className="text-xs font-mono opacity-60 hover:opacity-100 transition-opacity bg-white/10 px-3 py-1 rounded-full"
      >
        {copied ? "✓ Email Copied!" : "Or click to copy email"}
      </button>
    </div>
  );
}
