export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24"
    >
      {/* SECTION HEADER */}
      <div className="flex items-center gap-4 mb-14">
        <span className="text-yellow-500 font-serif text-sm italic">
          01.
        </span>

        <h2 className="font-serif text-3xl md:text-4xl font-normal">
          About Me
        </h2>

        <div className="flex-1 h-[1px] bg-gradient-to-r from-yellow-500/40 to-transparent"></div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        
        {/* LEFT CONTENT */}
        <div className="text-gray-400 text-[15px] leading-relaxed space-y-4">
          <p>
            I'm a{" "}
            <strong className="text-white font-medium">
              Full Stack Software Developer
            </strong>{" "}
            from Abohar, Punjab — a{" "}
            <span className="text-yellow-500 font-medium">
              B.Tech Computer Science graduate (2025)
            </span>{" "}
            with a passion for building real-world web applications that solve
            actual problems.
          </p>

          <p>
            Over the past 2+ years, I've completed{" "}
            <strong className="text-white font-medium">
              3 internships
            </strong>{" "}
            working across the full stack — from React frontends to Node.js
            backends, Django APIs, and MongoDB databases. I don't just build
            demos; I ship things that work in production.
          </p>

          <p>
            I'm also{" "}
            <span className="text-yellow-500 font-medium">
              Oracle Certified
            </span>{" "}
            in Generative AI and Data Science (OCI 2025) — which reflects my
            interest in where technology is heading.
          </p>

          <p>
            Currently open to{" "}
            <strong className="text-white font-medium">
              Software Developer roles and internships
            </strong>{" "}
            — full-time or remote across India.
          </p>

          {/* SKILLS GRID */}
          <div className="grid grid-cols-2 gap-2 mt-6 text-sm">
            {[
              "React.js",
              "Node.js",
              "TypeScript",
              "MongoDB",
              "Next.js",
              "Socket.io",
              "React Native",
              "Oracle OCI",
            ].map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-400"
              >
                <span className="text-yellow-500 text-xs">▸</span>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="flex flex-col gap-5">
          {[
            { num: "3", label: "Internships Completed" },
            { num: "42+", label: "Commits on Lead Project" },
            { num: "4", label: "Live Deployed Projects" },
            { num: "8.13", label: "B.Tech CGPA" },
          ].map((card, i) => (
            <div
              key={i}
              className="relative bg-[#112233]/80 border border-yellow-500/10 p-6 overflow-hidden hover:border-yellow-500/30 transition"
            >
              {/* LEFT GOLD BORDER */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-yellow-500"></div>

              <div className="font-serif text-3xl text-yellow-500 mb-1">
                {card.num}
              </div>

              <div className="text-xs uppercase tracking-widest text-gray-400">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}