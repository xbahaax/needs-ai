import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Side from '../assets/Frame 2.png';
import Marquee from "react-fast-marquee";
import img7 from '../assets/image 7.svg';
import img11 from '../assets/image 11.svg';
import img12 from '../assets/image 12.svg';
import img13 from '../assets/image 13.svg';
import img14 from '../assets/image 14.svg';
import img16 from '../assets/image 16.svg';
import img17 from '../assets/image 17.svg';
import img18 from '../assets/image 18.svg';
import Side2 from '../assets/Manage.png';
import Dash from '../assets/Dashboard.png'
//import { sendDemoRequest, subscribeToNewsletter } from '../services/emailService';

function HomePage() {
  return (
    <div className="home-page" style={{ width: "100%", overflow: "hidden", maxWidth: "100%" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        backgroundColor: '#f8f9fa',
        textAlign: 'left',
        height: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ 
          width: '40%', 
          margin: '0 5%',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <div style={{ width: '100%' }}>
            <h1 style={{ 
              fontSize: '4vw', 
              marginBottom: '2vh',
              fontWeight: 'bold',
              color: '#333'
            }}>AI-Powered Demand Forecasting</h1>
            <p style={{ 
              fontSize: '1.5vw', 
              marginBottom: '4vh',
              color: '#666',
              lineHeight: '1.6'
            }}>
              Optimize your inventory management with predictive analytics
            </p>
            <button style={{
              width: '40%',
              height: '6vh',
              backgroundColor: '#ff9800',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1.2vw',
              transition: 'background-color 0.3s ease'
            }}>Learn More</button>
            
            <div style={{ 
              display: 'flex', 
              marginTop: '10vh', 
              justifyContent: 'space-between', 
              width: '80%' 
            }}>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '3vw', color: '#ff9800', fontWeight: 'bold' }}>92%</h3>
                <p style={{ fontSize: '1.2vw', color: '#666' }}>Accuracy Rate</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '3vw', color: '#ff9800', fontWeight: 'bold' }}>24h</h3>
                <p style={{ fontSize: '1.2vw', color: '#666' }}>Implementation Time</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ 
          width: '60%', 
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <img 
            src={Side} 
            alt="AI Forecasting Visualization" 
            style={{ 
              maxWidth: '100%',
              maxHeight: '90%',
              objectFit: 'contain',
              placeItems:'center',
            }} 
          />
        </div>
      </section>
      
      {/* Trusted Companies Section */}
      <section style={{ 
        textAlign: 'center',
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '40px',
        marginBottom: '200px',
      }}>
        <h2 style={{ fontSize: '3vw', marginBottom: '2vh' }}>Trusted by Leading Companies</h2>
        <p style={{ fontSize: '1.5vw', width: '70%', margin: '0 auto', marginBottom: '5vh' }}>
          Join hundreds of companies using needs.ai to optimize their inventory forecasting and business operations
        </p>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          width: '80%',
          margin: '0 auto',
          opacity: '0.7',
          padding: '0 20px'
        }}>        
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
      </div>
      </section>
      
      {/* About Section */}
      <section style={{ 
        backgroundColor: '#f8f9fa',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '5vh', width: '70%', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3vw', marginBottom: '2vh' }}>About needs.ai</h2>
          <p style={{ fontSize: '1.5vw' }}>
            We help businesses to optimize modern their inventory management through AI-powered demand forecasting
          </p>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          width: '80%', 
          margin: '0 auto',
          height: '130vh',
        }}>
          <div style={{ flex: 1, marginRight: '5%' }}>
            <h3 style={{ fontSize: '2.5vw', marginBottom: '2vh' }}>Helping businesses optimize inventory management</h3>
            <p style={{ fontSize: '1.2vw', lineHeight: '1.6' }}>
              At needs.ai, we use the best analytics, machine learning techniques and 
              data-driven approaches to predict inventory needs for businesses of all 
              sizes. Our software helps reduce costs, eliminate waste and optimize 
              supply chain operations.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '4vh' }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vh', fontSize: '1.2vw' }}>
                <span style={{ marginRight: '2%', color: 'green' }}>✓</span> 
                AI-powered demand forecasting
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vh', fontSize: '1.2vw' }}>
                <span style={{ marginRight: '2%', color: 'green' }}>✓</span> 
                Inventory optimization
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vh', fontSize: '1.2vw' }}>
                <span style={{ marginRight: '2%', color: 'green' }}>✓</span> 
                Digital integration with existing systems
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vh', fontSize: '1.2vw' }}>
                <span style={{ marginRight: '2%', color: 'green' }}>✓</span> 
                Customized solutions for every business
              </li>
            </ul>
            <button style={{
              width: '30%',
              height: '6vh',
              backgroundColor: '#ff9800',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '3vh'
            }}>Learn More</button>
          </div>
          <div style={{ flex: 1 }}>
            {/* Placeholder for dashboard image */}
            <div style={{ 
              width: '100%', 
              backgroundColor: '#e0e0e0', 
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <img src={Side2} alt="" width={'100%'} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section style={{ 
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5vh 0',
        marginTop: '40px',
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '3vw', marginBottom: '2vh' }}>Our Services</h2>
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.5vw', 
          width: '70%', 
          margin: '0 auto', 
          marginBottom: '5vh',
        }}>
          Our AI-powered solutions help businesses optimize their inventory management and forecast demand with high accuracy
        </p>
        
        {/* Service cards */}
        <div style={{ 
          display: 'flex', 
          gap: '3%', 
          justifyContent: 'center',
          width: '80%',
          margin: '0 auto'
        }}>
          <div style={{ 
            width: '30%', 
            backgroundColor: '#fff8f0', 
            borderRadius: '8px',
            padding: '3vh 2%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <div style={{ 
              width: '4vw', 
              height: '4vw', 
              backgroundColor: '#fff0e0', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh'
            }}>
              <span style={{ fontSize: '2vw' }}>📈</span>
            </div>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '2vh' }}>Demand Forecasting</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Predict future inventory needs with our AI-powered algorithms that analyze historical data and market trends.
            </p>
          </div>
          
          <div style={{ 
            width: '30%', 
            backgroundColor: '#fff8f0', 
            borderRadius: '8px',
            padding: '3vh 2%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <div style={{ 
              width: '4vw', 
              height: '4vw', 
              backgroundColor: '#fff0e0', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh'
            }}>
              <span style={{ fontSize: '2vw' }}>📦</span>
            </div>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '2vh' }}>Inventory Optimization</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Optimize stock levels to reduce costs while ensuring you always have the right products available when needed.
            </p>
          </div>
          
          <div style={{ 
            width: '30%', 
            backgroundColor: '#fff8f0', 
            borderRadius: '8px',
            padding: '3vh 2%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <div style={{ 
              width: '4vw', 
              height: '4vw', 
              backgroundColor: '#fff0e0', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh'
            }}>
              <span style={{ fontSize: '2vw' }}>📊</span>
            </div>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '2vh' }}>Advanced Analytics</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Gain valuable insights from your data with comprehensive reports and visualizations to drive better decisions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section style={{ 
        backgroundColor: '#f8f9fa',
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5vh 0'
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '3vw', marginBottom: '2vh' }}>Features That Set Us Apart</h2>
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.5vw', 
          width: '70%', 
          margin: '0 auto', 
          marginBottom: '5vh' 
        }}>
          Our platform combines cutting-edge AI technology with user-friendly interfaces to deliver exceptional results
        </p>
        
        {/* Features cards - first row */}
        <div style={{ 
          display: 'flex', 
          gap: '3%', 
          justifyContent: 'center',
          width: '80%',
          margin: '0 auto 3vh auto'
        }}>
          <div style={{ 
            width: '30%', 
            backgroundColor: '#fff8f0', 
            borderRadius: '8px',
            padding: '3vh 2%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <div style={{ 
              width: '4vw', 
              height: '4vw', 
              backgroundColor: '#fff0e0', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh'
            }}>
              <span style={{ fontSize: '2vw' }}>🔍</span>
            </div>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '2vh' }}>Accurate Forecasting</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Our algorithms achieve over 92% accuracy in predicting future inventory needs across various industries.
            </p>
          </div>
          
          <div style={{ 
            width: '30%', 
            backgroundColor: '#fff8f0', 
            borderRadius: '8px',
            padding: '3vh 2%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <div style={{ 
              width: '4vw', 
              height: '4vw', 
              backgroundColor: '#fff0e0', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh'
            }}>
              <span style={{ fontSize: '2vw' }}>📱</span>
            </div>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '2vh' }}>Real-time Data Processing</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Process and analyze inventory data in real-time to make immediate adjustments to your supply chain.
            </p>
          </div>
          
          <div style={{ 
            width: '30%', 
            backgroundColor: '#fff8f0', 
            borderRadius: '8px',
            padding: '3vh 2%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <div style={{ 
              width: '4vw', 
              height: '4vw', 
              backgroundColor: '#fff0e0', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh'
            }}>
              <span style={{ fontSize: '2vw' }}>🔄</span>
            </div>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '2vh' }}>Built-in ERP Support</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Seamlessly integrate with your existing ERP systems to ensure smooth data flow and operations.
            </p>
          </div>
        </div>
        
        {/* Features cards - second row */}
        <div style={{ 
          display: 'flex', 
          gap: '3%', 
          justifyContent: 'center',
          width: '80%',
          margin: '0 auto'
        }}>
          <div style={{ 
            width: '30%', 
            backgroundColor: '#fff8f0', 
            borderRadius: '8px',
            padding: '3vh 2%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <div style={{ 
              width: '4vw', 
              height: '4vw', 
              backgroundColor: '#fff0e0', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh'
            }}>
              <span style={{ fontSize: '2vw' }}>⚙️</span>
            </div>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '2vh' }}>Custom Workflows</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Create customized workflows that match your specific business processes and requirements.
            </p>
          </div>
          
          <div style={{ 
            width: '30%', 
            backgroundColor: '#fff8f0', 
            borderRadius: '8px',
            padding: '3vh 2%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <div style={{ 
              width: '4vw', 
              height: '4vw', 
              backgroundColor: '#fff0e0', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh'
            }}>
              <span style={{ fontSize: '2vw' }}>🔒</span>
            </div>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '2vh' }}>Data Security</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Enterprise-grade security measures ensure your sensitive business data remains protected at all times.
            </p>
          </div>
          
          <div style={{ 
            width: '30%', 
            backgroundColor: '#fff8f0',
            borderRadius: '8px',
            padding: '3vh 2%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <div style={{ 
              width: '4vw', 
              height: '4vw', 
              backgroundColor: '#fff0e0', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh'
            }}>
              <span style={{ fontSize: '2vw' }}>💬</span>
            </div>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '2vh' }}>Premium Support</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Get 24/7 access to our expert support team to help you maximize the value of our platform.
            </p>
          </div>
        </div>
      </section>
      
      {/* How needs.ai Works Section */}
      <section style={{ 
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5vh 0'
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '3vw', marginBottom: '2vh' }}>How needs.ai Works</h2>
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.5vw', 
          width: '70%', 
          margin: '0 auto', 
          marginBottom: '5vh' 
        }}>
          Our intelligent system analyzes historical inventory patterns to optimize forecasting
        </p>
        
        {/* Process steps */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          width: '80%',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Step 1 */}
          <div style={{ 
            width: '20%', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '5vw', 
              height: '5vw', 
              backgroundColor: '#FFA500', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh',
              color: 'white',
              fontSize: '2vw',
              fontWeight: 'bold'
            }}>1</div>
            <h3 style={{ fontSize: '1.5vw', marginBottom: '1vh', color: '#333' }}>Data Collection</h3>
            <p style={{ fontSize: '1vw', color: '#666', lineHeight: '1.5' }}>
              We collect and organize your historical inventory and sales data to establish patterns
            </p>
          </div>
          
          {/* Step 2 */}
          <div style={{ 
            width: '20%', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '5vw', 
              height: '5vw', 
              backgroundColor: '#E53935', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh',
              color: 'white',
              fontSize: '2vw',
              fontWeight: 'bold'
            }}>2</div>
            <h3 style={{ fontSize: '1.5vw', marginBottom: '1vh', color: '#333' }}>AI Analysis</h3>
            <p style={{ fontSize: '1vw', color: '#666', lineHeight: '1.5' }}>
              Our advanced AI algorithms analyze the data to identify trends and predict future needs
            </p>
          </div>
          
          {/* Step 3 */}
          <div style={{ 
            width: '20%', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '5vw', 
              height: '5vw', 
              backgroundColor: '#1E3A8A', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh',
              color: 'white',
              fontSize: '2vw',
              fontWeight: 'bold'
            }}>3</div>
            <h3 style={{ fontSize: '1.5vw', marginBottom: '1vh', color: '#333' }}>Forecast Generation</h3>
            <p style={{ fontSize: '1vw', color: '#666', lineHeight: '1.5' }}>
              We generate accurate demand forecasts based on the analyzed data and market conditions
            </p>
          </div>
          
          {/* Step 4 */}
          <div style={{ 
            width: '20%', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '5vw', 
              height: '5vw', 
              backgroundColor: '#FF9800', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2vh',
              color: 'white',
              fontSize: '2vw',
              fontWeight: 'bold'
            }}>4</div>
            <h3 style={{ fontSize: '1.5vw', marginBottom: '1vh', color: '#333' }}>Continuous Improvement</h3>
            <p style={{ fontSize: '1vw', color: '#666', lineHeight: '1.5' }}>
              Our system continuously learns and improves its forecasting accuracy over time
            </p>
          </div>
          
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '2.5vw',
            left: '12.5%',
            width: '75%',
            height: '2px',
            backgroundColor: '#ddd',
            zIndex: '-1'
          }}></div>
        </div>
      </section>
      
      {/* How AlgeroDistribution Optimized Their Inventory */}
      <section style={{ 
        backgroundColor: '#f8f9fa',
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5vh 0'
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '3vw', marginBottom: '2vh' }}>How AlgeroDistribution Optimized Their Inventory</h2>
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.5vw', 
          width: '70%', 
          margin: '0 auto', 
          marginBottom: '5vh' 
        }}>
          See how our AI-powered solution transformed their supply chain management
        </p>
        
        <div style={{ 
          display: 'flex', 
          width: '80%',
          margin: '0 auto',
          gap: '5%'
        }}>
          {/* Left side - Case study content */}
          <div style={{ width: '45%' }}>
            <div style={{ marginBottom: '4vh' }}>
              <h3 style={{ fontSize: '2vw', marginBottom: '2vh', color: '#333' }}>The Challenge</h3>
              <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
                AlgeroDistribution struggled with excess inventory of certain products while facing stockouts of others, leading to:
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, marginTop: '2vh' }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vh', fontSize: '1.2vw' }}>
                  <span style={{ marginRight: '2%', color: '#E53935' }}>•</span> 
                  High storage costs for slow-moving products
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vh', fontSize: '1.2vw' }}>
                  <span style={{ marginRight: '2%', color: '#E53935' }}>•</span> 
                  Lost sales opportunities due to stockouts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vh', fontSize: '1.2vw' }}>
                  <span style={{ marginRight: '2%', color: '#E53935' }}>•</span> 
                  Inefficient capital allocation
                </li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '4vh' }}>
              <h3 style={{ fontSize: '2vw', marginBottom: '2vh', color: '#333' }}>The Solution</h3>
              <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
                We implemented our AI-powered demand forecasting system that:
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, marginTop: '2vh' }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vh', fontSize: '1.2vw' }}>
                  <span style={{ marginRight: '2%', color: '#4CAF50' }}>•</span> 
                  Analyzed 3 years of historical sales data
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vh', fontSize: '1.2vw' }}>
                  <span style={{ marginRight: '2%', color: '#4CAF50' }}>•</span> 
                  Identified seasonal patterns and market trends
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vh', fontSize: '1.2vw' }}>
                  <span style={{ marginRight: '2%', color: '#4CAF50' }}>•</span> 
                  Created accurate demand forecasts for each product category
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vh', fontSize: '1.2vw' }}>
                  <span style={{ marginRight: '2%', color: '#4CAF50' }}>•</span> 
                  Integrated with their existing ERP system
                </li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: '2vw', marginBottom: '2vh', color: '#333' }}>The Results</h3>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginTop: '2vh',
                marginBottom: '4vh'
              }}>
                <div style={{ 
                  width: '30%', 
                  textAlign: 'center',
                  backgroundColor: '#f0f8ff',
                  borderRadius: '8px',
                  padding: '2vh 0'
                }}>
                  <h4 style={{ fontSize: '2.5vw', color: '#1E3A8A', fontWeight: 'bold' }}>30%</h4>
                  <p style={{ fontSize: '1vw', color: '#666' }}>Reduction in excess inventory</p>
                </div>
                <div style={{ 
                  width: '30%', 
                  textAlign: 'center',
                  backgroundColor: '#f0f8ff',
                  borderRadius: '8px',
                  padding: '2vh 0'
                }}>
                  <h4 style={{ fontSize: '2.5vw', color: '#1E3A8A', fontWeight: 'bold' }}>25%</h4>
                  <p style={{ fontSize: '1vw', color: '#666' }}>Increase in sales</p>
                </div>
                <div style={{ 
                  width: '30%', 
                  textAlign: 'center',
                  backgroundColor: '#f0f8ff',
                  borderRadius: '8px',
                  padding: '2vh 0'
                }}>
                  <h4 style={{ fontSize: '2.5vw', color: '#1E3A8A', fontWeight: 'bold' }}>15%</h4>
                  <p style={{ fontSize: '1vw', color: '#666' }}>Improvement in cash flow</p>
                </div>
              </div>
              <button style={{
                width: '40%',
                height: '6vh',
                backgroundColor: '#ff9800',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1.2vw'
              }}>Read Full Case Study</button>
            </div>
          </div>
          
          {/* Right side - Dashboard image */}
          <div style={{ width: '50%' }}>
            <div style={{ 
              width: '100%', 
              height: '60vh', 
              backgroundColor: '#e0e0e0', 
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src={Dash} alt="" width={'100%'} style={{ borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section style={{ 
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5vh 0'
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '3vw', marginBottom: '2vh' }}>Frequently Asked Questions</h2>
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.5vw', 
          width: '70%', 
          margin: '0 auto', 
          marginBottom: '5vh' 
        }}>
          Find answers to common questions about our product and services
        </p>
        
        <div style={{ 
          width: '70%',
          margin: '0 auto'
        }}>
          <div style={{ 
            marginBottom: '3vh',
            borderBottom: '1px solid #eee',
            paddingBottom: '2vh'
          }}>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '1vh', color: '#333' }}>How accurate are your demand forecasts?</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Our AI-powered forecasting system achieves an average accuracy rate of 92% across various industries. The accuracy improves over time as the system learns from new data.
            </p>
          </div>
          
          <div style={{ 
            marginBottom: '3vh',
            borderBottom: '1px solid #eee',
            paddingBottom: '2vh'
          }}>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '1vh', color: '#333' }}>Do I need to replace my current ERP system?</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              No, our solution integrates seamlessly with most popular ERP systems. We provide connectors for SAP, Oracle, Microsoft Dynamics, and many others.
            </p>
          </div>
          
          <div style={{ 
            marginBottom: '3vh',
            borderBottom: '1px solid #eee',
            paddingBottom: '2vh'
          }}>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '1vh', color: '#333' }}>How long does implementation take?</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Most implementations are completed within 24 hours. Our team will guide you through the setup process and ensure a smooth transition.
            </p>
          </div>
          
          <div style={{ 
            marginBottom: '3vh',
            borderBottom: '1px solid #eee',
            paddingBottom: '2vh'
          }}>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '1vh', color: '#333' }}>Is my data secure with your system?</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Yes, we implement enterprise-grade security measures including encryption, secure data centers, and regular security audits to protect your business data.
            </p>
          </div>
          
          <div style={{ 
            marginBottom: '3vh',
            borderBottom: '1px solid #eee',
            paddingBottom: '2vh'
          }}>
            <h3 style={{ fontSize: '1.8vw', marginBottom: '1vh', color: '#333' }}>Do you offer ongoing support?</h3>
            <p style={{ fontSize: '1.2vw', color: '#666', lineHeight: '1.6' }}>
              Yes, all our plans include dedicated support. Our premium plans offer 24/7 access to our expert support team.
            </p>
          </div>
          
          <button style={{
            width: '30%',
            height: '6vh',
            backgroundColor: '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1.2vw',
            margin: '2vh auto',
            display: 'block'
          }}>Contact Us</button>
        </div>
      </section>
      
      {/* Demo Section */}
      <section style={{ 
        backgroundColor: '#f8f9fa',
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5vh 0'
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '3vw', marginBottom: '2vh' }}>See needs.ai in Action</h2>
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.5vw', 
          width: '70%', 
          margin: '0 auto', 
          marginBottom: '5vh' 
        }}>
          Transform your inventory management
        </p>
        
        <div style={{ 
          width: '80%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* Demo form */}
          <div style={{ 
            width: '60%',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '3vh 3%'
          }}>
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '3vh'
            }}>
              <div style={{ width: '48%' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '1.2vw', 
                  marginBottom: '1vh',
                  color: '#333'
                }}>First Name</label>
                <input type="text" style={{ 
                  width: '100%',
                  height: '5vh',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1.1vw',
                  padding: '0 2%'
                }} />
              </div>
              <div style={{ width: '48%' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '1.2vw', 
                  marginBottom: '1vh',
                  color: '#333'
                }}>Last Name</label>
                <input type="text" style={{ 
                  width: '100%',
                  height: '5vh',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1.1vw',
                  padding: '0 2%'
                }} />
              </div>
            </div>
            
            <div style={{ marginBottom: '3vh' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '1.2vw', 
                marginBottom: '1vh',
                color: '#333'
              }}>Company Email</label>
              <input type="email" style={{ 
                width: '100%',
                height: '5vh',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1.1vw',
                padding: '0 2%'
              }} />
            </div>
            
            <div style={{ marginBottom: '3vh' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '1.2vw', 
                marginBottom: '1vh',
                color: '#333'
              }}>Company Name</label>
              <input type="text" style={{ 
                width: '100%',
                height: '5vh',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1.1vw',
                padding: '0 2%'
              }} />
            </div>
            
            <div style={{ marginBottom: '3vh' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '1.2vw', 
                marginBottom: '1vh',
                color: '#333'
              }}>Industry</label>
              <select style={{ 
                width: '100%',
                height: '5vh',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1.1vw',
                padding: '0 2%'
              }}>
                <option>Select your industry</option>
                <option>Retail</option>
                <option>Manufacturing</option>
                <option>Distribution</option>
                <option>Healthcare</option>
                <option>Other</option>
              </select>
            </div>
            
            <button style={{
              width: '100%',
              height: '6vh',
              backgroundColor: '#ff9800',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1.2vw'
            }}>Request a Demo</button>
            
            <p style={{ 
              fontSize: '0.9vw', 
              color: '#999', 
              textAlign: 'center',
              marginTop: '2vh'
            }}>
              By submitting this form, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer placeholder */}
        <Footer />
    </div>
  );
}

export default HomePage;