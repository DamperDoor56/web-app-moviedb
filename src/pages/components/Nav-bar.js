import React, { useState, useEffect } from 'react'
import './Nav-bar.scss'

function Navbar() {
  const [show, setSnow] = useState(false);

  const colorOnScroll = () => {
    if (window.scrollY > 100){
      setSnow(true);
    } else{
      setSnow(false);
    }
  }
 useEffect(() => {
  window.addEventListener('scroll', colorOnScroll);
  return() => window.removeEventListener('scroll', colorOnScroll)
 }, []);
  return (
    <div className={`navbar ${show && 'scrolledNavbar'}`}>
        <div className='nav-contents'>
        <img className='navbar-logo' src='https://res.cloudinary.com/dweiaqd6l/image/upload/v1662250668/imagen_2022-09-03_210546579-removebg-preview_ddfswi.png' alt=''></img>
        <img className='navbar-profile-picture' src='https://res.cloudinary.com/dweiaqd6l/image/upload/v1662250682/c7906d33850498.56ba69ac353e1_zt1ywk.png' alt=''></img>
        </div>
    </div>
  )
}

export default Navbar;