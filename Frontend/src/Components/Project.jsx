import { projects } from "../data/projects";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 md:px-16 py-24">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-14">
        <span className="text-yellow-500 font-serif text-sm italic">04.</span>
        <h2 className="font-serif text-3xl md:text-4xl">
          Featured Projects
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-yellow-500/40 to-transparent"></div>
      </div>

      {/* PROJECTS */}
      <div className="space-y-12">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`group relative grid md:grid-cols-2 border border-yellow-500/20 overflow-hidden transition-all duration-300 hover:border-yellow-500/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(234,179,8,0.08)] ${p.reverse ? "md:[direction:rtl]" : ""
              }`}>
            {/* IMAGE SIDE */}
            <div className="relative min-h-[280px] md:min-h-[340px] bg-[#1a2f45] flex items-center justify-center overflow-hidden md:[direction:ltr]">

              {/* Background label */}
              <div className="font-serif text-6xl md:text-7xl text-yellow-500/10 italic group-hover:scale-110 transition duration-500">
                {p.label}
              </div>

              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-70"></div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-yellow-500/5"></div>

              {/* Big number */}
              <div className="absolute bottom-4 right-4 font-serif text-5xl text-yellow-500/10">
                {p.id}
              </div>
            </div>

            {/* CONTENT */}
            <div className="bg-[#112233]/80 p-6 md:p-10 flex flex-col justify-center md:[direction:ltr]">

              {/* Type */}
              <div className="text-[11px] tracking-[2px] uppercase text-yellow-500 mb-2">
                {p.type}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl mb-3 group-hover:text-yellow-500 transition">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {p.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 group-hover:border-yellow-500/40 transition">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 text-xs uppercase tracking-widest">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition">
                    <FiExternalLink className="text-sm" />
                    LIVE DEMO
                  </a>
                )}

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                   className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition">
                  <FiGithub className="text-sm" />
                  GITHUB
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}