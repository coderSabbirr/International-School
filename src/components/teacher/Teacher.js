import React from 'react'
import './Teacher.css'
const Teacher = (props) => {
    const{name,title,img}=props.teacher;
    return (
        <div className="all-thr">
            <div className="teacher-card">
                <img src={img} alt="" />
                <p className="thr-name">{name}</p>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Teacher;