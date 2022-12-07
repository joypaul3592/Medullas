import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { RiUser2Fill } from "react-icons/ri";
import { BsCalendar2Week, BsFileEarmarkRichtext } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";

const Timeline = () => {
    return (
        <div className=' max-w-7xl mx-auto px-5 py-10  mt-10'>
            <div >
                <h4 className=' text-purple-600 font-bold'>#সুযোগ</h4>
                <h1 className=' text-3xl text-gray-800 font-bold mb-10'>কোর্সের সুযোগ-সুবিধা:</h1>
            </div>

            <div className='   grid xl:grid-cols-4 md:grid-cols-2 grid-col-1 gap-10 mt-10' >

                <div className=' bg-green-100 hover:bg-purple-100 bx cursor-pointer p-7 shadow-lg rounded-xl'>
                    <div className=' h-16 rounded-full w-16 bg-green-300 bf flex items-center justify-center text-4xl text-gray-800 mb-5 '>
                        <RiUser2Fill />
                    </div>
                    <h1 className=' text-[18px] font-medium mb-2'>অভিজ্ঞ শিক্ষকমন্ডলী</h1>
                    <p className=' text-gray-600 text-justify mb-7'>শিক্ষার্থীদের জন্য যেখানে রয়েছে অভিজ্ঞ শিক্ষকমন্ডলীর ক্লাস, লেকচার শিট সহ অনন্য সেবাসমূহ।</p>
                    <button className=' flex items-center gap-3 text-purple-600 text-sm font-medium hover:gap-5 hover:text-green-600 transition-all duration-300 ease-in-out'>আরো পড়ুন <BsArrowRight /></button>
                </div>

                <div className=' bg-sky-100 hover:bg-purple-100 bx cursor-pointer p-7 shadow-lg rounded-xl'>
                    <div className=' h-16 rounded-full w-16 bg-sky-200 bf flex items-center justify-center text-4xl text-gray-800 mb-5 '>
                        <BsCalendar2Week />
                    </div>
                    <h1 className=' text-[18px] font-medium mb-2'>ম্যাক্সিমাম লেকচার ক্লাস</h1>
                    <p className=' text-gray-600 text-justify mb-7'>শিক্ষার্থীদের জন্য যেখানে রয়েছে সপ্তাহে ৬ দিন ক্লাস লেকচার শিট ও ডেইলি এক্সাম সহ অনন্য সেবাসমূহ।</p>
                    <button className=' flex items-center gap-3 text-purple-600 text-sm font-medium hover:gap-5 hover:text-green-600 transition-all duration-300 ease-in-out'>আরো পড়ুন<BsArrowRight /></button>
                </div>

                <div className=' bg-pink-100 hover:bg-purple-100 bx cursor-pointer p-7 shadow-lg rounded-xl'>
                    <div className=' h-16 rounded-full w-16 bg-pink-200 bf flex items-center justify-center text-4xl text-gray-800 mb-5 '>
                        <GrNotes />
                    </div>
                    <h1 className=' text-[18px] font-medium mb-2'>সেরা নোটশীট ও ভর্তি গাইড</h1>
                    <p className=' text-gray-600 text-justify mb-7'>শিক্ষার্থীদের জন্য যেখানে রয়েছে লেকচার শিট, ভর্তি গাইড, হাইয়েস্ট প্র্যাকটিস সহ অনন্য সেবাসমূহ।</p>
                    <button className=' flex items-center gap-3 text-purple-600 text-sm font-medium hover:gap-5 hover:text-green-600 transition-all duration-300 ease-in-out'>আরো পড়ুন <BsArrowRight /></button>
                </div>

                <div className=' bg-orange-50 hover:bg-purple-100 bx cursor-pointer transition-all duration-300 ease-in-out p-7 shadow-lg rounded-xl'>
                    <div className=' h-16 rounded-full w-16 bg-orange-200 bf flex items-center justify-center text-4xl text-gray-800 mb-5 '>
                        <BsFileEarmarkRichtext />
                    </div>
                    <h1 className=' text-[18px] font-medium mb-2'>ডেইলি কোয়ালিটি এক্সাম</h1>
                    <p className=' text-gray-600 text-justify mb-7'>শিক্ষার্থীদের জন্য যেখানে রয়েছে ডেইলি এক্সাম, উইকলি এক্সাম, সাবজেক্ট ফাইনাল এক্সাম সহ অনন্য সেবাসমূহ।</p>
                    <button className=' flex items-center gap-3 text-purple-600  text-sm font-medium hover:gap-5 hover:text-green-600 transition-all duration-300 ease-in-out'>আরো পড়ুন <BsArrowRight /></button>
                </div>



            </div>
        </div>
    );
};

export default Timeline;