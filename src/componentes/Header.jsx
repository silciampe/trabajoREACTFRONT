import React from 'react';
import Logo from '../img/logo.png';
import './css/Header.css'

function Header() {
  return (
    <div>
        <img src={Logo} alt="logo" className='logo' />

    </div>
  )
}

export default Header;