import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdExpandMore } from 'react-icons/md';

const NavMenu = ({ data }) => (
    <div className="hidden lg:flex space-x-4 font-semibold">
        {data.map((item, index) =>
            item.dropdown ? (
                <div key={index} className="inline-block px-4 relative group">
                    <div className="flex items-center space-x-2 text-black hover:text-gray-600 cursor-pointer">
                        <span>{item.name}</span>
                        <MdExpandMore />
                    </div>
                    <div className="absolute left-0 right-0 mt-4 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
                        {item.submenu.map((subitem, subindex) => (
                            <NavLink
                                key={subindex}
                                to={subitem.url}
                                className="block px-4 py-2 text-black hover:bg-zinc-100 hover:text-gray-600"
                            >
                                {subitem.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            ) : (
                <NavLink
                    key={index}
                    to={item.url}
                    className={({ isActive }) => `text-black hover:text-gray-600 px-4 ${isActive ? 'text-red-800' : ''}`}
                >
                    {item.name}
                </NavLink>
            )
        )}
    </div>
);

export default NavMenu;
