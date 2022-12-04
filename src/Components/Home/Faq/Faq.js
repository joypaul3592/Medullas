import React from 'react';
import { FiChevronDown } from "react-icons/fi";
import faqimg from '../../../Assect/faq.png'


const Faq = () => {
    return (
        <div className=' max-w-7xl mx-auto px-5  py-10'>
            <div >
                <h4 className=' font-bold text-purple-600'>#জিজ্ঞাসা</h4>
                <h1 className=' text-3xl font-bold mb-10'>কোর্স সম্পর্কিত সাধারণ জিজ্ঞাসা</h1>
            </div>
            <div className='lg:flex items-center justify-between'>
                <div className=' lg:w-[40%]'>
                    <img className='w-full' src={faqimg} alt="faqimg" />
                </div>


                <div class="xl:w-2/4 lg:w-[60%] w-full mx-auto ">
                    <div class="md:m-8 rounded overflow-hidden ">
                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-purple-200 flex rounded-md justify-between px-4 py-3 items-center text-purple-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    এই কোর্স কাদের জন্য?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                    repellat amet doloribus consequuntur eos similique provident
                                    tempora voluptates iure quia fuga dicta voluptatibus culpa
                                    mollitia recusandae delectus id suscipit labore?
                                </p>
                            </div>
                        </div>




                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-purple-200 flex rounded-md justify-between px-4 py-3 items-center text-purple-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    পূর্ব কী রেজাল্ট থাকা দরকার?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                    repellat amet doloribus consequuntur eos similique provident
                                    tempora voluptates iure quia fuga dicta voluptatibus culpa
                                    mollitia recusandae delectus id suscipit labore?
                                </p>
                            </div>
                        </div>


                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-purple-200 flex rounded-md justify-between px-4 py-3 items-center text-purple-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    কোর্সের মধ্যে কী কী আছে ?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                    repellat amet doloribus consequuntur eos similique provident
                                    tempora voluptates iure quia fuga dicta voluptatibus culpa
                                    mollitia recusandae delectus id suscipit labore?
                                </p>
                            </div>
                        </div>



                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-purple-200 flex rounded-md justify-between px-4 py-3 items-center text-purple-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    কোর্স কমপ্লিট করতে কতদিন সময় লাগবে?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                    repellat amet doloribus consequuntur eos similique provident
                                    tempora voluptates iure quia fuga dicta voluptatibus culpa
                                    mollitia recusandae delectus id suscipit labore?
                                </p>
                            </div>
                        </div>

                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-purple-200 flex rounded-md justify-between px-4 py-3 items-center text-purple-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    আপনাদের কোর্স থেকে কি সবাই চান্স পায়?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                    repellat amet doloribus consequuntur eos similique provident
                                    tempora voluptates iure quia fuga dicta voluptatibus culpa
                                    mollitia recusandae delectus id suscipit labore?
                                </p>
                            </div>
                        </div>


                        <div class="group outline-none accordion-section mb-1 rounded-md" tabindex="1">
                            <div class="group bg-purple-200 flex rounded-md justify-between px-4 py-3 items-center text-purple-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    কোর্স ফলো করতে গিয়ে কোথাও আটকে গেলে কি করবো ?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                    repellat amet doloribus consequuntur eos similique provident
                                    tempora voluptates iure quia fuga dicta voluptatibus culpa
                                    mollitia recusandae delectus id suscipit labore?
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;