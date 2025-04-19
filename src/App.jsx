import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Plans from './pages/Plans';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import Customers from './pages/Customers'; // Import the Customers page
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Manage from './Pages/Manage'
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
        <Route path="/manage" element={<Manage /> }  />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;