import React from 'react';
import { Drawer, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { MdExpandMore } from 'react-icons/md';

const MobileMenu = ({ open, toggleDrawer, data }) => (
  <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
    <div className="w-full h-full bg-zinc-800 text-white">
      <List className='!py-0'>
        {data.map((item, index) =>
          item.dropdown ? (
            <Accordion key={index} className='!shadow-none flex flex-col !bg-zinc-800 !text-white border-b border-slate-300'>
              <AccordionSummary className='self-center' expandIcon={<MdExpandMore className='text-white' />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                <Typography>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails className='!py-0 !bg-zinc-700 flex flex-col items-center '>
                <List className='!py-0'>
                  {item.submenu.map((subitem, subindex) => (
                    <ListItem key={subindex} component={NavLink} to={subitem.url} onClick={toggleDrawer(false)}>
                      <ListItemText primary={subitem.name} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ) : (
            <ListItem key={index} className='border-b border-slate-300 !text-center' component={NavLink} to={item.url} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.name} />
            </ListItem>
          )
        )}
      </List>
    </div>
  </Drawer>
);

export default MobileMenu;
