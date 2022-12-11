import React from 'react';
import CourseBanarImg from '../../../Assect/courseBannar.png'
import CourseBanarImg2 from '../../../Assect/courseBannar2.png'
import CourseBanarImg3 from '../../../Assect/courseBannar3.png'
import CourseBanarImg4 from '../../../Assect/courseBannar4.png'
import { SiSitepoint } from "react-icons/si";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';


const Course = () => {
    const navigate = useNavigate()
    return (
        <div className=' max-w-7xl mx-auto px-5'>
            <div>
                <p className=' font-bold text-purple-600'>#কোর্স</p>
                <h1 className=' text-3xl font-bold text-gray-800'>আমাদের কোর্স সমূহঃ</h1>
            </div>
            <div className=' grid xl:grid-cols-4 md:grid-cols-2 grid-col-1 gap-10 mt-10'>
                <div className=' bg-white border hover:border-purple-600 transition-all duration-200 ease-in-out border-gray-500 pb-3 rounded-lg'>
                    <img className=' rounded-t-lg w-full' src={CourseBanarImg} alt="CourseBanarImg" />
                    <div className=' mt-3 px-2 flex items-center gap-2 text-purple-600'>
                        <SiSitepoint className=' text-xl -mt-1' />
                        <h1 className=' text-lg font-bold text-gray-700'>বিএসসি ইন নার্সিং ভর্তি প্রস্তুতি</h1>
                    </div>
                    <div className=' text-lg flex items-center px-2 mt-2' >
                        <TbCurrencyTaka className=' text-2xl text-green-700 font-bold -mt-1' />
                        <h1 className=' font-bold text-green-700'>১২,০০০</h1>
                    </div>
                    <div className=' flex items-center justify-center w-full pt-2 pb-1'>
                        <button onClick={() => navigate('/bsccourse')} className=' py-1 pb-0.5 px-4 border border-purple-600 text-sm hover:text-white hover:bg-purple-600 rounded font-bold transition-all duration-200 ease-in-out'>কোর্স বিবরণী</button>
                    </div>
                </div>

                <div className=' bg-white border hover:border-purple-600 transition-all duration-200 ease-in-out border-gray-500 pb-3 rounded-lg'>
                    <img className=' rounded-t-lg w-full' src={CourseBanarImg2} alt="CourseBanarImg" />
                    <div className=' mt-3 px-2 flex items-center gap-2 text-purple-600'>
                        <SiSitepoint className=' text-xl -mt-1' />
                        <h1 className=' text-lg font-bold text-gray-700'>ডিপ্লোমা ইন নার্সিং</h1>
                    </div>
                    <div className=' text-lg flex items-center px-2 mt-2' >
                        <TbCurrencyTaka className=' text-2xl text-green-700 font-bold -mt-1' />
                        <h1 className=' font-bold text-green-700'>১২,৫০০</h1>
                    </div>
                    <div className=' flex items-center justify-center w-full pt-2 pb-1'>
                        <button onClick={() => navigate('/diplomacourse')} className=' py-1 pb-0.5 px-4 border border-purple-600 text-sm hover:text-white hover:bg-purple-600 rounded font-bold transition-all duration-200 ease-in-out'>কোর্স বিবরণী</button>
                    </div>
                </div>


                <div className=' bg-white border hover:border-purple-600 transition-all duration-200 ease-in-out border-gray-500 pb-3 rounded-lg'>
                    <img className=' rounded-t-lg w-full' src={CourseBanarImg3} alt="CourseBanarImg" />
                    <div className=' mt-3 px-2 flex items-center gap-2 text-purple-600'>
                        <SiSitepoint className=' text-xl -mt-1' />
                        <h1 className=' text-lg font-bold text-gray-700'>ডিপ্লোমা ইন মিডওয়াইফারী </h1>
                    </div>
                    <div className=' text-lg flex items-center px-2 mt-2' >
                        <TbCurrencyTaka className=' text-2xl text-green-700 font-bold -mt-1' />
                        <h1 className=' font-bold text-green-700'>১৩,৫০০</h1>
                    </div>
                    <div className=' flex items-center justify-center w-full pt-2 pb-1'>
                        <button onClick={() => navigate('/midwifcourse')} className=' py-1 pb-0.5 px-4 border border-purple-600 text-sm hover:text-white hover:bg-purple-600 rounded font-bold transition-all duration-200 ease-in-out'>কোর্স বিবরণী</button>
                    </div>
                </div>


                <div className=' bg-white border hover:border-purple-600 transition-all duration-200 ease-in-out border-gray-500 pb-3 rounded-lg'>
                    <img className=' rounded-t-lg w-full' src={CourseBanarImg4} alt="CourseBanarImg" />
                    <div className=' mt-3 px-2 flex items-center gap-2 text-purple-600'>
                        <SiSitepoint className=' text-xl -mt-1' />
                        <h1 className=' text-lg font-bold text-gray-700'>নার্সিং নিয়োগ প্রস্তুতি</h1>
                    </div>
                    <div className=' text-lg flex items-center px-2 mt-2' >
                        <TbCurrencyTaka className=' text-2xl text-green-700 font-bold -mt-1' />
                        <h1 className=' font-bold text-green-700'>১৫,০০০</h1>
                    </div>
                    <div className=' flex items-center justify-center w-full pt-2 pb-1'>
                        <button onClick={() => navigate('/niyogcourse')} className=' py-1 pb-0.5 px-4 border border-purple-600 text-sm hover:text-white hover:bg-purple-600 rounded font-bold transition-all duration-200 ease-in-out'>কোর্স বিবরণী</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Course;