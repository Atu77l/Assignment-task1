import React from 'react'
import './Navbar.css';
import image from './img11.png';
function Navbar() {
  return (
    <div className="navbar">
    <img className="img"  src={image}></img>
    <div className="nav1">DAO KING</div>   
    <div className="button1">WEBSITE</div>
    <div className="button2">CONNECT</div>
    </div>
  )
}

export default Navbar