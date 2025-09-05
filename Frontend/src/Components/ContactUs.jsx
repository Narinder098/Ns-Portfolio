import React from 'react';
import { socialLinks } from '../data/Social';

export const ContactUs = () => {
  return (
    <section id="Contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          <span className="text-[#64ffda]">#</span> Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-[#64ffda] transition-colors transform hover:scale-110 group"
              aria-label={social.label}
            >
              <social.icon size={24} className="group-hover:rotate-12 transition-transform" />
            </a>
          ))}
        </div>
        <a
          href="mailto:hello@example.com"
          className="group relative inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] 
          hover:bg-[#64ffda]/10 transition-colors rounded overflow-hidden"
        >
          <span className="relative z-10 hover:text-gray-600">Say Hello</span>
          <div className="absolute inset-0 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </a>
      </div>
    </section>
  );
};