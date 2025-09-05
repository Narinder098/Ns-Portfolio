import React from 'react';
import { socialLinks } from '../data/Social';

export const Footer = () => {
  return (
    <footer className="py-6 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-[#64ffda] transition-colors transform hover:scale-110 group"
              aria-label={social.label}
            >
              <social.icon size={20} className="group-hover:rotate-12 transition-transform" />
            </a>
          ))}
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Designed & Built by Narinder.
        </p>
      </div>
    </footer>
  );
};