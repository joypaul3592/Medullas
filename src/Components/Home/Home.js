import React from 'react';
import About from '../About/About';
import Course from '../Course/Course';
import Faq from '../Faq/Faq';
import MainHero from '../MainHero/MainHero';
import PlanCard from '../PlanCard/PlanCard';
import Team from '../Team/Team';
import Testmonial from '../Testmonial/Testmonial';
import Timeline from '../Timeline/Timeline';
const Home = () => {
    return (
        <div>
            <MainHero />
            <About />
            <Course />
            <Timeline />
            <Faq />
            <Testmonial />
            <Team />
            <PlanCard />
        </div>
    );
};

export default Home;