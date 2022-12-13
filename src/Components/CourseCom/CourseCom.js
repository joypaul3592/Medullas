import React from 'react';
import CourseBanarImg from '../../Assect/courseBannar.png'
import CourseBanarImg2 from '../../Assect/courseBannar2.png'
import CourseBanarImg3 from '../../Assect/courseBannar3.png'
import CourseBanarImg4 from '../../Assect/courseBannar4.png'
import CourseBanarImg5 from '../../Assect/courseBannar5.png'
import { SiSitepoint } from "react-icons/si";
import { TbCurrencyTaka } from "react-icons/tb";
import CourseImg from '../../Assect/Course1.png'
import { useNavigate } from 'react-router-dom';

const CourseCom = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className=' h-60 w-screen bg-gradient-to-r from-pink-50 to-sky-100'>
                <div className=' max-w-7xl mx-auto  h-full flex items-center justify-between'>
                    <div></div>
                    <h1 className=' text-5xl font-bold ml-40 text-purple-600'>#কোর্স </h1>
                    <img className=' h-full' src={CourseImg} alt="CourseImg" />
                </div>
            </div>
            <div className=' max-w-7xl mx-auto px-5 my-10'>

                <div>
                    <p className=' font-bold text-purple-600 '>#কোর্স</p>
                    <h1 className=' text-3xl font-bold text-gray-800'>আমাদের কোর্স সমূহঃ</h1>
                </div>
                <div className='max-w-5xl mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-col-1 gap-10 mt-10'>

                    <div className=' bg-white border hover:border-purple-600 hover:scale-[1.02] hover:shadow-xl transition-all duration-200 ease-in-out border-gray-500 pb-3 rounded-lg'>
                        <img className=' rounded-t-lg w-full' src={CourseBanarImg} alt="CourseBanarImg" />
                        <div className=' mt-3 px-2 flex items-center gap-2 text-purple-600'>
                            <SiSitepoint className=' text-xl -mt-1' />
                            <h1 className=' text-lg font-bold text-gray-700'>বিএসসি ইন নার্সিং ভর্তি প্রস্তুতি</h1>
                        </div>
                        <div className=' text-lg flex items-center px-2 mt-2' >
                            <TbCurrencyTaka className=' text-2xl text-green-700 font-bold -mt-1' />
                            <h1 className=' font-bold text-green-700'>১৫,০০০</h1>
                        </div>
                        <div className=' flex items-center justify-center w-full pt-2 pb-1'>
                            <button onClick={() => navigate('/bsccourse')} className=' py-1 pb-0.5 px-4 border border-purple-600 text-sm hover:text-white hover:bg-purple-600 rounded font-bold transition-all duration-200 ease-in-out'>কোর্স বিবরণী</button>
                        </div>

                    </div>

                    <div className=' bg-white border hover:border-purple-600 transition-all hover:scale-[1.02] hover:shadow-xl duration-200 ease-in-out border-gray-500 pb-3 rounded-lg'>
                        <img className=' rounded-t-lg w-full' src={CourseBanarImg2} alt="CourseBanarImg" />
                        <div className=' mt-3 px-2 flex items-center gap-2 text-purple-600'>
                            <SiSitepoint className=' text-xl -mt-1' />
                            <h1 className=' text-lg font-bold text-gray-700'>ডিপ্লোমা ইন নার্সিং</h1>
                        </div>
                        <div className=' text-lg flex items-center px-2 mt-2' >
                            <TbCurrencyTaka className=' text-2xl text-green-700 font-bold -mt-1' />
                            <h1 className=' font-bold text-green-700'>১৩,৫০০</h1>
                        </div>
                        <div className=' flex items-center justify-center w-full pt-2 pb-1'>
                            <button onClick={() => navigate('/diplomacourse')} className=' py-1 pb-0.5 px-4 border border-purple-600 text-sm hover:text-white hover:bg-purple-600 rounded font-bold transition-all duration-200 ease-in-out'>কোর্স বিবরণী</button>
                        </div>
                    </div>


                    <div className=' bg-white border hover:border-purple-600 transition-all hover:scale-[1.02] hover:shadow-xl duration-200 ease-in-out border-gray-500 pb-3 rounded-lg'>
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


                    <div className=' bg-white border hover:border-purple-600 transition-all hover:scale-[1.02] hover:shadow-xl duration-200 ease-in-out border-gray-500 pb-3 rounded-lg'>
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


                    <div className=' bg-white border hover:border-purple-600 transition-all hover:scale-[1.02] hover:shadow-xl duration-200 ease-in-out border-gray-500 pb-3 rounded-lg'>
                        <img className=' rounded-t-lg w-full' src={CourseBanarImg5} alt="CourseBanarImg" />
                        <div className=' mt-3 px-2 flex items-center gap-2 text-purple-600'>
                            <SiSitepoint className=' text-xl -mt-1' />
                            <h1 className=' text-lg font-bold text-gray-700'>নার্সিং ভর্তি প্রস্তুতি</h1>
                        </div>
                        <div className=' text-lg flex items-center px-2 mt-2' >
                            <TbCurrencyTaka className=' text-2xl text-green-700 font-bold -mt-1' />
                            <h1 className=' font-bold text-green-700'>৪,৫০০ / ৪,০০০ / ২,০০০</h1>
                        </div>
                        <div className=' flex items-center justify-center w-full pt-2 pb-1'>
                            <button onClick={() => navigate('/examcourse')} className=' py-1 pb-0.5 px-4 border border-purple-600 text-sm hover:text-white hover:bg-purple-600 rounded font-bold transition-all duration-200 ease-in-out'>কোর্স বিবরণী</button>
                        </div>
                    </div>

                </div>

                <div className=' my-10 '>
                    <nav className='mx-auto text-center' aria-label="Page navigation">
                        <ul class="inline-flex space-x-2">
                            <li><button class="flex items-center justify-center w-10 h-10 text-purple-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-purple-100">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                            </li>
                            <li><button class="w-10 h-10 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-full focus:shadow-outline">1</button></li>
                            <li><button class="w-10 h-10 text-purple-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-purple-100">2</button></li>
                            <li><button class="w-10 h-10 text-purple-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-purple-100">3</button></li>
                            <li><button class="flex items-center justify-center w-10 h-10 text-purple-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-purple-100">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default CourseCom;