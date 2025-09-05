import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectCard = ({ project, index }) => {
  return (
    <div className="relative grid md:grid-cols-12 gap-4 items-center group">
      <div className={`md:col-span-7 relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition-colors duration-300 rounded-lg"></div>
        </div>
      </div>
      <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 md:pr-6' : 'md:pl-6'}`}>
        <p className="text-[#64ffda] text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{project.title}</h3>
        <div className="bg-gray-100 dark:bg-[#112240] p-6 rounded-lg mb-4 transform transition-transform duration-300 hover:translate-y-[-5px] shadow-lg">
          <p className="text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="text-sm text-[#64ffda] bg-[#64ffda]/10 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.links.github && (
            <a
              href={project.links.github}
              className="text-gray-600 dark:text-gray-400 hover:text-[#64ffda] transition-colors group"
              aria-label="View source code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform" />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              className="text-gray-600 dark:text-gray-400 hover:text-[#64ffda] transition-colors group"
              aria-label="View live demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};