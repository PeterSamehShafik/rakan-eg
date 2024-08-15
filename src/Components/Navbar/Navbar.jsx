import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon
import SmallNavbar from "./SmallNavbar";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { navData } from "../../Data/Data";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setMobileMenuOpen(open);
  };

  return (
    <>
      {/* Small Navbar */}
      <SmallNavbar />

      {/* Main Navbar */}
      <AppBar position="sticky" className="!bg-white !shadow-md py-4">
        <Toolbar className="container mx-auto flex justify-between">
          <Typography variant="h6" className="text-black">
            LOGO
          </Typography>
          <NavMenu data={navData} />
          <div className="lg:hidden">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <FaBars className="text-black" />
            </IconButton>
            <MobileMenu
              open={mobileMenuOpen}
              toggleDrawer={toggleDrawer}
              data={navData}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
