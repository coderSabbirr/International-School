import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content d-flex justify-content-center">
             <div className="singal-content">
                 <h3>Contacts</h3>
                 <p>Brooklyn, NY 10036, 16-2 United States</p>
                 <p>info@demolink.org</p>
                 <p>Call Us: 1-800-123-1234</p>
             </div>
             <div className="singal-content" >
                 <h3>Socials</h3>
                 <p><a href="..">Facebook</a></p>
                 <p><a href="..">Pinterest</a></p>
                 <p><a href="..">LinkedIn</a></p>
                 <p><a href="..">Instagram</a></p>
                 <p><a href="..">YouTube</a></p>
             </div>
             <div className="singal-content">
             <h3>About Us</h3> 
             <p><a href="..">Our Mission</a></p>
                 <p><a href="..">Graduate Admission</a></p>
                 <p><a href="..">Our Values</a></p>
                 <p><a href="..">Degree Programs</a></p>
                 <p><a href="..">Blogs</a></p>
             </div>
           
            </div>
        </div>
    );
};

export default Footer;