import React from 'react';
import OnlineLearning from '../Online/OnlineLearning';
import PopularClart from '../Popularclass/PopularClart';
import Section4 from '../sec4/Section4';



import Slider from '../Silder/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
           <OnlineLearning></OnlineLearning>
           <PopularClart></PopularClart>
           <Section4></Section4>
        </div>
    );
};

export default Home;