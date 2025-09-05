import React from 'react'
import { motion } from 'framer-motion'
import { socialLinks } from '../data/Social'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
    //  const typedText = /useTypingEffect("I build things for the web.");
    return (
        <>
            {/* Hero section */}
            <section id="About" className="min-h-screen flex items-center justify-center relative px-4">

                <div className="glowing-circle">
                    <div className="max-w-4xl mx-auto">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-[#64ffda] mb-4">Hi, my name is</p>
                            <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                                Narinder
                            </h1>
                            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-gray-600 dark:text-gray-400">
                                {/* {typedText} */}
                                <span className="animate-blink"></span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                                I'm a full-stack developer specializing in building exceptional digital experiences.
                                Currently, I'm focused on building accessible, human-centered products.
                            </p>

                            <div className="flex justify-center space-x-6 mb-12">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-400 hover:text-[#64ffda] transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 12 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon size={24} />
                                    </motion.a>
                                ))}
                            </div>

                            <motion.button
                                onClick={() => scrollToSection("Experience")}
                                className="group relative inline-flex items-center gap-2 px-8 py-4 border border-[#64ffda] text-[#64ffda] 
                 hover:bg-[#64ffda]/10 transition-colors rounded-lg overflow-hidden"
                                whileHover={{ y: -5 }}
                                whileTap={{ y: 0 }}
                            >
                                View My Work
                                <ArrowDown className="group-hover:animate-bounce" />
                            </motion.button>
                        </motion.div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default Hero