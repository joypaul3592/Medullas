import React from 'react';
import { BsRecordCircleFill } from "react-icons/bs";
const CarosuleItem = ({ imgLink }) => {
    return (
        <div className='h-full  py-10'>
            <div className=' relative w-10/12 flex flex-col h-[28rem] mx-auto  bg-purple-100 shadow-lg rounded-3xl overflow-hidden hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out box'>
                <div className='h-[55%]   p-4'>
                    <img className=' h-full mx-auto' src={imgLink} alt="ceimg" />
                </div>
                <div className=' px-5 h-[45%]  mt-4'>
                    <div className=' text-sm flex items-center gap-3'>
                        <BsRecordCircleFill className=' text-green-500' />
                        <h3 className=' font-medium'>Course</h3>
                    </div>
                    <h1 className=' my-2 text-2xl font-semibold' >B.S.C in Nursing</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt impedit</p>
                    <div className=' w-full text-center'>
                        <button className=' mt-4 py-2 bg-purple-600 px-5 text-white rounded-lg text-sm font-medium'>Enrole now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarosuleItem;