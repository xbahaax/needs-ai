import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from "react-fast-marquee";
import img7 from '../assets/image 7.svg';
import img11 from '../assets/image 11.svg';
import img12 from '../assets/image 12.svg';
import img13 from '../assets/image 13.svg';
import img14 from '../assets/image 14.svg';
import img16 from '../assets/image 16.svg';
import img17 from '../assets/image 17.svg';
import img18 from '../assets/image 18.svg';

function Customers() {
  return (
    <div style={{ width: "100%", overflow: "hidden", maxWidth: "100%" }}>
      <Navbar />

      {/* Customers Section */}
      <section style={{
        textAlign: 'center',
        padding: '60px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#1a237e', marginBottom: '20px' }}>
          Our Customers
        </h1>
        <p style={{
          fontSize: '1rem',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#666',
          lineHeight: '1.6'
        }}>
          Discover the businesses and individuals who trust our program.
        </p>

        {/* Customer Logos Marquee */}
        <Marquee gradient={false} speed={50} style={{ paddingTop: "40px" }}>
          <img src={img7} alt="Logo 1" style={{ height: 50, marginRight: 100 }} />
          <img src={img12} alt="Logo 2" style={{ height: 50, marginRight: 100 }} />
          <img src={img13} alt="Logo 3" style={{ height: 50, marginRight: 100 }} />
          <img src={img14} alt="Logo 4" style={{ height: 50, marginRight: 100 }} />
        </Marquee>
        <Marquee gradient={false} speed={50} style={{ paddingTop: "40px" }} direction='right'>
          <img src={img16} alt="Logo 5" style={{ height: 50, marginRight: 100 }} />
          <img src={img17} alt="Logo 6" style={{ height: 50, marginRight: 100 }} />
          <img src={img11} alt="Logo 7" style={{ height: 50, marginRight: 100 }} />
          <img src={img18} alt="Logo 8" style={{ height: 50, marginRight: 100 }} />
        </Marquee>

        {/* Customer Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: '40px',
          padding: '0 20px'
        }}>
          {customers.map((customer, idx) => (
            <div key={idx} style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1.2rem', color: '#1a237e', marginBottom: '10px' }}>{customer.name}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{customer.testimonial}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

const customers = [
  { name: 'John Doe', testimonial: 'This program has transformed my business operations.' },
  { name: 'Jane Smith', testimonial: 'A must-have tool for any modern business.' },
  { name: 'Acme Corp.', testimonial: 'Exceptional service and results.' }
];

export default Customers;