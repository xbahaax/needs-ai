import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Plans from './pages/Plans';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import Customers from './pages/Customers'; // Import the Customers page
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/customers" element={<Customers />} /> {/* Add the Customers route */}
      </Routes>
    </Router>
  );
}

export default App;