import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Example import of logos (replace these with your actual paths)
import logo1 from '../assets/Dell_Logo.svg';
import logo2 from '../assets/Ouedkniss.svg';
import logo3 from '../assets/Nvidia_logo.svg';
import logo4 from '../assets/Micro-Star_International_logo.svg';
import logo5 from '../assets/Lenovo_logo_2015.svg';
import logo6 from '../assets/Intel_logo_2023.svg';

const Partners = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo1, logo2]; // duplicated for smoother loop
  const companies = [
    { name: 'Dell', description: 'Leading technology solutions provider.' },
    { name: 'Ouedkniss', description: 'Innovative online marketplace.' },
    { name: 'Nvidia', description: 'Pioneers in graphics processing.' },
    { name: 'MSI', description: 'High-performance computing hardware.' },
    { name: 'Lenovo', description: 'Global leader in PC manufacturing.' },
    { name: 'Intel', description: 'World-renowned semiconductor company.' }
  ];

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden", maxWidth: "100%" }}>
      <Navbar />

      <div className="partners-section">
        <h2 className="title">Trusted by amazing partners</h2>
        <div className="slider">
          <div className="slider-track">
            {logos.map((logo, index) => (
              <div className="slide" key={index}>
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Company Name Cards */}
        <div className="company-cards" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '40px',
          padding: '0 20px'
        }}>
          {companies.map((company, idx) => (
            <div key={idx} style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.2rem', color: '#1a237e', marginBottom: '10px' }}>{company.name}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{company.description}</p>
            </div>
          ))}
        </div>

        {/* Inline CSS for demo purposes */}
        <style>{`
          .partners-section {
            background: #f9f9f9;
            padding: 60px 20px;
            text-align: center;
            overflow: hidden;
          }

          .title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 40px;
          }

          .slider {
            overflow: hidden;
            position: relative;
            width: 100%;
          }

          .slider-track {
            display: flex;
            width: calc(250px * ${logos.length});
            animation: scroll 25s linear infinite;
            gap: 40px;
          }

          .slide {
            width: 250px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
          }

          .slide img {
            max-height: 60px;
            object-fit: contain;
            filter: grayscale(100%);
            transition: filter 0.3s ease;
            aspect-ratio: 3/3;
          }

          .slide img:hover {
            filter: grayscale(0%);
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      <Footer />
    </div>
  );
};

export default Partners;
