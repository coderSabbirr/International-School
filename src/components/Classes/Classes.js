import React, { useEffect, useState } from 'react';
import Classe from '../Classe/Classe';
import './Classes.css'

const Classes = () => {
    const[classes,setClasses]=useState([])
    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])

    return (
        <div className="classes">
        <h1 className="classes-bg">OUR CLASSES</h1>
        <div className=" all-classe mt-5 container">
        {
      classes.map(allClass=><Classe allClass={allClass} key={allClass.key} ></Classe>)
        }
        </div>
        </div>
    );
};

export default Classes;