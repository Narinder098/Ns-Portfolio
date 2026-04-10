import { socialLinks } from "../data/Social";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/10 px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400 text-center md:text-left">

      {/* LEFT */}
      <div>
        Designed & Built by{" "}
        <span className="text-yellow-500">Narinder Suthar</span> ·{" "}
        {new Date().getFullYear()}
      </div>

      {/* RIGHT */}
      <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs uppercase tracking-wider">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="group flex items-center gap-2 hover:text-yellow-500 transition"
            >
              {/* ICON */}
              <Icon
                size={16}
                className="group-hover:scale-110 transition"
              />

              {/* TEXT */}
              <span className="relative">
                {item.label.replace(" Profile", "")}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-500 transition-all group-hover:w-full"></span>
              </span>
            </a>
          );
        })}
      </div>

    </footer>
  );
}