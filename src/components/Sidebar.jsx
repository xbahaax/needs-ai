import React, { useState } from 'react';
import { LayoutDashboard, BarChart3, Settings, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Group 1.svg';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { name: 'Dash-Board', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'Demands', icon: <span style={{ fontSize: '20px', fontWeight: 'bold' }}>!</span>, path: '/demands' },
    { name: 'Statistics', icon: <BarChart3 size={20} />, path: '/statistics' },
    { name: 'Manage', icon: <Settings size={20} />, path: '/manage' },
    { name: 'Predict', icon: <BrainCircuit size={20} />, path: '/predict' },
  ];

  return (
    <div
      style={{
        width: isOpen ? '200px' : '60px',
        height: '100vh',
        backgroundColor: '#001489',
        color: 'white',
        transition: 'width 0.3s ease',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {isOpen && (
          <img 
            src={logo} 
            alt="NEEDS.AI" 
            style={{ 
              height: '30px', 
              marginRight: '10px',
              filter: 'brightness(0) invert(1)' // Make logo white
            }} 
          />
        )}
      </div>

      <nav style={{ marginTop: '20px' }}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '15px 20px',
              color: 'white',
              textDecoration: 'none',
              borderLeft: window.location.pathname === item.path ? '4px solid white' : '4px solid transparent',
              backgroundColor: window.location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            }}
          >
            <div style={{ marginRight: '15px' }}>{item.icon}</div>
            {isOpen && (
              <span style={{ fontFamily: "'Orbit', sans-serif" }}>{item.name}</span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;