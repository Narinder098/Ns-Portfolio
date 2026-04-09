import React from 'react';

export const SkillCard = ({ skill }) => {
  return (
    <div className="bg-gray-100 dark:bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-all duration-300 group">
      <div className="flex items-center mb-4">
        <skill.icon className="w-6 h-6 text-[#64ffda] mr-2" />
        <p className="text-[#64ffda]">{skill.name}</p>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#64ffda] transition-all duration-1000 ease-out group-hover:opacity-80"
          style={{ width: skill.level }}
        />
      </div>
      <p className="text-right text-sm mt-2 text-gray-600 dark:text-gray-400">{skill.level}</p>
    </div>
  );
};