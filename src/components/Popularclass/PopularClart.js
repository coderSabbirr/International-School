import React, { useEffect, useState } from 'react';
import Popular from '../popular/Popular';
import './PopularClart.css'

const PopularClart = () => {
    const[popularCarts,setPopularCarts]= useState([])
    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setPopularCarts(data))
    },[])
    return (
        <div className="backgound-img">
            <h1 className="popular-class">Our Popular Classes</h1>
            <div class="d-flex justify-content-center mt-5">
            {
                popularCarts.slice(0,3).map(popularCart => <Popular
                key={popularCart.key}
                    popularCart={popularCart}
                ></Popular>)
            }
            </div>
            
        </div>
    );
};

export default PopularClart;