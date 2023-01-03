import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-scroll';

import { NavBarContainer } from './navBarStyle';



const NavBar = () => {

  return (
    <NavBarContainer>
        <Stack direction={'row'} gap={6} ml={6}>
        <Link activeClass="active" smooth spy to="home" style={{ color: 'white', cursor: 'pointer' }}>Home</Link>
        <Link activeClass="active" smooth spy to="about" style={{ color: 'white', cursor: 'pointer' }}>About</Link>
        <Link activeClass="active" smooth spy to="portfolio" style={{ color: 'white', cursor: 'pointer' }}>Portfolio</Link>
        </Stack>
    </NavBarContainer>
  )
}

export default NavBar;