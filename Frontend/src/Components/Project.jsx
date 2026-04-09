import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../Components/UI/ProjectCard';
import { projects } from '../data/projects';

export const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const categories = ['all', 'frontend', 'backend', 'fullstack'];

  return (
    <section id="Projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200 flex items-center">
          <span className="text-[#64ffda] mr-2">#</span> Featured Projects
          <div className="flex-1 ml-4 h-px bg-gray-300 dark:bg-gray-700"></div>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                filter === category
                  ? 'bg-[#64ffda] text-[#112240]'
                  : 'bg-gray-100 dark:bg-[#112240] text-gray-600 dark:text-gray-400 hover:bg-[#64ffda]/10 hover:text-[#64ffda]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-600 dark:text-gray-400">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};