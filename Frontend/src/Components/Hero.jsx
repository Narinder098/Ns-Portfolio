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
            className="relative min-h-screen flex items-center px-6 md:px-16 pt-28 md:pt-0 pb-12 md:pb-0 overflow-hidden">

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
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight mb-2">
                    Narinder <br /> Suthar
                </h1>

                {/* Title */}
                <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-yellow-500 italic mb-6">
                    I build things for the web.
                </h2>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0 mb-10 text-sm sm:text-base">
                    Full Stack MERN Developer with 3 internships and hands-on experience
                    shipping production-ready applications. Oracle Certified in Generative
                    AI & Data Science.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">

                    {/* Primary */}
                    <motion.button
                        onClick={() => scrollToSection('projects')}
                        className="bg-yellow-500 text-[#0d1b2a] px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-yellow-400 transition rounded-md flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                        whileHover={{ y: -3 }}
                    >
                        View Work
                    </motion.button>

                    {/* Secondary */}
                    <motion.a
                        href="/Narinder_Suthar_Resume.pdf"
                        download
                        className="border border-yellow-500 text-yellow-500 px-8 py-3 text-xs uppercase tracking-widest hover:bg-yellow-500 hover:text-[#0d1b2a] transition rounded-md text-center"
                        whileHover={{ y: -3 }}
                    >
                        Resume
                    </motion.a>

                    {/* Tertiary */}
                    <motion.button
                        onClick={() => scrollToSection('contact')}
                        className="text-gray-400 hover:text-yellow-500 text-xs uppercase tracking-widest transition"
                        whileHover={{ y: -2 }}
                    >
                        Contact →
                    </motion.button>

                </div>

                {/* Stats */}
               <div className="flex justify-center md:justify-start gap-8 md:gap-12 pt-6 border-t border-yellow-500/20">
                    {[
                        { num: '3', label: 'Internships' },
                        { num: '2+', label: 'Years Building' },
                        { num: '4+', label: 'Live Projects' },
                        { num: '2', label: 'Oracle Certs' },
                    ].map((item, i) => (
                        <div key={i} className="text-center md:text-left">
                            <div className="text-xl md:text-2xl font-serif text-yellow-500">
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