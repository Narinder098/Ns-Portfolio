import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from './UI/SkillCard';
import { skills} from '../data/skills';

export const Skills = () => {
  const [filter, setFilter] = useState('all');

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  const categories = ['all', 'frontend', 'backend', 'tools'];

  return (
    <section id="Skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200 flex items-center">
          <span className="text-[#64ffda] mr-2">#</span> Skills & Technologies
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-gray-600 dark:text-gray-400">
            No skills found in this category.
          </div>
        )}
      </div>
    </section>
  );
};