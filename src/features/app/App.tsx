import React from 'react';

import Presentation from '../presentation/Presentation';
import NavBar from '../navBar/NavBar';
import Socials from '../socials/Socials';
import Portfolio from '../portfolio/Portfolio';
import About from '../about/About';

const App = () => {
  return (
    <div style={{ backgroundColor: '#121212' }}>
      <NavBar />
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
    </div>
  )
}

export default App;