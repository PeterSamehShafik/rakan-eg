import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
import SmallNavbar from './SmallNavbar';
import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setMobileMenuOpen(open);
  };

  const data = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    {
      name: "Our Services",
      dropdown: true,
      submenu: [
        { name: "Service 1", url: "/service1" },
        { name: "Service 2", url: "/service2" },
      ]
    },
    { name: "Projects", url: "/projects" },
    { name: "Media Center", url: "/media-center" },
    { name: "Contact Us", url: "/contact-us" },
  ];

  return (
    <>
      {/* Small Navbar */}
      <SmallNavbar />

      {/* Main Navbar */}
      <AppBar position="sticky" className="!bg-white !shadow-md p-4 lg:px-10">
        <Toolbar className="container mx-auto flex justify-between pe-4">
          <Typography variant="h6" className="text-black">
            LOGO
          </Typography>
          <NavMenu data={data} />
          <div className="lg:hidden">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <FaBars className="text-black" />
            </IconButton>
            <MobileMenu open={mobileMenuOpen} toggleDrawer={toggleDrawer} data={data} />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
