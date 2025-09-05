import React from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = ({ show, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 bg-[#64ffda] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#64ffda]/80 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};