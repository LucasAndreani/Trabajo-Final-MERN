import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className='left-section-header'>
          <p className='black-market'>Pokémon Black Market.</p>
          <img className='mew-logo' src='https://dinopixel.com/preload/0422/Mew-Pokemon-.png'></img>
        </div>
        <div className='middle-section-header'>
          <NavLink to=''>
          <img className='house-icon' src='src/images/house-fill.svg'></img>
          <p className='home'>Home</p>
          </NavLink>
        </div>
        <div className='right-section-header'>
        <NavLink to='/Registration'>
  <svg className='door-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
  </svg>
</NavLink>
          <p className='contact-word'>Register</p>
        </div>
       {/*  <NavLink to='/LogIn'><p>Log In</p></NavLink> */}
      </header>
  )
}

export default Header