import React from 'react';
import { HiOutlineArrowDownOnSquareStack } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import { MdShareLocation } from "react-icons/md";
import bkimg from '../../Assect/bk.png'
import bk2img from '../../Assect/bk2.png'
const Timeline = () => {
    return (
        <div className=' max-w-7xl mx-auto px-5 py-10  mt-10'>

            <div >
                <h4 className=' font-medium text-purple-600'>Facility</h4>
                <h1 className=' text-3xl font-bold mb-10'>Featured Facility</h1>
            </div>






            <div className='  grid grid-cols-4 gap-10' >

                <div className=' bg-green-100 hover:bg-purple-100 bx cursor-pointer p-7 shadow-lg rounded-xl'>
                    <div className=' h-16 rounded-full w-16 bg-green-300 bf flex items-center justify-center text-4xl text-gray-800 mb-5 '>
                        <MdShareLocation />
                    </div>
                    <h1 className=' text-[18px] font-medium mb-2'>Expert Instruction</h1>
                    <p className=' text-gray-600 text-justify mb-7'>Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim.</p>
                    <button className=' flex items-center gap-3 text-purple-600 text-sm font-medium hover:gap-5 hover:text-green-600 transition-all duration-300 ease-in-out'> Learn More <BsArrowRight className=' mt-0.5' /></button>
                </div>

                <div className=' bg-sky-100 hover:bg-purple-100 bx cursor-pointer p-7 shadow-lg rounded-xl'>
                    <div className=' h-16 rounded-full w-16 bg-sky-200 bf flex items-center justify-center text-4xl text-gray-800 mb-5 '>
                        <MdShareLocation />
                    </div>
                    <h1 className=' text-[18px] font-medium mb-2'>Expert Instruction</h1>
                    <p className=' text-gray-600 text-justify mb-7'>Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim.</p>
                    <button className=' flex items-center gap-3 text-purple-600 text-sm font-medium hover:gap-5 hover:text-green-600 transition-all duration-300 ease-in-out'> Learn More <BsArrowRight className=' mt-0.5' /></button>
                </div>

                <div className=' bg-pink-100 hover:bg-purple-100 bx cursor-pointer p-7 shadow-lg rounded-xl'>
                    <div className=' h-16 rounded-full w-16 bg-pink-200 bf flex items-center justify-center text-4xl text-gray-800 mb-5 '>
                        <MdShareLocation />
                    </div>
                    <h1 className=' text-[18px] font-medium mb-2'>Expert Instruction</h1>
                    <p className=' text-gray-600 text-justify mb-7'>Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim.</p>
                    <button className=' flex items-center gap-3 text-purple-600 text-sm font-medium hover:gap-5 hover:text-green-600 transition-all duration-300 ease-in-out'> Learn More <BsArrowRight className=' mt-0.5' /></button>
                </div>

                <div className=' bg-orange-50 hover:bg-purple-100 bx cursor-pointer transition-all duration-300 ease-in-out p-7 shadow-lg rounded-xl'>
                    <div className=' h-16 rounded-full w-16 bg-orange-200 bf flex items-center justify-center text-4xl text-gray-800 mb-5 '>
                        <MdShareLocation />
                    </div>
                    <h1 className=' text-[18px] font-medium mb-2'>Expert Instruction</h1>
                    <p className=' text-gray-600 text-justify mb-7'>Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim.</p>
                    <button className=' flex items-center gap-3 text-purple-600 text-sm font-medium hover:gap-5 hover:text-green-600 transition-all duration-300 ease-in-out'> Learn More <BsArrowRight className=' mt-0.5' /></button>
                </div>



            </div>
        </div>
    );
};

export default Timeline;