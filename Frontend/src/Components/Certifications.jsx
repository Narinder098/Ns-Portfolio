import { certs } from "../data/certs";

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="max-w-6xl mx-auto px-6 md:px-16 py-24">

            {/* HEADER */}
            <div className="flex items-center gap-4 mb-14">
                <span className="text-yellow-500 font-serif text-sm italic">05.</span>
                <h2 className="font-serif text-3xl md:text-4xl">Certifications</h2>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-yellow-500/40 to-transparent"></div>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-6">
                {certs.map((cert) => (
                    <div
                        key={cert.name}
                        className="relative bg-[#112233]/80 border border-yellow-500/10 p-8 overflow-hidden hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/10 transition">

                        {/* TOP LINE */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent"></div>

                        {/* BADGE */}
                        <div className="absolute top-6 right-6 w-9 h-9 border border-yellow-500/30 rounded-full flex items-center justify-center text-yellow-500 text-sm">
                            <span aria-label="badge">{cert.badge}</span>
                        </div>

                        {/* CONTENT */}
                        <div className="text-[11px] uppercase tracking-[2px] text-yellow-500 mb-3">
                            {cert.issuer}
                        </div>

                        <div className="font-serif text-lg leading-snug mb-3 break-words">
                            {cert.name}
                        </div>

                        <div className="text-sm text-gray-400">
                            {cert.date}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}