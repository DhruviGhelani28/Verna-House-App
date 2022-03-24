
import './App.css';
import React from 'react';

import Home from './Componants/Home';

import { BrowserRouter as Router } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import AppBarHeader from './Componants/AppBar/AppBarHeader';

function App() {
  // let match = useMatch();

  return (

    <React.Fragment>
      <Router>
        <Home />
      </Router>
    </React.Fragment>


  );
}

export default App;
