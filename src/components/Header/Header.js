import React from 'react';
import logo from '../../Image/logo1.png'
import './Header.css'

const Header = () => {
    return (
<div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
    
         <a className="navbar-brand" href="/">
              <img className="logo" src={logo} alt="" width="298" height="72"/>
          </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className=" nav-iteam nav-home" href="/">HOME</a>
        <a className=" nav-iteam"  href="/">ABOUT</a>
        <a className=" nav-iteam" href="/ourclasses">OUR CLASSES </a>
        <a className=" nav-iteam" href="/">TEACHERS</a>
        <a className=" nav-iteam" href="/">BLOGS</a>
        
       </div>
     </div>
   </div>
  </nav>
</div>
    );
};

export default Header;