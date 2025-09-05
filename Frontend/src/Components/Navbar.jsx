import React from 'react'

const Navbar = () => {

    const menuItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];
    return (
        <>
            <nav className="fixed w-full bg-white/90 dark:bg-[#0a192f]/90 backdrop-blur-sm z-50 px-4 py-4 transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="#" className="text-[#64ffda] font-bold text-2xl group">
                        <span className="group-hover:animate-pulse">Narinder.dev</span>
                    </a>

                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}

                    </div>

                    {/* DesktopMenu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <a href={`#${item}`} key={item} className="text-[#64ffda] hover:text-[#64ffda]/80">
                                {item}
                            </a>
                        ))
                        }
                    </div>

                    {/* <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                className={`hover:text-[#64ffda] transition-colors capitalize relative group 'text-[#64ffda]'
                                    }`}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        ))}
                    </div> */}


                </div>
            </nav>
        </>
    )
}

export default Navbar