import React from 'react';
import { useState } from 'react';
import blog1img from '../../../Assect/blog1.png'
import blog2img from '../../../Assect/blog2.png'
import blog3img from '../../../Assect/blog3.png'
const BlogHero = () => {
    const [change, setChange] = useState(false)
    return (
        <div className=' max-w-7xl mx-auto px-5 '>
            <div>
                <h1 className=' text-lg text-purple-600'>#জনপ্রিয় ব্লগ</h1>
            </div>
            <div className=' h-[30rem]  w-full flex justify-between py-5 '>
                <div onMouseEnter={() => setChange(true)} onMouseLeave={() => setChange(false)} className=' w-[55%] bg-gradient-to-r from-indigo-200 to-purple-200 relative rounded-2xl overflow-hidden group-hover:block  cursor-pointer'>
                    <div className={`w-full h-full    ${change ? 'block' : 'hidden'}`}>
                        <div className=' w-full h-full flex items-center justify-center '>
                            <button className=' pt-2 pb-1.5 px-10 text-balck border border-purple-600 rounded hover:bg-purple-600 hover:text-white transition-all duration-200 ease-out'>বিস্তারিত</button>
                        </div>
                    </div>
                    <div className=' w-full h-full bg-white bg-opacity-40 backdrop-blur-md '>
                        <div className=' absolute top-10 left-5'>
                            <h1 className=' text-2xl '>নার্সিং পড়ার যোগ্যতা ও নার্সিং পরীক্ষার মানবন্টন</h1>
                        </div>
                        <img className=' h-full mx-auto ' src={blog1img} alt="blog1img" />
                        <div className=' absolute left5 bottom-2.5 px-5 text-justify '>
                            <p>নার্সিং একটি মহৎ সেবামূলক পেশা। তাছাড়া নার্সিং-এর ক্যারিয়ার উজ্জ্বল। যার জন্য এর ভর্তি পরীক্ষায় হয়ে থাকে তুমুল প্রতিযোগিতা । নার্সিং পড়ার যোগ্যতা (সরকারি /বেসরকারি) ও নার্সিং পরীক্ষার মানবন্টন। নার্সিং এ বর্তমান ...</p>
                        </div>
                    </div>
                </div>

                <div className=' w-[42%]  flex flex-col items-center justify-between'>
                    <div className=' w-full h-[47%]'>
                        <div class="flex flex-col h-full">
                            <div class=" h-full shadow-md rounded-3xl p-1.5">
                                <div class="flex-none lg:flex h-full">
                                    <div class=" h-full w-full lg:w-48  lg:mb-0 mb-3">
                                        <img src={blog2img}
                                            alt="Just a flower" class=" w-full h-full border border-purple-600  object-scale-down lg:object-cover  rounded-2xl" />
                                    </div>
                                    <div class="flex-auto ml-3 justify-center pt-6 pl-5 bg-purple-100 p-2 rounded-2xl">
                                        <div class="flex flex-wrap  ">
                                            <div class="w-full flex-none text-sm text-blue-700 font-medium ">
                                                #ব্লগ
                                            </div>
                                            <h2 class="flex-auto text-lg font-medium text-black">
                                                নার্সিং ভর্তি প্রশ্ন ব্যাংক ও প্রশ্ন সমাধান</h2>
                                        </div>
                                        <div class="flex py-2  text-sm text-gray-500">
                                            <div class="flex-1 inline-flex items-center">
                                                <svg class=' h-4 mr-1 text-purple-600' xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                                    </path>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                <p class="">খুলনা, বাংলাদেশ।</p>
                                            </div>
                                            <div class="flex-1 inline-flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class=' h-4 mr-1 text-purple-600' fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p class="">০৫-২৫-২০২২</p>
                                            </div>
                                        </div>

                                        <div class="flex p-4 pt-2 pb-0 border-t border-purple-200 "></div>

                                        <div class="flex mt-2 space-x-3 text-sm font-medium">
                                            <div class="flex-auto flex space-x-3">
                                                <button
                                                    class="mb-2 md:mb-0 bg-purple-600 border border-purple-600 text-white px-8 pt-2 pb-[5px]  tracking-wider  rounded-full hover:bg-transparent hover:text-purple-600 transition-all duration-200 ease-in-out inline-flex items-center space-x-2 ">

                                                    <span>বিস্তারিত</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full h-[47%]'>
                        <div class="flex flex-col h-full">
                            <div class=" h-full shadow-md rounded-3xl p-1.5">
                                <div class="flex-none lg:flex h-full">
                                    <div class=" h-full w-full lg:w-48 lg:mb-0 mb-3">
                                        <img src={blog3img}
                                            alt="Just a flower" class=" h-full w-full border border-purple-600  object-scale-down lg:object-cover  rounded-2xl" />
                                    </div>
                                    <div class="flex-auto ml-3 justify-center pt-6 pl-5 bg-purple-100 p-2 rounded-2xl">
                                        <div class="flex flex-wrap  ">
                                            <div class="w-full flex-none text-sm text-blue-700 font-medium ">
                                                #ব্লগ
                                            </div>
                                            <h2 class="flex-auto text-lg font-medium text-black">
                                                নার্সিং ভর্তি তথ্য ও নার্সিং সম্পর্কিত প্রশ্নোত্তর</h2>
                                        </div>
                                        <div class="flex py-2  text-sm text-gray-500">
                                            <div class="flex-1 inline-flex items-center">
                                                <svg class=' h-4 mr-1 text-purple-600' xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                                    </path>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                <p class="">খুলনা, বাংলাদেশ।</p>
                                            </div>
                                            <div class="flex-1 inline-flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class=' h-4 mr-1 text-purple-600' fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p class="">০৫-২৫-২০২২</p>
                                            </div>
                                        </div>

                                        <div class="flex p-4 pt-2 pb-0 border-t border-purple-200 "></div>

                                        <div class="flex space-x-3 mt-2 text-sm font-medium">
                                            <div class="flex-auto flex space-x-3">
                                                <button
                                                    class="mb-2 md:mb-0 bg-purple-600 border border-purple-600 text-white px-8 pt-2 pb-[5px]  tracking-wider  rounded-full hover:bg-transparent hover:text-purple-600 transition-all duration-200 ease-in-out inline-flex items-center space-x-2 ">

                                                    <span>বিস্তারিত</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;