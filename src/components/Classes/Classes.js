import React, { useContext } from 'react';
import { MainContext } from '../../App';
import Classe from '../Classe/Classe';


import './Classes.css'
const Classes = () => {
    const  mainCarts = useContext(MainContext);

    return (
        <div className="classes">
        <h1 className="classes-bg">OUR CLASSES</h1>
        <div className=" all-classe mt-5 container">
        {
      mainCarts.map(allClass=><Classe allClass={allClass} key={allClass.key} ></Classe>)
        }
        </div>
        </div>
    );
};

export default Classes;