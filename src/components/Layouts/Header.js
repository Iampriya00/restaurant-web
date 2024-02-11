import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, Divider } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import '../../styles/Headerstyle.css';
import MenuIcon from '@mui/icons-material/Menu';
import { BiChevronDown } from "react-icons/bi";


const Header = () => {
  const [mobileopen, setMobileopen] = useState(false);

  // handle menu click
  const handleDrawerToggle = () => {
    setMobileopen(!mobileopen);
  };

  // menu drawer
  const drawer = (
    <div onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={'goldenrod'} variant='h6' component="div" sx={{ flexGrow: 1, my: 2 }}>
        <FastfoodIcon />
        FoodieWeb
      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
        <li>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
            Home
          </Link>
        </li>

        <li>
          <Link to={'/menu'} style={{ textDecoration: 'none', color: 'black' }}>
            Premium Dishes
          </Link>
        </li>

        <li>
          <Link to={'/ourdishes'} style={{ textDecoration: 'none', color: 'black' }}>
            Our Dishes
          </Link>
        </li>

        <li>
          <Link to={'/about'} style={{ textDecoration: 'none', color: 'black' }}>
            About
          </Link>
        </li>
        <li>
          <Link to={'/reviwe'} style={{ textDecoration: 'none', color: 'black' }}>
            Reviews
          </Link>
        </li>

        <li>
          <Link to={'/contact'} style={{ textDecoration: 'none', color: 'black' }}>
            Contact
          </Link>
        </li>

        <li>
          <Link to={'/Login'} style={{ textDecoration: 'none', color: 'black' }}>
            Login
          </Link>
        </li>

      </ul>
    </div>
  );

  return (
    <Box>
      <AppBar component={'nav'} sx={{ bgcolor: '#FDFDFC' }}>
        <Toolbar>
          <IconButton

            onClick={handleDrawerToggle}
            color='inherit'
            aria-label='open drawer'
            edge='start'
            sx={{
              mr: 2,
              display: { sm: 'none' },
            }}
          >
            <MenuIcon color='action' />
          </IconButton>

          <Typography color={'goldenrod'} variant='h6' component="div" sx={{ flexGrow: '1' }}>
            <FastfoodIcon />
            FoodieWeb
          </Typography>

          <Box sx={{
            display: { xs: 'none', sm: 'block' }, cursor: "pointer", mr: 2,
            "& svg:hover": {
              color: 'golden',
              transform: 'translateX(5px)',
              transition: 'all 400ms',
            }
          }}>

            <ul className='navigation-menu'>
              <li>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                  Home
                </Link>
              </li>



              <li className="relative group">
                <div className=" flex items-center gap-1">
                  <Link style={{ textDecoration: 'none', color: 'black' }}>
                    Menu
                  </Link>

                  <BiChevronDown className="text-black cursor-pointer" size={25} />
                </div>

                <ul className="w-[200px] absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-3">
                  <li>
                    <Link to={'/ourdishes'} style={{ textDecoration: 'none', color: 'black' }}>
                      Our Dishes
                    </Link>
                  </li>

                  <li>
                    <Link to={'/menu'} style={{ textDecoration: 'none', color: 'black' }}>
                      Premium Dishes
                    </Link>
                  </li>
                </ul>


              </li>

              <li>
                <Link to={'/about'} style={{ textDecoration: 'none', color: 'black' }}>
                  About
                </Link>
              </li>

              <li>
                <Link to={'/review'} style={{ textDecoration: 'none', color: 'black' }}>
                  Reviews
                </Link>
              </li>
    
              <li>
                <Link to={'/contact'} style={{ textDecoration: 'none', color: 'black' }}>
                  Contact
                </Link>
              </li>

              <li>
                <Link to={'/Login'} style={{ textDecoration: 'none', color: 'black' }}>
                  Login
                </Link>
              </li>

            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer variant='temporary' open={mobileopen} onClose={handleDrawerToggle} sx={{
          display: {
            xs:
              'block', sm: 'none'
          }, "&. MuiDrawer-paper": { boxSizing: 'border-box', width: "240px" }
        }}>
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};
export default Header;

