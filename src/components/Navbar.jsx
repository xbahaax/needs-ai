import React from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{
      width: "100%", 
      height: "80px", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: "0 2rem",
      boxSizing:"border-box",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      {/* Logo on the left - Added Link to home route */}
      <div className="logo-container"> 
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ height: "50px", cursor: "pointer" }} />
        </Link>
      </div>
      
      {/* Navigation links in the middle */}
      <div style={{display: "flex", gap: "2rem"}}>
        <Link to="/plans" style={{ textDecoration: "none", color: "#333" }}>Plans</Link>
        <Link to="/customers" style={{ textDecoration: "none", color: "#333" }}>Customers</Link>
        <Link to="/partners" style={{ textDecoration: "none", color: "#333" }}>Partners</Link>
        <Link to="/about" style={{ textDecoration: "none", color: "#333" }}>About Us</Link>
      </div>
      
      {/* Sign in/up buttons on the right */}
      <div style={{display: "flex", gap: "1rem"}}>
        <Link to="/Login"style={{
          padding: "0.5rem 1rem",
          backgroundColor: "transparent",
          border: "1px solid #007bff",
          borderRadius: "4px",
          color: "#007bff",
          cursor: "pointer"
        }}>Sign In</Link>
        <Link to="/signup" style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          color: "white",
          cursor: "pointer"
        }}>Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar;