import React from 'react';
import { Box } from '@mui/material';
import { isBrowser } from 'react-device-detect';

import Presentation from '../presentation/Presentation';
import NavBar from '../navBar/NavBar';
import Socials from '../socials/Socials';
import Portfolio from '../portfolio/Portfolio';
import About from '../about/About';

const App = () => {
  return (
    <Box style={{ height: '100%', width: '100%' }}>
      {isBrowser && <NavBar />}
      <Socials />
      <section id='home'>
        <Presentation />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='portfolio'>
        <Portfolio />
      </section>
    </Box>
  )
}

export default App;