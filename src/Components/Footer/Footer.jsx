import React from 'react';
import { NavLink } from 'react-router-dom';
import { navData } from '../../Data/Data.js';

export default function Footer() {
    // Filter out items with dropdowns for the footer
    const footerNavLinks = navData.filter(item =>
        ['About Us', 'Projects', 'Media Center', 'Contact Us'].includes(item.name)
    );
    return (
        <footer className="bg-zinc-800 text-slate-400 py-10 selection:bg-red-500">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Copyright text */}
                    <div className="mb-4 md:mb-0">
                        © ICE-Infinity - All Rights Reserved.
                    </div>

                    {/* Navigation Links */}
                    <nav className="grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:space-x-4">
                        {footerNavLinks.map((link, index) => (
                            <React.Fragment key={link.url}>
                                <NavLink
                                    to={link.url}
                                    className={({ isActive }) =>
                                        `uppercase transition-colors duration-300 ${isActive ? 'text-white font-bold' : 'hover:text-white'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                                {index < footerNavLinks.length - 1 && (
                                    <span className="hidden md:inline text-slate-400">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}
