import React from 'react';
import "./Popular.css"

const Popular = (props) => {
    const{title,dec,students,fee,img}=props.popularCart;
    return (
        <div>
<div className="col full-card ">
 <div className="class-card ">
      <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{dec}</p>
      </div>
      <div className="d-flex">
        <div className="student">
            <p>Students: {students}</p>
        </div>
        <div className="fee">
            <p>Fee: {fee}</p>
        </div>
       </div>
   </div>
 </div>
</div>

    );
};

export default Popular;