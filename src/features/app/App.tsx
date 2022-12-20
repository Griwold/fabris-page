import React from 'react';

import Presentation from '../presentation/Presentation';
import NavBar from '../navBar/NavBar';
import Socials from '../socials/Socials';
import Works from '../works/Works';

const App = () => {
  return (
    <div style={{ backgroundColor: '#121212' }}>
      <NavBar />
      <Socials />
      <Presentation />
      {/* <Works  */}
    </div>
  )
}

export default App;