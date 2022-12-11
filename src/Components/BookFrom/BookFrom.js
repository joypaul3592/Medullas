import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsBack, BsFileLock2, BsFileMedical, BsPinMapFill, BsXDiamond } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiSecurePaymentLine, RiUserLocationLine } from 'react-icons/ri';

const BookFrom = () => {
    return (
        <div className=' max-w-7xl mx-auto px-5 py-10'>
            <div>
                <form className=' max-w-3xl border border-purple-600 rounded-xl pt-10 pb-5 shadow-md hover:border-sky-600 transition-all duration-300 ease-in-out group mx-auto my-6 p-3'>
                    <div className=' text-center'>
                        <h1 className=' text-3xl group-hover:text-purple-600 transition-all duration-300 ease-in-out'>ক্রয় ফর্ম</h1>
                    </div>
                    <div className=' flex items-center gap-3 mb-5'>
                        <BsBack className=' text-purple-600' />
                        <h1 className=' text-lg '>পার্সোনাল ইনফরমেশন</h1>
                    </div>
                    <div className=' pl-5'>
                        <div className=' grid md:grid-cols-2 grid-cols-1 gap-4 items-center '>
                            <div class="relative">
                                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                <label for="floating_outlined" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><RiUserLocationLine className=' text-purple-600' />ক্রয়কারীর নাম</label>
                            </div>

                            <div class="relative">
                                <input type="text" id="floating_outlined2" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                <label for="floating_outlined2" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><BsPinMapFill className=' text-purple-600' />ক্রয়কারীর ঠিকানা</label>
                            </div>
                        </div>


                        <div className=' grid md:grid-cols-2 mt-5 grid-cols-1 items-center gap-5'>
                            <div class="relative ">
                                <input type="text" id="floating_outlined3" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                <label for="floating_outlined3" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><MdOutlineMailOutline className=' text-purple-600' />ক্রয়কারীর ইমেইল</label>
                            </div>

                            <div class="relative">
                                <input type="text" id="floating_outlined4" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                <label for="floating_outlined4" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><BsFileMedical className=' text-purple-600' />ক্রয়কারীর ফোন নম্বর</label>
                            </div>
                        </div>

                        <div class="relative mt-5 ">
                            <input type="text" id="floating_outlined5" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                            <label for="floating_outlined5" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><AiOutlineMobile className=' text-purple-600' />সাহায্যকারী ফোন নম্বর</label>
                        </div>

                    </div>
                    <div className=' flex items-center gap-3  mt-8'>
                        <BsBack className=' text-purple-600' />
                        <h1 className=' text-lg '>পেমেন্ট ইনফরমেশন</h1>
                    </div>
                    <div className=' flex items-center gap-3 mt-4 text-lg '>
                        <BsXDiamond />
                        <h1>০১৭২৫১২৮৩৮৭ এ নম্বরে বিকাশ থেকে সেন্ড মানি করুন।</h1>
                    </div>
                    <div>
                        <div className=' pl-5'>
                            <div className=' grid md:grid-cols-2 mt-5 grid-cols-1 items-center gap-5 '>
                                <div class="relative ">
                                    <input type="text" id="floating_outlined6" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                    <label for="floating_outlined6" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><RiSecurePaymentLine className=' text-purple-600' />পেমেন্ট নাম</label>
                                </div>
                                <div class="relative ">
                                    <input type="text" id="floating_outlined7" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                    <label for="floating_outlined7" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><FaRegMoneyBillAlt className=' text-purple-600' />পেমেন্ট পরিমান</label>
                                </div>
                            </div>

                            <div class="relative mt-5">
                                <input type="text" id="floating_outline8d" class="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border border-gray-400 appearance-none    focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                                <label for="floating_outline8d" class="absolute  text-gray-700 text-lg  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 flex items-center gap-3"><BsFileLock2 className=' text-purple-600' />ট্রান্‌জ্যাক্‌শন্ আইডি</label>
                            </div>
                        </div>


                    </div>
                    <div className=' mt-8 mb-5 text-center'>
                        <button className=' px-6 py-1.5 bg-purple-100 rounded border hover:border-purple-300 hover:bg-transparent hover:text-purple-600 transition-all duration-300 ease-in-out '>জমা দিন</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default BookFrom;