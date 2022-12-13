import React from 'react';

import Presentation from '../presentation/Presentation';
import NavBar from '../navBar/NavBar';

const App = () => {
  return (
    <div style={{ backgroundColor: '#121212' }}>
      <NavBar />
      <Presentation />
    </div>
  )
}

export default App;