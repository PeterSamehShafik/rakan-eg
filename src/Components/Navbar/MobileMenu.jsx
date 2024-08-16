import React from 'react';
import { Drawer, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { MdExpandMore } from 'react-icons/md';

const MobileMenu = ({ open, toggleDrawer, data }) => (
  <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
    <div className="w-full h-full bg-zinc-800 text-white">
      <List className='!py-0'>
        {data.map((item, index) =>
          item.dropdown ?
            <Accordion key={index} className='!shadow-none flex flex-col !bg-zinc-800 !text-white border-b border-slate-300'>
              <AccordionSummary className='self-center' expandIcon={<MdExpandMore className='text-white' />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                <Typography>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails className='!p-0 !bg-zinc-700 '>
                <List className='!py-0 w-full'>
                  {item.submenu.map((subitem, subindex) =>
                    <NavLink key={subindex} to={subitem.url} onClick={toggleDrawer(false)} className={({ isActive }) => `block w-full ${isActive ? 'bg-red-800' : ''}`}>
                      <ListItem className='w-full'>
                        <ListItemText className='text-center' primary={subitem.name} />
                      </ListItem>
                    </NavLink>
                  )}
                </List>
              </AccordionDetails>
            </Accordion>
            :
            <NavLink key={index} to={item.url} onClick={toggleDrawer(false)} className={({ isActive }) => `block w-full ${isActive ? 'bg-red-800 rounded-md' : ''}`}>
              <ListItem className='border-b border-slate-300 !text-center'>
                <ListItemText primary={item.name} />
              </ListItem>
            </NavLink>
        )}
      </List>
    </div>
  </Drawer>
);

export default MobileMenu;
