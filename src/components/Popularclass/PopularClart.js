import React, {  useContext} from 'react';
import { MainContext } from '../../App';
import Popular from '../popular/Popular';
import './PopularClart.css'



const PopularClart = () => {
    const  mainCarts = useContext(MainContext);
   
    return (
            <div className="backgound-img">
            <h1 className="popular-class">Our Popular Classes</h1>
            <div className="d-flex justify-content-center mt-5">
            {
              
              mainCarts.slice(0,4).map(popularCart => <Popular
                key={popularCart.key}
                    popularCart={popularCart}
                    
                ></Popular>)
            }
            </div>
            
        </div>
        
       
    );
};

export default PopularClart;