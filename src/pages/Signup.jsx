import React from 'react'
import logo from '../assets/Group 1.svg';
import bg from '../assets/Group 25.png';
const Signup = () => {
return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '125vh',
        width: '100%',
        backgroundColor: '#DFE0DF',
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <img src={logo} alt="ddsd" style={{height:'20vh',width:'30vw',}}/>
        <p style={{fontFamily: "'Orbit', sans-serif", fontSize: '1.5vw', color: '#0E2082', textAlign: 'center'}}>Get a 1 month free access to <br />Premium features today.</p>
        <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '70vh', width: '30vw'}}> 
            <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'right', height: '60vh'}}>
                <p style={{fontFamily: "'Orbit', sans-serif", fontSize: '1.5vw', color: '#7680B0'}}>Username  *</p>
                <input type="text" placeholder='' style={{backgroundColor:'#0E2082', color: 'white', border: 'none', borderRadius:'30px', textAlign: 'left',  height: '7vh', width:'35vw', fontSize: '1.5vw', paddingLeft: '7%'}} />
                <p style={{fontFamily: "'Orbit', sans-serif", fontSize: '1.5vw', color: '#7680B0'}}>Email  *</p>
                <input type="text" placeholder='' style={{backgroundColor:'#0E2082', color: 'white', border: 'none', borderRadius:'30px', textAlign: 'left',  height: '7vh', width:'35vw', fontSize: '1.5vw', paddingLeft: '7%'}} />
                <p style={{fontFamily: "'Orbit', sans-serif", fontSize: '1.5vw', color: '#7680B0'}}>Password  *</p>
                <input type="text" placeholder='' style={{backgroundColor:'#0E2082', color: 'white', border: 'none', borderRadius:'30px', textAlign: 'left',  height: '7vh', width:'35vw', fontSize: '1.5vw', paddingLeft: '7%'}} />
                <p style={{fontFamily: "'Orbit', sans-serif", fontSize: '1.5vw', color: '#7680B0'}}>Confirm Password  *</p>
                <input type="text" placeholder='' style={{backgroundColor:'#0E2082', color: 'white', border: 'none', borderRadius:'30px', textAlign: 'left',  height: '7vh', width:'35vw', fontSize: '1.5vw', paddingLeft: '7%'}} />
            </div>
            <button href="#" style={{backgroundColor:'#F8982F', color: '#0E2082', border: 'none', borderRadius:'30px', textAlign: 'center', height: '6.5vh', width:'12vw',cursor: 'pointer', fontSize: '1.5vw', fontFamily: "'Orbit', sans-serif"}}>Sign up</button>
        </div>
        <p style={{transform: 'translateY(10vh)', fontFamily: "'Orbit', sans-serif", fontSize: '1.2vw'}}>Already have an account? <a href="#" style={{color: '#F8982F'}}> Log in.</a></p>
    </div>
)
}

export default Signup
