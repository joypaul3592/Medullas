import React from 'react';
import heroimg from '../../Assect/hero3.png'
import style1 from '../../Assect/style1.png'
import style4 from '../../Assect/style4.png'
import { MdOutlineAppRegistration, MdOutlineLiveTv } from "react-icons/md";
const Hero = () => {
    return (
        <div className='relative bg-gradient-to-r from-pink-50 to-sky-100 z-0'>
            <div className=' relative max-w-7xl mx-auto flex items-center pt-20 pb-40 px-5 justify-between'>
                <div className=' text-left w-[50%] pr-10'>
                    <h4 className='  text-sm font-medium text-purple-600 ml-1'>Learn New Thinks Daily</h4>
                    <h1 className=' font-bold text-6xl  leading-[4.5rem] '>Education Is A Path To Success In Life</h1>
                    <p className='text-lg  my-5 text-justify'>Sed eu volutpat arcu, a tincidunt nulla quam, feugiat sit amet ipsum a, dapibus porta velit.
                        Sed eu volutpat arcu, a tincidunt nulla quam, feugiat sit amet ipsum a, dapibus porta velit.</p>
                    <button className=' py-2 px-7 bg-purple-600 text-white rounded-full' >Register Now</button>
                </div>
                <div className=' relative flex items-end justify-end'>
                    <div className=' border-2 border-purple-600 h-[30rem] w-[30rem] rounded-full overflow-hidden'>
                        <img className=' mt-[14px]' src={heroimg} alt="heroimg" />
                    </div>
                    <div className=' bg-purple-700 bg-opacity-10 backdrop-blur-sm rounded-xl p-3 px-12 absolute top-0 -left-20'>
                        <MdOutlineAppRegistration className=' mx-auto text-3xl text-purple-600' />
                        <h1 className=' text-2xl font-bold text-gray-600'>20 <span className=' text-purple-700'>+</span></h1>
                        <p>Quiz Module</p>
                    </div>
                    <div className=' bg-purple-700 bg-opacity-10 backdrop-blur-sm rounded-xl p-3 px-12 absolute bottom-0 -left-10'>
                        <h1 className=' text-2xl font-bold text-gray-600'>24 <span className=' text-purple-700 font-normal text-xs'>hr</span></h1>
                        <p>Support Setup</p>
                    </div>
                    <div className=' bg-purple-700 bg-opacity-10 backdrop-blur-sm rounded-xl p-3 px-12 absolute top-0 -right-20'>
                        <div className=' text-2xl font-bold text-gray-600 mx-auto'><MdOutlineLiveTv className=' mx-auto text-purple-600' /> </div>
                        <p>Live Class</p>
                    </div>
                </div>
                <div className=' absolute top-4 -left-24 opacity-40'>
                    <img className=' h-40 ' src={style1} alt="style1" />
                </div>
            </div>
            <div className=' absolute bottom-32 left-[47%] opacity-40'>
                <img className=' h-20 ' src={style4} alt="style4" />
            </div>
        </div>
    );
};

export default Hero;