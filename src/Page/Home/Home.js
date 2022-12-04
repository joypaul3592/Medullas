import React from 'react';
import About from '../../Components/Home/About/About';
import Course from '../../Components/Home/Course/Course';
import Faq from '../../Components/Home/Faq/Faq';
import MainHero from '../../Components/Home/MainHero/MainHero';
import PlanCard from '../../Components/Home/PlanCard/PlanCard';
import Team from '../../Components/Home/Team/Team';
import Testmonial from '../../Components/Home/Testmonial/Testmonial';
import Timeline from '../../Components/Home/Timeline/Timeline';
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