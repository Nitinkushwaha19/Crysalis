import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-black/20 backdrop-blur-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center justify-center gap-2">
                        <img
                            className="rounded-full bg-white p-1"
                            width="35"
                            height="35"
                            alt=""
                            src="/assets/logo@720x.png"
                        />
                        <div className="flex-shrink-0 text-white font-bold text-xl">
                            CHRYSALIS
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-purple-200"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        {["Home", "Events", "Members"].map((item) => (
                            <a
                                key={item}
                                href={`${item.toLowerCase()}`}
                                className="text-white hover:text-purple-200 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {["Events", "Members"].map((item) => (
                            <a
                                key={item}
                                href={`${item.toLowerCase()}`}
                                className="block px-3 py-2 text-white hover:text-purple-200"
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
