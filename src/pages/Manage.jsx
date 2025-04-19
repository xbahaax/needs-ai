"use client"

import { useState } from "react"
import { Menu, ChevronDown, Plus } from "lucide-react"
import logo from '../assets/Group 1.svg';
import logoo from '../assets/Group 2.svg';
import xLogo from '../assets/image 2.svg';
import facebookLogo from '../assets/image 3.svg';
import linkedinLogo from '../assets/image 1.svg';
import instagramLogo from '../assets/image 5.svg';
import Sidebar from '../components/Sidebar';

export default function Manage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  const [stores] = useState([
    { name: "Store_01", id: "001", address: "3in n3dja 19dima" },
    { name: "Store_02", id: "002", address: "5 maison" },
    { name: "Store_03", id: "003", address: "el hamiz" },
  ])

  const [products] = useState([
    { name: "Product 01", id: "101", storeId: "001", unitsSold: 78 },
    { name: "Product 02", id: "1054", storeId: "003", unitsSold: 110 },
    { name: "Product 03", id: "437", storeId: "002", unitsSold: 37 },
  ])

  // Generate calendar days for May 2025
  const generateCalendarDays = () => {
    const days = [];
    const daysInMonth = 31; // May has 31 days
    
    // Add weekday headers
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekdays.forEach(day => {
      days.push({ day, isHeader: true });
    });
    
    // Add days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isHeader: false, isHighlighted: i === 3 || i === 13 });
    }
    
    return days;
  }

  const calendarDays = generateCalendarDays();

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
      }}
    >
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Container */}
      <div style={{ 
        flexGrow: 1, 
        marginLeft: sidebarOpen ? '200px' : '60px',
        transition: 'margin-left 0.3s ease',
      }}>
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#f0f0f0",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Menu 
            size={32} 
            color="#001489" 
            style={{ cursor: "pointer" }} 
            onClick={toggleSidebar}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              left: sidebarOpen ? "350px" : "170px",
              top: "10px",
              opacity: sidebarOpen ? 0 : 1,
              transform: `translateX(${sidebarOpen ? "0" : "-50px"})`,
              transition: "left 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                color: "#001489",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            > 
              <a href="">
                <img src={logo} alt="bg" style={{height:'5vh',width:'10vw',}}/>
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span
              style={{
                fontFamily: "'Orbit', sans-serif", 
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Aoko
            </span>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
            ></div>
            <ChevronDown color="#001489" />
          </div>
        </header>

        {/* Main Content */}
        <main style={{ padding: "20px" }}>
          <h1
            style={{
              fontFamily: "'Orbit', sans-serif", 
              color: "#001489",
              fontSize: "32px",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Stores & Products management
          </h1>

          {/* Stores Panel */}
          <div
            style={{
              border: "None",
              borderRadius: "5px",
              backgroundColor: "#EFB26F",
              maxWidth: "800px",
              margin: "0 auto 30px auto",
              padding: "20px",
              position: "relative",
            }}
          >
            {/* Stores Title */}
            <div
              style={{
                fontFamily: "'Orbit', sans-serif", 
                backgroundColor: "#001489",
                color: "white",
                padding: "10px 30px",
                fontSize: "24px",
                position: "absolute",
                top: "-20px",
                left: "180px",
                borderRadius: "5px",
              }}
            >
              Stores
            </div>

            {/* Table Container */}
            <div style={{ padding: "20px 40px" }}>
              {/* Table Headers */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "150px 100px 1fr",
                  gap: "20px",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Orbit', sans-serif", 
                    backgroundColor: "#001489",
                    color: "white",
                    padding: "8px 10px",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  Name
                </div>
                <div
                  style={{
                    fontFamily: "'Orbit', sans-serif", 
                    backgroundColor: "#001489",
                    color: "white",
                    padding: "8px 10px",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  ID
                </div>
                <div
                  style={{
                    fontFamily: "'Orbit', sans-serif", 
                    backgroundColor: "#001489",
                    color: "white",
                    padding: "8px 10px",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  Address
                </div>
              </div>

              {/* Table Data */}
              {stores.map((store, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "150px 100px 1fr",
                    gap: "20px",
                    marginBottom: "15px",
                    color: "#001489",
                    fontWeight: "bold",
                  }}
                >
                  <div style={{fontFamily: "Consolas, 'Courier New', monospace", paddingLeft: "10px" }}>{store.name}</div>
                  <div style={{fontFamily: "Consolas, 'Courier New', monospace", paddingLeft: "10px" }}>{store.id}</div>
                  <div style={{
                    fontFamily: "Consolas, 'Courier New', monospace", 
                    paddingLeft: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
                  }}>{store.address}</div>
                </div>
              ))}
            </div>

            {/* Add or Modify Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <button
                style={{
                  fontFamily: "'Orbit', sans-serif", 
                  backgroundColor: "#001489",
                  color: "#ffcc99",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "fit-content",
                }}
              >
                <Plus size={20} style={{ marginRight: "10px" }} />
                Add or Modify Stores informations
              </button>
            </div>
          </div>

          {/* Products Panel */}
          <div
            style={{
              border: "None",
              borderRadius: "5px",
              backgroundColor: "#6B75B4",
              maxWidth: "800px",
              margin: "0 auto 30px auto",
              padding: "20px",
              position: "relative",
            }}
          >
            {/* Products Title */}
            <div
              style={{
                fontFamily: "'Orbit', sans-serif", 
                backgroundColor: "#EFB26F",
                color: "#001489",
                padding: "10px 30px",
                fontSize: "24px",
                position: "absolute",
                top: "-20px",
                left: "180px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              Products
            </div>

            {/* Table Container */}
            <div style={{ padding: "20px 40px" }}>
              {/* Table Headers */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "150px 100px 100px 1fr",
                  gap: "20px",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Orbit', sans-serif", 
                    backgroundColor: "#EFB26F",
                    color: "#001489",
                    padding: "8px 10px",
                    textAlign: "center",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Name
                </div>
                <div
                  style={{
                    fontFamily: "'Orbit', sans-serif", 
                    backgroundColor: "#EFB26F",
                    color: "#001489",
                    padding: "8px 10px",
                    textAlign: "center",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  ID
                </div>
                <div
                  style={{
                    fontFamily: "'Orbit', sans-serif", 
                    backgroundColor: "#EFB26F",
                    color: "#001489",
                    padding: "8px 10px",
                    textAlign: "center",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Store ID
                </div>
                <div
                  style={{
                    fontFamily: "'Orbit', sans-serif", 
                    backgroundColor: "#EFB26F",
                    color: "#001489",
                    padding: "8px 10px",
                    textAlign: "center",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Units sold this week
                </div>
              </div>

              {/* Table Data */}
              {products.map((product, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "150px 100px 100px 1fr",
                    gap: "20px",
                    marginBottom: "15px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <div style={{fontFamily: "Consolas, 'Courier New', monospace", paddingLeft: "10px" }}>{product.name}</div>
                  <div style={{fontFamily: "Consolas, 'Courier New', monospace", paddingLeft: "10px" }}>{product.id}</div>
                  <div style={{fontFamily: "Consolas, 'Courier New', monospace", paddingLeft: "10px" }}>{product.storeId}</div>
                  <div style={{fontFamily: "Consolas, 'Courier New', monospace", textAlign: "center" }}>{product.unitsSold}</div>
                </div>
              ))}
            </div>

            {/* Add or Modify Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <button
                style={{
                  fontFamily: "'Orbit', sans-serif", 
                  backgroundColor: "#001489",
                  color: "#ffcc99",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "fit-content",
                }}
              >
                <Plus size={20} style={{ marginRight: "10px" }} />
                Add or Modify Products informations
              </button>
            </div>
          </div>

          {/* Calendar Section */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px auto",
            }}
          >
            <h2
              style={{
                fontFamily: "'Orbit', sans-serif", 
                color: "#001489",
                fontSize: "24px",
                marginBottom: "15px",
              }}
            >
              May-2025
            </h2>
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "10px",
              }}
            >
              {calendarDays.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: item.isHighlighted ? "#EFB26F" : "#6B75B4",
                    color: "white",
                    padding: "10px",
                    textAlign: "center",
                    borderRadius: "20px",
                    fontFamily: "'Orbit', sans-serif",
                    fontWeight: item.isHeader ? "bold" : "normal",
                  }}
                >
                  {item.day}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer
            style={{
              textAlign: "center",
              marginTop: "30px",
              padding: "20px",
              borderTop: "1px solid #ddd",
              backgroundColor: "#f8f8f8",
              borderRadius: "5px",
              boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div style={{ 
              marginBottom: "20px", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              gap: "30px",
              padding: "10px 0"
            }}>
              {/* Social Media Icons */}
              <img src={xLogo} alt="X" style={{ width: "32px", height: "32px", cursor: "pointer" }} />
              <img src={facebookLogo} alt="Facebook" style={{ width: "32px", height: "32px", cursor: "pointer" }} />
              <img src={linkedinLogo} alt="LinkedIn" style={{ width: "32px", height: "32px", cursor: "pointer" }} />
              <img src={instagramLogo} alt="Instagram" style={{ width: "32px", height: "32px", cursor: "pointer" }} />
            </div>
            
            <div style={{ 
              color: "#001489", 
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              fontFamily: "'Orbit', sans-serif",
              fontWeight: "500"
            }}>
              <span style={{ cursor: "pointer", padding: "0 10px" }}>NEEDS.AI</span> 
              <span>|</span> 
              <span style={{ cursor: "pointer", padding: "0 10px" }}>Contact Us</span> 
              <span>|</span> 
              <span style={{ cursor: "pointer", padding: "0 10px" }}>Terms of Service</span> 
              <span>|</span> 
              <span style={{ cursor: "pointer", padding: "0 10px" }}>Privacy Policy</span>
            </div>
            
            <div style={{ 
              backgroundColor: "#001489", 
              color: "white", 
              padding: "25px", 
              marginTop: "20px",
              borderRadius: "0 0 5px 5px"
            }}>
              <div style={{ marginBottom: "10px" }}>
                <img src={logoo} alt="fdv" />
              </div>
              <div style={{ fontSize: "14px", opacity: "0.9" }}>
                © 2025, NEEDS.AI Corporation Pvt. Ltd. All Rights Reserved.
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
