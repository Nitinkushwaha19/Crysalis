import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className="bg-black/20 backdrop-blur-lg fixed w-full z-50 border-b-2 border-gray-700/75 transition-all duration-300 ease-in-out">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center justify-center gap-2">
                        <img
                            className="rounded-full bg-white p-1 transition-transform duration-300"
                            width="35"
                            height="35"
                            alt=""
                            src="/assets/logo@720x.png"
                        />
                        <div className="flex-shrink-0 text-white font-bold text-xl transition-transform duration-300">
                            CHRYSALIS
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    {/* ... mobile menu button ... */}

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        <a
                            key="home"
                            href="/"
                            className={`text-white transition-colors duration-300 ${location.pathname === '/' ? 'border-b-2 border-blue-500 font-bold' : ''}`} // Added border and bold when active
                        >
                            Home
                        </a>
                        {["Events", "Members"].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className={`text-white transition-colors duration-300 ${location.pathname === `/${item.toLowerCase()}` ? 'border-b-2 border-blue-500 font-bold' : ''}`} // Added border and bold when active
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg border-b-2 border-gray-700/75">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                            key="home"
                            href="/"
                            className={`block px-3 py-2 text-white transition-colors duration-300 ${location.pathname === '/' ? 'border-b-2 border-blue-500 font-bold' : ''}`} // Added border and bold when active
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </a>
                        {["Events", "Members"].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className={`block px-3 py-2 text-white transition-colors duration-300 ${location.pathname === `/${item.toLowerCase()}` ? 'border-b-2 border-blue-500 font-bold' : ''}`} // Added border and bold when active
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;