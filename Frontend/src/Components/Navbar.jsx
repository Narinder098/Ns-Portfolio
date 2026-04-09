export default function Navbar() {
    const menuItems = ['About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'];

    return (
        <nav className="fixed w-full bg-white/80 dark:bg-[#0a192f]/80 backdrop-blur-sm z-50 px-8 py-4 transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="#" className="text-[#64ffda] font-bold text-2xl group">
                    <span className="group-hover:animate-pulse">Narinder.dev</span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className="relative capitalize text-[#8cbaaf] hover:text-[#64ffda]/80 transition-colors group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

            </div>
        </nav>
    );
};