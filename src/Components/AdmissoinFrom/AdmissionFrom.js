import React from 'react';
import { RiUserHeartLine, RiUserSettingsLine, RiUserLocationLine, RiCommunityLine } from "react-icons/ri";
import { BsHouseDoor, BsFillGeoFill, BsCalendar2Check, BsXDiamond } from "react-icons/bs";
import { AiOutlineProfile } from "react-icons/ai";
import { TbBuildingPavilon } from "react-icons/tb";
import { HiOutlinePhoneMissedCall, HiOutlineMail } from "react-icons/hi";
import { BiMobileVibration } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { AiOutlineFileMarkdown } from "react-icons/ai";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { toast } from 'react-toastify';

const AdmissionFrom = () => {
    const handelsubmit = (e) => {
        e.preventDefault();
        toast.error('দয়া করে সম্পূর্ণ তথ্য পূরণ করুন !', {
            position: toast.POSITION.TOP_RIGHT
        });
        console.log('kaj koren');
    }
    return (
        <div class=" max-w-7xl px-5 mx-auto xl:mt-10 md:mt-20 mt-10 ">

            <div class=" py-5">
                <h4 class="text-center font-bold text-2xl text-purple-600">ভর্তি ফরম</h4>
                <div className=' w-1/2 h-[1px] bg-purple-400 mx-auto '></div>
                <div >
                    <div role="form" class="wpcf7" id="wpcf7-f8927-p8928-o1" lang="en-US" dir="ltr">
                        <div class="screen-reader-response">
                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                            <ul></ul>
                        </div>
                        <form onSubmit={handelsubmit} className='  relative md:pt-10' novalidate="novalidate" data-status="init">


                            <div class="row  py-4 mt-10  md:flex-row flex flex-col items-center justify-center  mx-auto  gap-8 ">
                                <div >
                                    <label className='  pt-2.5 pb-1.5  px-[38px] rounded-md border border-purple-600 accent-purple-600 cursor-pointer'><input className=' mr-5' type="radio" name="input-subject" value="BSC in Nursing" /><span class="wpcf7-list-item-label">বিএসসি ইন নার্সিং</span></label>
                                </div>

                                <div>
                                    <label className='  pt-2.5 pb-1.5 px-[38px] rounded-md border border-purple-600 accent-purple-600 cursor-pointer'><input className=' mr-5' type="radio" name="input-subject" value="BSC in Nursing" /><span class="wpcf7-list-item-label">ডিপ্লোমা ইন নার্সিং</span></label>
                                </div>

                                <div>
                                    <label className='  pt-2.5 pb-1.5 px-8  rounded-md border border-purple-600 accent-purple-600 cursor-pointer'><input className=' mr-5' type="radio" name="input-subject" value="BSC in Nursing" /><span class="wpcf7-list-item-label">ডিপ্লোমা ইন মিডওয়াইফারী</span></label>
                                </div>
                            </div>


                            <div class=" py-5  mx-auto mt-5 grid md:grid-cols-3 grid-cols-1 gap-10">

                                <div class="relative">
                                    <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                    <label for="floating_outlined" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><RiUserLocationLine className=' text-purple-600' />ছাত্র/ছাত্রীর নাম</label>
                                </div>

                                <div class="relative ">
                                    <input type="text" id="floating_outlined2" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                    <label for="floating_outlined2" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><RiUserHeartLine className=' text-purple-600' />পিতার নাম</label>
                                </div>

                                <div class="relative">
                                    <input type="text" id="floating_outlined3" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                    <label for="floating_outlined3" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><RiUserSettingsLine className='  text-purple-600' />মাতার নাম</label>
                                </div>
                            </div>


                            <div class=" py-5 ">
                                <h1 className=' text-xl text-black font-bold flex items-center gap-4 mt-5'><VscActivateBreakpoints />বর্তমান ঠিকানা</h1>
                                <div className=' grid md:grid-cols-2 grid-cols-1 md:gap-10'>
                                    <div class="relative mt-5 ">
                                        <input type="text" id="floating_outlined4" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                        <label for="floating_outlined4" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><BsHouseDoor className='  text-purple-600' />গ্রাম</label>
                                    </div>

                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined5" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                        <label for="floating_outlined5" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><AiOutlineProfile className='  text-purple-600' />পোস্ট অফিস</label>
                                    </div>
                                </div>

                                <div className=' grid md:grid-cols-2 grid-cols-1 md:gap-10'>
                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined6" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                        <label for="floating_outlined6" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><BsFillGeoFill className='  text-purple-600' />উপজেলা</label>
                                    </div>


                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined7" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                        <label for="floating_outlined7" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><TbBuildingPavilon className='  text-purple-600' />জেলা</label>
                                    </div>
                                </div>

                            </div>



                            <div class=" py-5 ">
                                <h1 className=' text-xl text-black font-bold flex items-center gap-4 mt-5'><VscActivateBreakpoints />স্থায়ী ঠিকানা</h1>
                                <div className=' grid md:grid-cols-2 grid-cols-1 md:gap-10'>
                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined8" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                        <label for="floating_outlined8" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><BsHouseDoor className='  text-purple-600' />গ্রাম</label>
                                    </div>

                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined9" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                        <label for="floating_outlined9" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><AiOutlineProfile className='  text-purple-600' />পোস্ট অফিস</label>
                                    </div>
                                </div>

                                <div className=' grid md:grid-cols-2 grid-cols-1 md:gap-10'>
                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined10" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                        <label for="floating_outlined10" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><BsFillGeoFill className='  text-purple-600' />উপজেলা</label>
                                    </div>


                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined11" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                        <label for="floating_outlined11" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><TbBuildingPavilon className='  text-purple-600' />জেলা</label>
                                    </div>
                                </div>

                            </div>


                            <h1 className=' text-xl pt-5 text-black flex items-center font-bold gap-4 mt-5'><VscActivateBreakpoints />সংযোজিত তথ্য</h1>
                            <div class=" pb-5 grid md:grid-cols-3 grid-cols-1 md:gap-10 ">
                                <div class="relative mt-5">
                                    <input type="number" id="floating_outlined12" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                    <label for="floating_outlined12" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><HiOutlinePhoneMissedCall className='  text-purple-600' />পার্সোনাল ফোন নাম্বার</label>
                                </div>


                                <div class="relative mt-5">
                                    <input type="number" id="floating_outlined13" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                    <label for="floating_outlined13" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><BiMobileVibration className='  text-purple-600' />গার্ডিয়ান ফোন নাম্বার</label>
                                </div>


                                <div class="relative mt-5">
                                    <input type="email" id="floating_outlined14" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                    <label for="floating_outlined14" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><HiOutlineMail className='  text-purple-600' />ইমেইল</label>
                                </div>
                            </div>

                            <div class=" pb-5 grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
                                <div >
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-purple-600 block w-full p-2.5 " required>
                                        <option selected>মুসলিম</option>
                                        <option value="US">হিন্দু</option>
                                        <option value="CA">অন্যান্য</option>
                                    </select>
                                </div>


                                <div >
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-purple-600 block w-full p-2.5 " required>
                                        <option selected>অবিবাহিত</option>
                                        <option value="US">বিবাহিত</option>

                                    </select>
                                </div>

                                <div >
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-purple-600 block w-full p-2.5 " required>
                                        <option selected>জেন্ডার </option>
                                        <option value='chele'>ছেলে</option>
                                        <option value="meye">মেয়ে</option>
                                    </select>
                                </div>

                            </div>


                            <div class=" py-5 ">
                                <h1 className=' text-xl pt-5 text-black flex items-center font-bold gap-4'><VscActivateBreakpoints />প্রতিষ্ঠানিক তথ্য (এস.এস.সি)</h1>
                                <div className=' grid md:grid-cols-2 grid-cols-1 md:gap-10'>
                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined15" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                        <label for="floating_outlined15" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><FaUniversity className='  text-purple-600' />শিক্ষা প্রতিষ্ঠানের নাম</label>
                                    </div>


                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined16" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                        <label for="floating_outlined16" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><RiCommunityLine className='  text-purple-600' />বোর্ডের নাম</label>
                                    </div>
                                </div>
                                <div className=' grid md:grid-cols-2 grid-cols-1 md:gap-10'>
                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined17" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                        <label for="floating_outlined17" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><BsCalendar2Check className='  text-purple-600' />পাশের সাল</label>
                                    </div>
                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined18" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                        <label for="floating_outlined18" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><AiOutlineFileMarkdown className='  text-purple-600' />জি পি এ</label>
                                    </div>
                                </div>
                            </div>

                            <div class=" py-5 ">
                                <h1 className=' text-xl pt-5 text-black font-bold flex items-center gap-4'><VscActivateBreakpoints />প্রতিষ্ঠানিক তথ্য (এইচ.এস.সি)</h1>
                                <div className=' grid md:grid-cols-2 grid-cols-1 md:gap-10'>
                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined19" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                        <label for="floating_outlined19" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><FaUniversity className='  text-purple-600' />শিক্ষা প্রতিষ্ঠানের নাম</label>
                                    </div>


                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined27" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                        <label for="floating_outlined27" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><RiCommunityLine className='  text-purple-600' />বোর্ডের নাম</label>
                                    </div>
                                </div>
                                <div className=' grid md:grid-cols-2 grid-cols-1 md:gap-10'>
                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined172" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                        <label for="floating_outlined172" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><BsCalendar2Check className='  text-purple-600' />পাশের সাল</label>
                                    </div>
                                    <div class="relative mt-5">
                                        <input type="text" id="floating_outlined21" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                        <label for="floating_outlined21" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><AiOutlineFileMarkdown className='  text-purple-600' />জি পি এ</label>
                                    </div>
                                </div>
                            </div>






                            <div class=" py-5 ">
                                <h1 className=' text-xl pt-5 text-black font-bold flex items-center gap-4'><VscActivateBreakpoints />পেমেন্ট তথ্য</h1>
                                <div className=' flex items-center gap-3 mt-4 text-lg justify-center'>
                                    <BsXDiamond className=' text-purple-600' />
                                    <h1><span className=' font-bold'>০১৯৭২৩৪৩৯২৫</span> এ নম্বরে বিকাশ থেকে সেন্ড মানি করুন।</h1>
                                </div>
                                <div class=" pb-5 grid md:grid-cols-3 grid-cols-1 md:gap-10 ">
                                    <div class="relative mt-5">
                                        <input type="number" id="floating_outlined142" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                        <label for="floating_outlined142" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><HiOutlinePhoneMissedCall className='  text-purple-600' />পেমেন্ট নাম</label>
                                    </div>


                                    <div class="relative mt-5">
                                        <input type="number" id="floating_outlined143" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                        <label for="floating_outlined143" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><BiMobileVibration className='  text-purple-600' />পেমেন্ট পরিমান</label>
                                    </div>


                                    <div class="relative mt-5">
                                        <input type="email" id="floating_outlined174" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                                        <label for="floating_outlined174" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><HiOutlineMail className='  text-purple-600' />ট্রান্‌জ্যাক্‌শন্ আইডি</label>
                                    </div>
                                </div>
                            </div>


                            <div class="flex items-center justify-center  md:absolute xl:-top-20 -top-24 right-0 md:w-40 w-full">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-purple-600 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 "><span class="font-semibold">ছবি আপলোড করুন</span></p>
                                        <p class="text-xs text-gray-500 ">(400x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" required />
                                </label>
                            </div>

                            <div class="mb-16 text-center">
                                <input type="submit" value="জমা দিন" class=" pt-3 pb-2 hover:bg-transparent border border-purple-600 hover:text-purple-600 transition-all duration-300 ease-in-out rounded-md md:mt-4 mt-8 bg-purple-600 text-white px-16 cursor-pointer  text-lg" /><span class="wpcf7-spinner"></span>
                                <p></p>
                            </div>

                            <div class="wpcf7-response-output" aria-hidden="true"></div>
                        </form>
                    </div>
                </div>
            </div >
        </div >

    );
};

export default AdmissionFrom;