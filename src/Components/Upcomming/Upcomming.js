import React from 'react';
import { BsCalendar2Week, BsCalendar2Range } from "react-icons/bs";
const Upcomming = () => {
    return (
        <div className=' max-w-5xl py-10 pb-10 mt-[-15px]  rounded-3xl mx-auto bg-white shadow-lg p-10 px-10'>
            <h1 className=' text-3xl text-center font-bold mb-10 '>পরবর্তী ব্যাচের সময় সূচি</h1>

            <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-7'>
                <div className=' bg-purple-100 shadow-md py-6 px-3 rounded-xl hover:bg-purple-600 box hover:text-white transition-all duration-300 ease-in-out cursor-pointer  ' >
                    <div className=' h-10 w-10 rounded-lg bg-purple-200 flex items-center justify-center mb-3 mx-auto'>
                        <BsCalendar2Range className=' text-black' />
                    </div>
                    <div className=' font-mono font-medium text-center'> <span className=' text-purple-600 '>এনরোলমেন্ট শুরু</span> <hr /> <h1 className=' mt-2'>ডিসেম্বর ১০, ২০২২ (শনিবার)</h1></div>
                </div>

                <div className=' bg-purple-100 shadow-md py-6 px-3 rounded-xl hover:bg-purple-600 box hover:text-white transition-all duration-300 ease-in-out cursor-pointer' >
                    <div className=' h-10 w-10 rounded-lg bg-purple-200 flex items-center justify-center mb-3 mx-auto'>
                        <BsCalendar2Range className=' text-black' />
                    </div>
                    <div className=' font-mono font-medium text-center'> <span className=' text-purple-600'>এনরোলমেন্ট শুরু</span> <hr /> <h1 className=' mt-2'>ডিসেম্বর ১০, ২০২২ (শনিবার)</h1></div>
                </div>

                <div className=' bg-purple-100 shadow-md py-6 px-3 rounded-xl  hover:bg-purple-600 box hover:text-white transition-all duration-300 ease-in-out cursor-pointer' >
                    <div className=' h-10 w-10 rounded-lg bg-purple-200 flex items-center justify-center mb-3 mx-auto'>
                        <BsCalendar2Range className=' text-black' />
                    </div>
                    <div className=' font-mono font-medium text-center'> <span className=' text-purple-600'>এনরোলমেন্ট শুরু</span> <hr /> <h1 className=' mt-2'>ডিসেম্বর ১০, ২০২২ (শনিবার)</h1></div>
                </div>

                <div className=' bg-purple-100 shadow-md py-6 px-3 rounded-xl  hover:bg-purple-600 box hover:text-white transition-all duration-300 ease-in-out cursor-pointer' >
                    <div className=' h-10 w-10 rounded-lg bg-purple-200 flex items-center justify-center mb-3 mx-auto'>
                        <BsCalendar2Range className=' text-black' />
                    </div>
                    <div className=' font-mono font-medium text-center'> <span className=' text-purple-600'>এনরোলমেন্ট শুরু</span> <hr /> <h1 className=' mt-2'>ডিসেম্বর ১০, ২০২২ (শনিবার)</h1></div>
                </div>

            </div>

            <div >
                <button className=' mt-8 w-full py-2 bg-purple-600 text-white rounded-lg border border-purple-600 hover:bg-transparent hover:text-purple-600 transition-all duration-200 ease-in-out' >নিবন্ধন করুন</button>
            </div>

        </div>
    );
};

export default Upcomming;