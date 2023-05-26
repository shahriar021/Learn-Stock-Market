import './App.css';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Menu from './screens/Menu.js';
import Funda from './pages/Funda';
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";




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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
