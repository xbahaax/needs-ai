import React from 'react'
import logo from '../assets/Group 1.svg';
import bg from '../assets/Layer_1.png';
const Login = () => {
return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        placeItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#DFE0DF',
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div style={{transform: 'translateY(30vh)'}}>
            <img src={logo} alt="bg" style={{height:'20vh',width:'30vw',}}/>
            <div style={{display:'flex',
                         flexDirection: 'column', 
                         justifyContent: 'space-between', 
                         alignItems: 'center', 
                         height: '40vh', 
                         width: '30vw'}}> 
                <div style={{display:'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'space-evenly', 
                            alignItems: 'right', 
                            height: '30vh'}}>
                    <p style={{fontFamily: "'Orbit', sans-serif", 
                            fontSize: '1.5vw', 
                            color: '#7680B0'}}
                            >Email  *</p>
                    <input type="text" placeholder='' style={{backgroundColor:'#0E2082', 
                                                            color: 'white', 
                                                            border: 'none', 
                                                            borderRadius:'30px', 
                                                            textAlign: 'center',  
                                                            height: '7vh', 
                                                            width:'35vw', 
                                                            fontSize: '1.5vw'}} />
                    <p style={{fontFamily: "'Orbit', sans-serif", 
                            fontSize: '1.5vw', 
                            color: '#7680B0'}}
                            >Password  *</p>
                    <input type="password" placeholder='' style={{backgroundColor:'#0E2082', 
                                                                color: '#DFE0DF', 
                                                                border: 'none', 
                                                                borderRadius:'30px', 
                                                                textAlign: 'center',  
                                                                height: '7vh', 
                                                                width:'35vw', 
                                                                fontSize: '1.5vw'}} />
                    <p style={{fontFamily: "'Orbit', sans-serif", 
                            fontSize: '1.2vw'}}
                            >Forgot the password? <a href="#" style={{color: '#F8982F'}}> Click here.</a></p>
                </div>
                <button style={{backgroundColor:'#F8982F', 
                                color: '#0E2082', 
                                border: 'none', 
                                borderRadius:'30px', 
                                textAlign: 'center', 
                                height: '5vh', 
                                width:'10vw',
                                cursor: 'pointer'}}
                                >Log in</button>
            </div>
        </div>
    </div>
)
}

export default Login
