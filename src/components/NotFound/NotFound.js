import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
             <div className="no-found">
            <h1 className="no-found404" >404</h1>
            <h3>The page you’re looking for doesn’t exist :(</h3>
            <NavLink to="/home"><button className="back-home-btn">Go To Home</button></NavLink>
        </div>
          <div className="apply-sec">
            <span className="apply-sec-content">Prepare Your Application Letter for Admission</span>
            <button className="apply-sec-btn">Apply</button>
            </div>
        </div>
       
    );
};

export default NotFound;