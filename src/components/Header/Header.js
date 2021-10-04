import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Image/logo1.png'
import './Header.css'


const Header = () => {
    return (
<div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
    
         <NavLink className="navbar-brand" to="/home">
              <img className="logo" src={logo} alt="" width="298" height="72"/>
          </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className=" nav-iteam nav-home"to="/home">HOME</NavLink>
        <NavLink className=" nav-iteam" to="/about">ABOUT</NavLink>
        <NavLink className=" nav-iteam" to="/classes">OUR CLASSES </NavLink>
        <NavLink className=" nav-iteam" to="/teachers">TEACHERS</NavLink>
        <NavLink className=" nav-iteam" to="/blogs">BLOGS</NavLink>
     
        
       </div>
     </div>
   </div>
  </nav>
</div>
    );
};

export default Header;