import './App.css';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Menu from './screens/Menu.js';
import Funda from './pages/Funda';
import Sr from './pages/Sr';
import Cn from './pages/Cn';
import Risk from './pages/Risk';
import Intra from './pages/Intra';
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import Tradrule from './pages/Tradrule';
import Mind from './pages/Mind';
import Long from './pages/Long';
import Short from './pages/Short';
import Mid from './pages/Mid';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/funda" element={<Funda />} />
          <Route exact path="/sr" element={<Sr />} />
          <Route exact path="/cn" element={<Cn />} />
          <Route exact path="/risk" element={<Risk />} />
          <Route exact path="/intrad" element={<Intra />} />
          <Route exact path="/tradinrules" element={<Tradrule />} />
          <Route exact path="/mind" element={<Mind />} />
          <Route exact path="/long" element={<Long />} />
          <Route exact path="/short" element={<Short />} />
          <Route exact path="/mid" element={<Mid />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
