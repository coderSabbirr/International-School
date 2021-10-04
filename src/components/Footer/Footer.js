import React from 'react';
import './Footer.css'
import logo from "../../Image/logo1.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content d-flex justify-content-center row">
            <div className="singal-content col-md-4">
                 <img src ={logo} alt="#"/>
                 <p>n international school is a school that promotes international education, in an international environment, either by adopting a curriculum such as that of the International Baccalaureate, Edexcel, Cambridge Assessment International Education or the International Primary Curriculum, or by following a national</p>
             </div>
             <div className="singal-content col-md-2">
                 <h3>Get in Touch</h3>
                 <p>Brooklyn, NY 10036, 16-2 United States</p>
                 <p>info@demolink.org</p>
                 <p>Call Us: 1-800-123-1234</p>
             </div>
             <div className="singal-content col-md-2" >
                 <h3>Socials</h3>
                 <p><a href="..">Facebook</a></p>
                 <p><a href="..">Pinterest</a></p>
                 <p><a href="..">LinkedIn</a></p>
                 <p><a href="..">Instagram</a></p>
                 <p><a href="..">YouTube</a></p>
             </div>
             <div className="singal-content col-md-2">
             <h3>About Us</h3> 
             <p><a href="..">Our Mission</a></p>
                 <p><a href="..">Graduate Admission</a></p>
                 <p><a href="..">Our Values</a></p>
                 <p><a href="..">Degree Programs</a></p>
                 <p><a href="..">Blogs</a></p>
             </div>
            
            </div>
            <p className="copyright">Copyright © International School System 2020. All Rights Reserved</p>
        </div>
    );
};

export default Footer;