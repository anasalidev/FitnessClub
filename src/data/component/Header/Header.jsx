import React from 'react'
import "./Header.css"
import logo from "../../../assets/logo.png"

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" className='logo' />

        <div className="navbar">
          <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Header

