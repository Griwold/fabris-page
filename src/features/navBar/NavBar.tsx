import React, { useState } from 'react';
import { Stack } from '@mui/material';

import { NavBarContainer, Navtitle } from './navBarStyle';



const NavBar = () => {

    const [navSelected, setNavSelected] = useState<any>({
        home: false,
        about: false, 
        services: false,
        portfolio: false,
        contact: false
    })

  return (
    <NavBarContainer>
        <Stack direction={'row'} gap={6} ml={6}>
            <Navtitle isClicked={navSelected.about} onClick={() => setNavSelected({...navSelected, about: !navSelected.about})}>About</Navtitle>
            <Navtitle isClicked={navSelected.services} onClick={() => setNavSelected({...navSelected, services: !navSelected.services})}>Services</Navtitle>
            <Navtitle isClicked={navSelected.home} onClick={() => setNavSelected({...navSelected, home: !navSelected.home})}>Home</Navtitle>
            <Navtitle isClicked={navSelected.portfolio} onClick={() => setNavSelected({...navSelected, portfolio: !navSelected.portfolio})}>Portfolio</Navtitle>
            <Navtitle isClicked={navSelected.contact} onClick={() => setNavSelected({...navSelected, contact: !navSelected.contact})}>Contact</Navtitle>
        </Stack>
    </NavBarContainer>
  )
}

export default NavBar;