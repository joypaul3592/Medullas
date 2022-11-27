import React from 'react';
import Hero from '../Hero/Hero';
import Upcomming from '../Upcomming/Upcomming';

const MainHero = () => {
    return (
        <div className=' relative'>
            <Hero />
            <div className=' absolute -bottom-[22rem]  w-screen mx-auto left-0'>
                <Upcomming />
            </div>
        </div>
    );
};

export default MainHero;