import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Ansh Infotech',
    location: 'Ludhiana, Punjab',
    duration: 'Jan 2025 - July 2025',
    description: [
      'Led a team of 5 developers in building a cloud-based enterprise solution',
      'Improved application performance by 40% through code optimization',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Architected microservices infrastructure handling 1M+ daily requests'
    ],
    tech: ['React', 'Redux', 'Node.js', 'Express', 'JWT', 'MongoDB',]
  },
  {
    id: 2,
    role: 'Python Developer',
    company: 'Exellence Technology.',
    location: 'Chandigarh, Punjab',
    duration: 'June 2024 - August 2024',
    description: [
      'Developed and maintained 10+ client-facing web applications',
      'Reduced server costs by 30% through infrastructure optimization',
      'Implemented real-time analytics dashboard for 100K+ daily users',
      'Led migration from monolith to microservices architecture'
    ],
    tech: ['Pyhton', 'Django', 'SQLlite3', 'MySQL',]
  },
  {
    id: 3,
    role: 'Web Developer',
    company: 'Infowiz',
    location: 'Bathinda, Punjab',
    duration: 'Jun 2023 - Aug 2023',
    description: [
      'Built responsive web applications using modern JavaScript frameworks',
      'Improved website load times by 50% through optimization techniques',
      'Developed reusable component library used across 20+ projects',
      'Mentored junior developers in frontend best practices'
    ],
    tech: ['Html', 'CSS', 'JavaScript', 'Node.js', 'MongoDb',]
  }
];

export const Experience = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="Experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200 flex items-center">
          <span className="text-[#64ffda] mr-2">#</span> Experience
          <div className="flex-1 ml-4 h-px bg-gray-300 dark:bg-gray-700"></div>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              layoutId={exp.id.toString()}
              onClick={() => setSelectedId(selectedId === exp.id ? null : exp.id)}
              className={`bg-gray-100 dark:bg-[#112240] rounded-lg p-6 cursor-pointer 
                transform transition-all duration-300 hover:scale-[1.02] 
                ${selectedId === exp.id ? 'shadow-xl' : 'shadow-md'}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#64ffda] mb-2">{exp.role}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Building size={16} className="mr-2" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Briefcase size={24} className="text-[#64ffda]" />
                </div>
              </div>

              <motion.div
                initial={selectedId === exp.id ? { height: 'auto' } : { height: 0 }}
                animate={{ height: selectedId === exp.id ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-400">
                  {exp.description.map((item, index) => (
                    <li key={index} className="pl-2">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-[#64ffda]/10 text-[#64ffda] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {selectedId === exp.id ? 'Click to collapse' : 'Click to expand'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};