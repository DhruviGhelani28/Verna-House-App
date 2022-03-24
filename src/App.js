
import './App.css';

import { Route, Routes } from 'react-router-dom';
import LoginRegistration from './Componants/Login/LoginRegistration';
import Registration from './Componants/Login/Registration';
import Home from './Componants/Home';
import About from './Componants/About';
// import Button from '@mui/material/Button';

import React from 'react';
import AppBarHeader from './Componants/AppBar/AppBarHeader';

function App() {
  // let match = useMatch();
  return (

    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/About" element={<About />} exact/>
        <Route path="/Login/*" element={<LoginRegistration />} exact/>
        <Route path="/Registration" element={<Registration />} exact/>
      </Routes>
    </React.Fragment>


  );
}

export default App;
