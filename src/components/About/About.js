import React from 'react';
import './About.css'
import OnlineLearning from '../Online/OnlineLearning';

const About = () => {
    return (
        <div className="about">
           <h1 className="about-title">ABOUT US</h1>
           <OnlineLearning></OnlineLearning>
           <div className="gallay-bg ">
               <div className="d-flex container justify-content-center">
               <div className="heading">
                <h1>Photo Gallery</h1>
               <button className="enroll-btn">VIEW ALL GALLERY</button>
               </div>
               <div className="gallar-img">
                   <div className="">
                   <img src="http://entiretimes.com/html/school/images/gallery-1.jpg" alt=".."/> 
                   </div>
                   <div>
                   <img src="http://entiretimes.com/html/school/images/gallery-2.jpg" alt=".."/> 
                   </div>
                   <div>
                   <img src="http://entiretimes.com/html/school/images/gallery-3.jpg" alt=".."/> 
                   </div>
                   <div>
                   <img src="http://entiretimes.com/html/school/images/gallery-4.jpg" alt=".."/> 
                   </div>
                   <div>
                   <img src="http://entiretimes.com/html/school/images/gallery-5.jpg" alt=".."/> 
                   </div>
                   <div>
                   <img src="http://entiretimes.com/html/school/images/gallery-6.jpg" alt=".."/> 
                   </div>
               </div>
               </div>
           </div>
           <div className="call-now ">
               <div className="container">
               <h1>Call To Enroll Your Child</h1>
               <p>How you manage your child’s enrollment depends on when you join the district.</p>
               <h3>CALL: <span className="call">(770) 132 4657</span></h3>
               </div>
           </div>
        </div>
    );
};

export default About;