import React from 'react';
import aboutimg from '../../Assect/about.png'
import { BsRecordCircle, BsTelephoneFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate()
    return (
        <div className=' mt-[400px] py-10 '>
            <div className=' max-w-7xl mx-auto   flex items-center px-5'>
                <div className=' w-[45%]'>
                    <div className='w-[30rem] h-[30rem] bg-green-300 rounded-full overflow-hidden bg-opacity-25'>
                        <img className=' w-[30rem]' src={aboutimg} alt="aboutimg" />
                    </div>
                </div>
                <div className=' w-[52%] pr-2 py-5'>
                    <h4 className=' font-medium text-purple-600'>About us</h4>
                    <h1 className=' text-5xl font-bold mb-3 leading-[60px] w-10/12'>Creating A Community Of Life Long Learners</h1>
                    <p className=' text-gray-600 mb-8 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
                    <div className=' grid grid-cols-2 mb-8 gap-5'>
                        <div className=' flex items-center gap-3 bg-white py-4 p-2 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-purple-600' />
                            <h1 className=' text-lg font-medium'>Flexible training programs</h1>
                        </div>
                        <div className=' flex items-center gap-3 bg-white py-4 p-2 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-purple-600' />
                            <h1 className=' text-lg font-medium'>Flexible training programs</h1>
                        </div>
                        <div className=' flex items-center gap-3 bg-white py-4 p-2 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-purple-600' />
                            <h1 className=' text-lg font-medium'>Flexible training programs</h1>
                        </div>
                        <div className=' flex items-center gap-3 bg-white py-4 p-2 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-purple-600' />
                            <h1 className=' text-lg font-medium'>Flexible training programs</h1>
                        </div>
                    </div>
                    <div className=' flex items-center gap-12'>
                        <button onClick={() => navigate('/contact')} className=' py-2 px-8 bg-purple-600 text-white rounded-lg'>Contact Us</button>
                        <div className=' flex items-center gap-3'>
                            <div className=' h-10 w-10 rounded-full flex items-center justify-center bg-purple-100'>
                                <BsTelephoneFill />
                            </div>
                            <h1>+8801732023548</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;