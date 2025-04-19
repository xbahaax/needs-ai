import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../assets/logo.svg'

function AboutUs() {
  return (
    <div className="about-us-page" style={{ width: "100%", overflow: "hidden", maxWidth: "100%" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
        padding: '80px 0 60px',
        width: '100%'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '20px',
          color: '#1a237e'
        }}>About Us</h1>
        <p style={{ 
          fontSize: '1.2rem', 
          maxWidth: '800px',
          margin: '0 auto',
          color: '#666',
          lineHeight: '1.6'
        }}>
          We're on a mission to revolutionize inventory management through AI-powered solutions.
        </p>
      </section>
      
      {/* Company Info Section */}
      <section style={{
        padding: '80px 0',
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        margin: '0 auto'
      }}>
        <div style={{ width: '45%' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '30px', color: '#333' }}>Our Story</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
            NEEDS.AI was founded in 2023 with a clear vision: to transform how businesses manage their inventory through artificial intelligence.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
            Our team of data scientists, engineers, and business experts came together to solve the complex challenges of inventory forecasting and optimization.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
            Today, we're proud to serve businesses of all sizes, helping them reduce costs, minimize waste, and maximize efficiency through our cutting-edge AI platform.
          </p>
        </div>
        
        <div style={{ width: '45%', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
          {/* Placeholder for company image */}
          <div style={{ 
            width: '100%', 
            height: '400px', 
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#999',
            fontSize: '1.2rem'
          }}>
            <img src={Logo} alt="Logo" style={{ height: "100px",widows:"100px", cursor: "pointer" }} />
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#f8f9fa',
        textAlign: 'center'
      }}>
        <div style={{ width: '80%', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '50px', color: '#333' }}>Our Mission & Values</h2>
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            gap: '30px'
          }}>
            <div style={{ 
              flex: 1,
              backgroundColor: 'white',
              padding: '40px 30px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#1a237e' }}>Innovation</h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
                We constantly push the boundaries of what's possible with AI and machine learning to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div style={{ 
              flex: 1,
              backgroundColor: 'white',
              padding: '40px 30px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#1a237e' }}>Reliability</h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
                Our customers depend on our forecasts to make critical business decisions. We take this responsibility seriously.
              </p>
            </div>
            
            <div style={{ 
              flex: 1,
              backgroundColor: 'white',
              padding: '40px 30px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#1a237e' }}>Customer Focus</h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
                We measure our success by the success of our customers. Their challenges drive our innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section style={{
        padding: '80px 0',
        width: '80%',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '50px', color: '#333', textAlign: 'center' }}>Our Team</h2>
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          {/* Team member cards would go here */}
          {[1, 2, 3, 4].map((member) => (
            <div key={member} style={{ 
              width: 'calc(25% - 30px)',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <div style={{ 
                width: '100%', 
                height: '200px', 
                backgroundColor: '#e0e0e0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#999'
              }}>
                Photo
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '5px', color: '#333' }}>Team Member {member}</h3>
                <p style={{ fontSize: '1rem', color: '#666', marginBottom: '15px' }}>Position</p>
                <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: '1.6' }}>
                  Brief description about the team member and their expertise.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default AboutUs;