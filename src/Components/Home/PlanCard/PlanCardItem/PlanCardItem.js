import React from 'react';
import { BsCheck } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import bookimg from '../../../../Assect/book1.jpg'
import payment1 from '../../../../Assect/payment1.png'
import payment2 from '../../../../Assect/payment2.png'
import payment3 from '../../../../Assect/payment3.png'
import payment4 from '../../../../Assect/payment4.png'
const PlanCardItem = () => {
    const navigate = useNavigate()
    return (
        <div class="container m-auto px-2 py-2 md:px-12 lg:px-2">
            <div class="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
                <div class="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                    <div aria-hidden="true" class="absolute top-0 w-full h-full bg-white border border-gray-200 rounded-2xl  shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                    <div class="relative p-6 space-y-4 lg:p-8 ">

                        <div className=' '>
                            <img className=' mx-auto rounded-lg h-96' src={bookimg} alt="bookimg" />
                        </div>

                        <button onClick={() => navigate('/bookfrom')} type="submit" title="Submit" class="block w-full py-2 px-6 text-center rounded-xl transition-all duration-300 ease-in-out bg-purple-600 hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white active:bg-purple-600  ">
                            <span >
                                ক্রয় করুন
                            </span>
                        </button>
                    </div>
                </div>

                <div class="relative group md:w-6/12 lg:w-7/12">
                    <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white border border-gray-200 shadow-lg transition duration-500 group-hover:scale-105"></div>
                    <div class="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-16 lg:p-10">
                        <h1 className=' text-xl font-bold text-purple-600'>মেডুলা'স নার্সিং প্রশ্নব্যাংক </h1>
                        <ul role="list" class="space-y-4 py-6 text-gray-600">
                            <li class="space-x-2 flex items-center">
                                <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                <span>৭৬০০ MCQ প্রশ্ন সংবলিত।</span>
                            </li>
                            <li class="space-x-2 flex items-center">
                                <span class="text-purple-500 font-semibold"><BsCheck /></span>
                                <span>৬০ টি মানসম্মত মডেল টেস্ট।</span>
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
                        <p class="text-gray-700 text-left">মেডুলা'স নার্সিং প্রশ্নব্যাংক এ রয়েছে আধুনিক প্রশ্ন সংবলিত ৭৬০০ টি MCQ এবং ৬০ টি মানসম্মত মডেল টেস্ট ও বিগত সালের প্রশ্নের ব্যাখ্যাসহ সমাধান। </p>
                        <div class="mt-6 flex justify-between items-center gap-6">
                            <img class="w-16 lg:w-24" src={payment1} loading="lazy" alt="airbnb" />
                            <img class="w-8 lg:w-20" src={payment2} loading="lazy" alt="bissell" />
                            <img class="w-6 lg:w-28" src={payment3} loading="lazy" alt="ge" />
                            <img class=" h-12" src={payment4} loading="lazy" alt="ge" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanCardItem;