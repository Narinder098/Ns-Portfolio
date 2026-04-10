import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { socialLinks } from '../data/Social';

export default function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="Hero"
            className="relative min-h-screen flex items-center px-6 md:px-16 pt-24 md:pt-0 overflow-hidden">

            {/* Glow Background */}
            <div className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-yellow-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            {/* MAIN CONTENT */}
            <div className="max-w-3xl z-10 text-center md:text-left mx-auto md:mx-0">

                {/* Intro */}
                <p className="flex items-center justify-center md:justify-start gap-4 uppercase tracking-[3px] text-yellow-500 text-xs mb-5">
                    <span className="w-10 h-[1px] bg-yellow-500"></span>
                    Software Developer
                </p>

                {/* Name */}
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight mb-4">
                    Narinder <br /> Suthar
                </h1>

                {/* Title */}
                <h2 className="font-serif text-3xl md:text-5xl text-yellow-500 italic mb-6">
                    I build things for the web.
                </h2>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed max-w-xl mb-10">
                    Full Stack MERN Developer with 3 internships and hands-on experience
                    shipping production-ready applications. Oracle Certified in Generative
                    AI & Data Science.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">

                    {/* PRIMARY - View Work */}
                    <motion.button
                        onClick={() => scrollToSection('projects')}
                        className="group bg-yellow-500 text-[#0d1b2a] px-8 py-3 text-xs uppercase tracking-widest font-semibold rounded-md flex items-center gap-2 shadow-lg shadow-yellow-500/10 hover:bg-yellow-400 transition"
                        whileHover={{ y: -4, scale: 1.02 }}
                    >
                        View Work
                        <ArrowDown className="transition-transform group-hover:translate-y-1" size={16} />
                    </motion.button>

                    {/* SECONDARY - Resume */}
                    <motion.a
                        href="/Narinder_Suthar_Resume.pdf"
                        download
                        className="group border border-yellow-500 text-yellow-500 px-8 py-3 text-xs uppercase tracking-widest rounded-md flex items-center gap-2 hover:bg-yellow-500 hover:text-[#0d1b2a] transition shadow-sm hover:shadow-yellow-500/20"
                        whileHover={{ y: -4, scale: 1.02 }}
                    >
                        Download Resume
                    </motion.a>

                    {/* TERTIARY - Contact */}
                    <motion.button
                        onClick={() => scrollToSection('contact')}
                        className="border border-gray-500/50 px-8 py-3 text-xs uppercase tracking-widest rounded-md text-gray-400 hover:border-yellow-500 hover:text-yellow-500 transition"
                        whileHover={{ y: -4 }}
                    >
                        Get In Touch
                    </motion.button>

                </div>

                {/* Stats */}
                <div className="flex gap-8 md:gap-12 pt-8 border-t border-yellow-500/20 justify-center md:justify-start">
                    {[
                        { num: '3', label: 'Internships' },
                        { num: '2+', label: 'Years Building' },
                        { num: '4+', label: 'Live Projects' },
                        { num: '2', label: 'Oracle Certs' },
                    ].map((item, i) => (
                        <div key={i} className="text-center md:text-left">
                            <div className="text-2xl md:text-3xl font-serif text-yellow-500">
                                {item.num}
                            </div>
                            <div className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 mt-1">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE VERTICAL SOCIAL LINKS */}
            <div className="hidden md:flex flex-col items-center gap-6 absolute right-8 top-1/2 -translate-y-1/2 z-10">
                {/* Top line */}
                <div className="w-[1px] h-16 bg-yellow-500/30"></div>

                {socialLinks.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] tracking-[2px] text-gray-400 hover:text-yellow-500 [writing-mode:vertical-rl]">
                        {social.label}
                    </a>
                ))}

                {/* Bottom line */}
                <div className="w-[1px] h-16 bg-yellow-500/30"></div>
            </div>
        </section>
    );
}