import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../assets/logo.svg';

function Plans() {
  return (
    <div style={{ width: "100%", overflow: "hidden", maxWidth: "100%" }}>
      <Navbar />

      {/* Plans Section */}
      <section style={{
        textAlign: 'center',
        padding: '60px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <img src={Logo} alt="NEEDS.AI Logo" style={{ marginBottom: '20px', height: '60px' }} />
        <h1 style={{fontFamily: "'Orbit', sans-serif", fontSize: '2rem', color: '#1a237e', marginBottom: '20px' }}>
          Unlock the Power of Predictive AI
        </h1>
        <p style={{
          fontSize: '1rem',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#666',
          lineHeight: '1.6'
        }}>
          Maximize your sales with accurate weekly forecasts powered by machine learning.
        </p>

        {/* Pricing Cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '50px',
          flexWrap: 'wrap'
        }}>
          {/* Plan Card Component */}
          {plans.map((plan, idx) => (
            <div key={plan.title} style={{
              width: '250px',
              background: '#4FC3F7',
              borderRadius: plan.featured ? '24px' : '16px',
              padding: '30px 20px',
              position: 'relative',
              boxShadow: plan.featured
                ? '0 6px 16px rgba(0,0,0,0.2)'
                : '0 4px 12px rgba(0,0,0,0.1)',
              transform: plan.featured ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.3s ease',
              height: plan.featured ? '440px' : '400px'
            }}>
              {plan.featured && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ff9800',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '0.75rem'
                }}>MOST POPULAR</div>
              )}
              <h2 style={{ fontSize: '1.1rem', color: '#0d47a1', fontWeight: 'bold' }}>{plan.title}</h2>
              <h3 style={{ fontSize: '1.6rem', color: '#0d47a1', margin: '10px 0' }}>
                <span style={{ fontWeight: 'bold' }}>{plan.price}</span><span style={{ fontWeight: 'normal' }}>/mo</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                {plan.features.map((f, i) => (
                  <li key={i} style={{
                    fontSize: '0.9rem',
                    color: '#fff',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'white',
                      borderRadius: '50%'
                    }}></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button style={{
                backgroundColor: '#0d47a1',
                color: 'white',
                width: '100%',
                height: '40px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>{plan.buttonText}</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

const plans = [
  {
    title: 'Basic',
    price: '6 000DA',
    features: ['Voice messages anywhere', 'Basic analytics', 'Email support'],
    buttonText: 'Already using',
    featured: false,
  },
  {
    title: 'Premium',
    price: '14 999DA',
    features: ['Voice messages anywhere', 'Advanced analytics', 'Priority support', 'Custom integrations'],
    buttonText: 'Buy now',
    featured: true,
  },
  {
    title: 'Business',
    price: '24 999DA',
    features: ['Voice messages anywhere', 'Full analytics suite', 'Dedicated account manager', '24/7 support'],
    buttonText: 'Buy now',
    featured: false,
  }
];

export default Plans;