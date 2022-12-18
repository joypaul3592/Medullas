import React from 'react';
import { useState } from 'react';
import { BsCheck } from "react-icons/bs";
import { TbCurrencyTaka } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import bookimg from '../../Assect/book1.jpg'
import bookimg2 from '../../Assect/book2.jpg'
import bookimg3 from '../../Assect/book3.jpg'


const BookComShop = () => {
    const navigate = useNavigate()
    const [num, setNum] = useState(0)

    const handelNum = () => {
        if (num >= 1) {
            setNum(num - 1)
        }
    }
    return (
        <div className=' max-w-7xl mx-auto mt-20 mb-20 '>
            <div className=' px-5'>
                <div >
                    <h4 className=' font-bold text-purple-600'>#বই</h4>
                    <h1 className=' text-3xl font-bold mb-10'>আমাদের জনপ্রিয় বই সমূহঃ</h1>
                </div>
                <div class="container m-auto px-2 py-2 md:px-12 lg:px-2">
                    <div class="mt-12 m-auto  items-center justify-center md:flex md:space-y-0  xl:w-10/12">

                        <div class="relative z-10 md:w-6/12  lg:w-5/12">
                            <div class="relative p-6 space-y-4 lg:p-8 lg:pb-5 rounded-xl border border-purple-600 overflow-hidden">
                                <div className=' w-80 h-[50rem] -mt-80 bg-purple-100 absolute top-0 -left-8 rotate-45 -z-10'></div>
                                <img className=' mx-auto shadow-lg shadow-gray-400 rounded-lg h-96 z-20' src={bookimg} alt="bookimg" />
                                <div className=' flex items-center gap-1 text-4xl mx-auto justify-center'><TbCurrencyTaka className=' text-5xl -mt-1 text-purple-600' />৪৯০</div>
                            </div>
                        </div>

                        <div class="relative  md:w-6/12  lg:w-7/12  border border-purple-600 border-l-0">
                            <div class="relative p-6 pt-16 md:p-8 md:pl-12  md:rounded-r-2xl lg:pl-16 lg:p-10">
                                <div className=' flex justify-between'>
                                    <h1 className=' text-xl font-bold text-purple-600'>মেডুলা'স নার্সিং প্রশ্নব্যাংক </h1>

                                    <div class="custom-number-input buo h-10 w-32">
                                        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                            <button onClick={handelNum} data-action="decrement" class=" bg-purple-100 text-gray-600 hover:text-gray-700 hover:bg-purple-200 h-full w-20 rounded-l cursor-pointer outline-none">
                                                <span class="m-auto text-2xl font-thin">−</span>
                                            </button>
                                            <div class="outline-none bg-purple-100 focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  ">{num}</div>

                                            <button onClick={() => setNum(num + 1)} data-action="increment" class="bg-purple-100 text-gray-600 hover:text-gray-700 hover:bg-purple-200 h-full w-20 rounded-r cursor-pointer">
                                                <span class="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <ul role="list" class="space-y-4 py-6 text-gray-600">
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>৭০০০ MCQ প্রশ্ন সংবলিত।</span>
                                    </li>
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>৩০০০ টি মানসম্মত মডেল টেস্ট।</span>
                                    </li>
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>সর্বশেষ পরীক্ষার ব্যাখ্যাসহ সমাধান।</span>
                                    </li>
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>বিগত ১৫ সালের প্রশ্নের ব্যাখ্যাসহ সমাধান।</span>
                                    </li>
                                </ul>

                                <p class="text-gray-700 text-left">মেডুলা'স নার্সিং প্রশ্নব্যাংক এ রয়েছে আধুনিক প্রশ্ন সংবলিত ৭০০০ টি MCQ এবং ৩০০০ টি মানসম্মত মডেল টেস্ট ও বিগত ১৫ সালের প্রশ্নের ব্যাখ্যাসহ সমাধান। </p>
                                <button onClick={() => navigate('/bookfrom')} type="submit" title="Submit" class="block w-full py-2 px-6 text-center rounded-xl transition-all duration-300 ease-in-out bg-purple-600 hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white active:bg-purple-600 mt-5  ">
                                    <span >
                                        ক্রয় করুন
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="container m-auto px-2 py-2 md:px-12 lg:px-2">
                    <div class="mt-12 m-auto  items-center justify-center md:flex md:space-y-0  xl:w-10/12">



                        <div class="relative  md:w-6/12  lg:w-7/12  border border-purple-600 border-r-0">
                            <div class="relative p-6 pt-16 md:p-8 md:pl-12  md:rounded-r-2xl lg:pl-16 lg:p-10">
                                <div className=' flex justify-between'>
                                    <h1 className=' text-xl font-bold text-purple-600'>মেডুলা'স নার্সিং ভর্তি সহায়িকা</h1>

                                    <div class="custom-number-input buo h-10 w-32">
                                        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                            <button onClick={handelNum} data-action="decrement" class=" bg-purple-100 text-gray-600 hover:text-gray-700 hover:bg-purple-200 h-full w-20 rounded-l cursor-pointer outline-none">
                                                <span class="m-auto text-2xl font-thin">−</span>
                                            </button>
                                            <div class="outline-none bg-purple-100 focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  ">{num}</div>

                                            <button onClick={() => setNum(num + 1)} data-action="increment" class="bg-purple-100 text-gray-600 hover:text-gray-700 hover:bg-purple-200 h-full w-20 rounded-r cursor-pointer">
                                                <span class="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <ul role="list" class="space-y-4 py-6 text-gray-600">
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>বিষয়ভিত্তিক MCQ প্রশ্ন সংবলিত।</span>
                                    </li>
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>বি.এসসি ও ডিপ্লোমা মডেল টেস্ট। </span>
                                    </li>
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>সর্বশেষ পরীক্ষার ব্যাখ্যাসহ সমাধান।</span>
                                    </li>
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>বিগত সালের প্রশ্নের ব্যাখ্যাসহ সমাধান।</span>
                                    </li>
                                </ul>

                                <p class="text-gray-700 text-left">মেডুলা'স নার্সিং প্রশ্নব্যাংক এ রয়েছে বিষয়ভিত্তিক MCQ প্রশ্ন সংবলিত আধুনিক বি.এসসি ও ডিপ্লোমা এর মানসম্মত মডেল টেস্ট ও বিগত সালের প্রশ্নের ব্যাখ্যাসহ সমাধান। </p>
                                <button onClick={() => navigate('/bookfrom')} type="submit" title="Submit" class="block w-full py-2 px-6 text-center rounded-xl transition-all duration-300 ease-in-out bg-purple-600 hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white active:bg-purple-600 mt-5  ">
                                    <span >
                                        ক্রয় করুন
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div class="relative z-10 md:w-6/12  lg:w-5/12">
                            <div class="relative p-6 space-y-4 lg:p-8 lg:pb-5 rounded-xl border border-purple-600 overflow-hidden">
                                <div className=' w-80 h-[50rem] -mt-80 bg-purple-100 absolute top-0 -left-8 rotate-45 -z-10'></div>
                                <img className=' mx-auto shadow-lg shadow-gray-400 rounded-lg h-96 z-20' src={bookimg2} alt="bookimg" />
                                <div className=' flex items-center gap-1 text-4xl mx-auto justify-center'><TbCurrencyTaka className=' text-5xl -mt-1 text-purple-600' />৩৯০</div>
                            </div>
                        </div>



                    </div>
                </div>



                <div class="container m-auto px-2 py-2 md:px-12 lg:px-2">
                    <div class="mt-12 m-auto  items-center justify-center md:flex md:space-y-0  xl:w-10/12">

                        <div class="relative z-10 md:w-6/12  lg:w-5/12">
                            <div class="relative p-6 space-y-4 lg:p-8 lg:pb-5 rounded-xl border border-purple-600 overflow-hidden">
                                <div className=' w-80 h-[50rem] -mt-80 bg-purple-100 absolute top-0 -left-8 rotate-45 -z-10'></div>
                                <img className=' mx-auto shadow-lg shadow-gray-400 rounded-lg h-96 z-20' src={bookimg3} alt="bookimg" />
                                <div className=' flex items-center gap-1 text-4xl mx-auto justify-center'><TbCurrencyTaka className=' text-5xl -mt-1 text-purple-600' />৩৯০</div>
                            </div>
                        </div>

                        <div class="relative  md:w-6/12  lg:w-7/12  border border-purple-600 border-l-0">
                            <div class="relative p-6 pt-16 md:p-8 md:pl-12  md:rounded-r-2xl lg:pl-16 lg:p-10">
                                <div className=' flex justify-between'>
                                    <h1 className=' text-xl font-bold text-purple-600'>মেডুলা'স নার্সিং ভর্তি সহায়িকা</h1>

                                    <div class="custom-number-input buo h-10 w-32">
                                        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                            <button onClick={handelNum} data-action="decrement" class=" bg-purple-100 text-gray-600 hover:text-gray-700 hover:bg-purple-200 h-full w-20 rounded-l cursor-pointer outline-none">
                                                <span class="m-auto text-2xl font-thin">−</span>
                                            </button>
                                            <div class="outline-none bg-purple-100 focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  ">{num}</div>

                                            <button onClick={() => setNum(num + 1)} data-action="increment" class="bg-purple-100 text-gray-600 hover:text-gray-700 hover:bg-purple-200 h-full w-20 rounded-r cursor-pointer">
                                                <span class="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <ul role="list" class="space-y-4 py-6 text-gray-600">
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>বি.এসসি ও ডিপ্লোমা নার্সিং ও ম্যাটস/আইএইচটি।</span>
                                    </li>
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>৩০০ টি মানসম্মত প্রশ্ন সংবলিত</span>
                                    </li>
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>সর্বশেষ পরীক্ষার ব্যাখ্যাসহ সমাধান।</span>
                                    </li>
                                    <li class="space-x-2 flex items-center">
                                        <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                        <span>বিগত সালের প্রশ্নের ব্যাখ্যাসহ সমাধান।</span>
                                    </li>
                                </ul>

                                <p class="text-gray-700 text-left">মেডুলা'স নার্সিং প্রশ্নব্যাংক এ রয়েছে বি.এসসি ও ডিপ্লোমা নার্সিং ও ম্যাটস/আইএইচটি আধুনিক প্রশ্ন সংবলিত মডেল টেস্ট ও বিগত সালের প্রশ্নের ব্যাখ্যাসহ সমাধান। </p>
                                <button onClick={() => navigate('/bookfrom')} type="submit" title="Submit" class="block w-full py-2 px-6 text-center rounded-xl transition-all duration-300 ease-in-out bg-purple-600 hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white active:bg-purple-600 mt-5  ">
                                    <span >
                                        ক্রয় করুন
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div >
    );
};

export default BookComShop;