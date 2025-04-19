import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add all brand icons to the library
library.add(fab);

function Footer() {
  return (
    <footer style={{ 
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop:'20px',
      backgroundColor: 'white',
      borderTop: '1px solid #e0e0e0',
      boxSizing:'border-box'
    }}>
      {/* Social Media Icons */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '20px'
      }}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2' }}>
          <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2' }}>
          <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}>
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F' }}>
          <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
        </a>
      </div>

      {/* Dark Blue Footer with Logo and Copyright */}
      <div style={{ 
        width: '100%',
        backgroundColor: '#1a237e',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 0'
      }}>
        {/* Logo */}
        <div style={{ marginBottom: '15px' }}>
          <img 
            src="/favicon.ico" 
            alt="NEEDS.AI Logo" 
            style={{ height: '40px' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.nextSibling.style.fontSize = '28px';
            }}
          />
        </div>
        
        {/* Copyright */}
        <p style={{ color: 'white', fontSize: '14px', margin: 0, fontWeight: '300' }}>
          © 2025, NEEDS.AI Corporation Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
