import React from "react";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24">
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-14">
        <span className="text-yellow-500 font-serif text-sm italic">02.</span>
        <h2 className="font-serif text-3xl md:text-4xl">Experience</h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-yellow-500/40 to-transparent"></div>
      </div>

      {/* TIMELINE */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-yellow-500 to-yellow-500/10"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 pl-8">
              {/* DOT */}
              <div className="absolute left-[-5px] top-[6px] w-[9px] h-[9px] bg-yellow-500 rounded-full shadow-[0_0_12px_rgba(201,168,76,0.6)]"></div>

              {/* LEFT SIDE */}
              <div>
                <div className="text-xs uppercase tracking-wider text-yellow-500 font-medium">
                  {exp.date}
                </div>
                <div className="text-xs text-gray-400 mt-1">{exp.company}</div>
              </div>

              {/* RIGHT SIDE */}
              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-1">{exp.role}</h3>
                <div className="text-sm text-gray-400 mb-4 flex items-center gap-1">
                  {exp.location}
                </div>

                {/* BULLETS */}
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm leading-relaxed pl-4 relative">
                      <span className="absolute left-0 text-yellow-500">—</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}