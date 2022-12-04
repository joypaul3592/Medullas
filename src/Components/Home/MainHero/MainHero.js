import React from 'react';
import Hero from './Hero/Hero';
import Upcomming from '../../Upcomming/Upcomming';

const MainHero = () => {
    return (
        <div className=' relative'>
            <Hero />
            <div className=' absolute lg:-bottom-[22rem] md:-bottom-[30rem] -bottom-[55rem]   w-screen mx-auto left-0 px-5'>
                <Upcomming />
            </div>
        </div>
    );
};

export default MainHero;