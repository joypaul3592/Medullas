import React from 'react';
import { AiOutlineSave, AiOutlineSwitcher } from 'react-icons/ai';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FaHandPointRight } from "react-icons/fa";

const NiyogCourseC = () => {
    return (
        <div className=' max-w-7xl mx-auto px-5 pb-10'>
            <div className='py-10 text-center bg-gradient-to-r from-white via-blue-200  to-white'>
                <h1 className='text-4xl font-bold text-black '>নার্সিং নিয়োগ প্রস্তুতি</h1>
                <div className=' text-2xl flex items-center px-2 mt-2 justify-center' >
                    <TbCurrencyTaka className=' text-3xl text-blue-600 font-bold -mt-1' />
                    <h1 className=' font-bold text-blue-600'>১৫,০০০</h1>
                </div>
            </div>
            <div className=' py-10'>
                <div className=' flex items-center font-bold group gap-3 text-xl'>
                    <AiOutlineSave className=' text-blue-600 group-hover:text-blue-600 text-2xl -mt-1' />
                    <h1>নার্সিং নিয়োগ প্রস্তুতি কোর্স বিবরণী:</h1>
                </div>
                <div className='w-full md:pl-[20%] py-5'>
                    <div>
                        <div className=' flex items-center text-lg gap-3'>
                            <AiOutlineSwitcher />
                            <h1>প্রথম পর্যায়ঃ <span className=' text-blue-600'>লেকচার</span></h1>
                        </div>
                        <div className=' mt-4'>
                            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-center text-gray-500 ">
                                    <thead class=" text-gray-700 text-base uppercase   bg-gradient-to-r from-white via-blue-200 to-white ">
                                        <tr className='pb-3 '>
                                            <th scope="col" className=' py-2' >
                                                বিষয়
                                            </th>
                                            <th scope="col" className=' py-2' >
                                                ক্লাসের সংখ্যা
                                            </th>
                                            <th scope="col" className=' py-2'>
                                                ক্লাস টেস্ট
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white hover:bg-blue-50 border-b border-t border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                বাংলা
                                            </th>
                                            <td class="py-2 px-6">
                                                ১৬
                                            </td>
                                            <td class="py-2 px-6 border-l border-blue-300">
                                                ১৬
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                ইংরেজী
                                            </th>
                                            <td className=' py-2'>
                                                ১৬
                                            </td>
                                            <td class="py-2 px-6 border-l border-blue-300">
                                                ১৬
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                গণিত
                                            </th>
                                            <td class="py-2 px-6">
                                                ১৬
                                            </td>
                                            <td class="py-2 px-6 border-l border-blue-300">
                                                ১৬
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                জীব বিজ্ঞান
                                            </th>
                                            <td class="py-2 px-6">
                                                ১৬
                                            </td>
                                            <td class="py-2 px-6 border-l border-blue-300">
                                                ১৬
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                রসায়ন
                                            </th>
                                            <td class="py-2 px-6">
                                                ১৬
                                            </td>
                                            <td class="py-2 px-6 border-l border-blue-300">
                                                ১৬
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                পদার্থ বিজ্ঞান
                                            </th>
                                            <td class="py-2 px-6">
                                                ১৬
                                            </td>
                                            <td class="py-2 px-6 border-l border-blue-300">
                                                ১৬
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                সাধারণ জ্ঞান
                                            </th>
                                            <td class="py-2 px-6">
                                                ১৬
                                            </td>
                                            <td class="py-2 px-6 border-l border-blue-300">
                                                ১৬
                                            </td>
                                        </tr>

                                    </tbody>
                                    <thead class=" text-gray-700 uppercase  bg-gradient-to-r from-white via-blue-200 to-white ">
                                        <tr>
                                            <th scope="col" class="py-2 px-6">
                                                সর্বমোট
                                            </th>
                                            <th scope="col" class="py-2 px-6">
                                                ১১২
                                            </th>
                                            <th scope="col" class="py-2 px-6">
                                                ১১২
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className=' mt-10'>
                        <div className=' flex items-center text-lg gap-3'>
                            <AiOutlineSwitcher />
                            <h1>দ্বিতীয় পর্যায়ঃ <span className=' text-blue-600'>পেপার ফাইনাল</span></h1>
                        </div>
                        <div className=' mt-4'>
                            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-center text-gray-500 ">
                                    <thead class=" text-gray-700 text-lg uppercase  bg-gradient-to-r from-white via-blue-200 to-white ">
                                        <tr>
                                            <th scope="col" class="py-2 px-6">
                                                বিষয়
                                            </th>
                                            <th scope="col" class="py-2 px-6">
                                                পরীক্ষার সংখ্যা
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white hover:bg-blue-50 border-b border-t border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                বাংলা
                                            </th>
                                            <td class="py-2 px-6">
                                                ১০
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                ইংরেজী
                                            </th>
                                            <td class="py-2 px-6">
                                                ১০
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                গণিত
                                            </th>
                                            <td class="py-2 px-6">
                                                ১০
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                জীব বিজ্ঞান ১ম পত্র
                                            </th>
                                            <td class="py-2 px-6">
                                                ১০
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                জীব বিজ্ঞান ২য় পত্র
                                            </th>
                                            <td class="py-2 px-6">
                                                ১০
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                রসায়ন ১ম পত্র
                                            </th>
                                            <td class="py-2 px-6">
                                                ১০
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                রসায়ন ২য় পত্র
                                            </th>
                                            <td class="py-2 px-6">
                                                ১০
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                পদার্থ বিজ্ঞান ১ম পত্র
                                            </th>
                                            <td class="py-2 px-6">
                                                ১০
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="pt-2 pb-2.5 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                পদার্থ বিজ্ঞান ২য় পত্র
                                            </th>
                                            <td class="pt-2 pb-2.5 px-6">
                                                ১০
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                সাধারণ জ্ঞান
                                            </th>
                                            <td class="py-2 px-6">
                                                ১০
                                            </td>
                                        </tr>

                                    </tbody>
                                    <thead class=" text-gray-700 uppercase  bg-gradient-to-r from-white via-blue-200 to-white ">
                                        <tr>
                                            <th scope="col" class="py-2 px-6">
                                                সর্বমোট
                                            </th>
                                            <th scope="col" class="py-2 px-6">
                                                ১০০
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className=' mt-10'>
                        <div className=' flex items-center text-lg gap-3'>
                            <AiOutlineSwitcher />
                            <h1>তৃতীয় পর্যায়ঃ<span className=' text-blue-600'> সাবজেক্ট ফাইনাল</span></h1>
                        </div>
                        <div className=' mt-4'>
                            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-center text-gray-500 ">
                                    <thead class=" text-gray-700 text-lg uppercase  bg-gradient-to-r from-white via-blue-200 to-white ">
                                        <tr>
                                            <th scope="col" class="py-2 px-6">
                                                বিষয়
                                            </th>
                                            <th scope="col" class="py-2 px-6">
                                                পরীক্ষার সংখ্যা
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white hover:bg-blue-50 border-b border-t border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                বাংলা
                                            </th>
                                            <td class="py-2 px-6">
                                                ৭
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                ইংরেজী
                                            </th>
                                            <td class="py-2 px-6">
                                                ৭
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="pb-2 pt-2.5 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                গণিত
                                            </th>
                                            <td class="pb-2 pt-2.5">
                                                ৭
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="pb-2 pt-2.5  font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                জীব বিজ্ঞান
                                            </th>
                                            <td class="pb-2 pt-2.5 ">
                                                ৭
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="pb-2 pt-2.5 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                রসায়ন
                                            </th>
                                            <td class="pb-2 pt-2.5 px-6">
                                                ৭
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="pb-2 pt-2.5 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                পদার্থ বিজ্ঞান
                                            </th>
                                            <td class="pb-2 pt-2.5 px-6">
                                                ৭
                                            </td>
                                        </tr>

                                        <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                            <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                                সাধারণ জ্ঞান
                                            </th>
                                            <td class="py-2 px-6">
                                                ৭
                                            </td>
                                        </tr>

                                    </tbody>
                                    <thead class=" text-gray-700 uppercase  bg-gradient-to-r from-white via-blue-200 to-white ">
                                        <tr>
                                            <th scope="col" class="pt-2 pb-2.5 px-6">
                                                সর্বমোট
                                            </th>
                                            <th scope="col" class="pt-2 pb-2.25 px-6">
                                                ৭৭
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className=' mt-5'>
                    <div className=' flex items-center font-bold group gap-3 text-xl'>
                        <AiOutlineSave className=' text-blue-600 group-hover:text-blue-600 text-2xl -mt-1' />
                        <h1> নার্সিং নিয়োগ প্রস্তুতি পড়ার যোগ্যতা</h1>
                    </div>
                    <div className=' md:pl-[20%]'>
                        <div className=' flex items-center gap-3 mt-2 '>
                            <FaHandPointRight className='text-blue-600' />
                            <h1>আবেদনকারীকে বাংলাদেশের স্থায়ী নাগরিক হতে হবে।</h1>
                        </div>
                        <div className=' flex gap-3  mt-2'>
                            <div>
                                <FaHandPointRight className='text-blue-600' />
                            </div>
                            <p>  এইচএসসি বা সমমানের পরীক্ষায় ২০২১ অথবা ২০২২ ইংরেজি সালে এবং এসএসসি বা সমমানের পরীক্ষায় ২০১৯ অথবা ২০২০ ইংরেজি সালে যেকোন বিভাগ থেকে উত্তীর্ণ হতে হবে। এসএসসি ও এইচএসসি বা সমমান পরীক্ষায় সর্বমোট নূন্যতম জিপিএ (GPA) ৬.০০ থাকতে হবে। তবে কোন একটি পরীক্ষায় নূন্যতম জিপিএ ২.৫০ এর কম গ্রহণযোগ্য হবে না।</p>
                        </div>
                    </div>
                </div> */}


                <div className=' mt-5'>
                    <div className=' flex items-center font-bold group gap-3 text-xl'>
                        <AiOutlineSave className=' text-blue-600 group-hover:text-blue-600 text-2xl -mt-1' />
                        <h1>নার্সিং নিয়োগ পরীক্ষার মানবন্টন-</h1>
                    </div>
                    <div className=' mt-4  md:pl-[20%]'>
                        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-center text-gray-500 ">
                                <thead class=" text-gray-700 text-lg uppercase  bg-gradient-to-r from-white via-blue-200 to-white ">
                                    <tr>
                                        <th scope="col" class="py-2 px-6">
                                            বিষয়
                                        </th>
                                        <th scope="col" class="py-2 px-6">
                                            মার্ক
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white hover:bg-blue-50 border-b border-t border-blue-300 text-base font-bold ">
                                        <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                            বাংলা
                                        </th>
                                        <td class="py-2 px-6">
                                            ২০
                                        </td>
                                    </tr>

                                    <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                        <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                            ইংরেজী
                                        </th>
                                        <td class="py-2 px-6">
                                            ২০
                                        </td>
                                    </tr>

                                    <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                        <th scope="row" class="pb-2 pt-2.5 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                            সাধারণ গণিত
                                        </th>
                                        <td class="pb-2 pt-2.5">
                                            ১০
                                        </td>
                                    </tr>

                                    <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                        <th scope="row" class="pb-2 pt-2.5  font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                            সাধারণ বিজ্ঞান
                                        </th>
                                        <td class="pb-2 pt-2.5 ">
                                            ২৫
                                        </td>
                                    </tr>


                                    <tr class="bg-white hover:bg-blue-50 border-b border-blue-300 text-base font-bold ">
                                        <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-blue-300 whitespace-nowrap ">
                                            সাধারণ জ্ঞান
                                        </th>
                                        <td class="py-2 px-6">
                                            ২৫
                                        </td>
                                    </tr>

                                </tbody>
                                <thead class=" text-gray-700 uppercase  bg-gradient-to-r from-white via-blue-200 to-white ">
                                    <tr>
                                        <th scope="col" class="pt-2 pb-2.5 px-6">
                                            সর্বমোট
                                        </th>
                                        <th scope="col" class="pt-2 pb-2.25 px-6">
                                            ১০০
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NiyogCourseC;