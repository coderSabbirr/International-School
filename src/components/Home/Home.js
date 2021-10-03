import React from 'react';
import OnlineLearning from '../Online/OnlineLearning';
import PopularClart from '../Popularclass/PopularClart';



import Slider from '../Silder/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
           <OnlineLearning></OnlineLearning>
           <PopularClart></PopularClart>
        </div>
    );
};

export default Home;