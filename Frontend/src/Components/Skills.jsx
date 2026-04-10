import { useEffect, useRef } from "react";
import { skills } from "../data/skills";

export default function Skills() {
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute("data-width");
            bar.style.width = width;
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.5 }
    );

    barsRef.current.forEach((bar) => {
      if (bar) {
        bar.style.width = "0%";
        observer.observe(bar);
      }
    });
  }, []);

  return (
    <section
      id="skills"
      className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24"
    >
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-14">
        <span className="text-yellow-500 font-serif text-sm italic">
          03.
        </span>

        <h2 className="font-serif text-3xl md:text-4xl">
          Skills & Technologies
        </h2>

        <div className="flex-1 h-[1px] bg-gradient-to-r from-yellow-500/40 to-transparent"></div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="relative bg-[#112233]/80 border border-yellow-500/10 p-5 text-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 group"
          >
            <div className="text-sm text-white font-medium mb-3">
              {skill.name}
            </div>

            <div className="h-[2px] bg-white/10 overflow-hidden rounded">
              <div
                ref={(el) => (barsRef.current[i] = el)}
                data-width={`${skill.pct}%`}
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-1000 ease-out"
              ></div>
            </div>

            <div className="text-[11px] text-yellow-500 mt-2 tracking-wide">
              {skill.pct}%
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        ))}
      </div>
    </section>
  );
}