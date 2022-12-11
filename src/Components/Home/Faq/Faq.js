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
                                    নার্সিং কেন পড়বো?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>উত্তর:</span> নার্সিং একটি মহৎ পেশার নাম। উচ্চ মাধ্যমিক পাশের পর অধিকাংশ মেয়েদেরই পছন্দের তালিকার শীর্ষে থাকে এই পেশাটি। কিন্তু নার্সিং পড়ার যোগ্যতা থাকা সত্যেও শুধুমাত্র সঠিক ধারণার অভাবে মহৎ এ পেশায় আসতে পারছে না। অথচ আমাদের দেশে প্রতিবছরই যোগ্য ও পেশাদার নার্সের চাহিদা বাড়ছে।
                                </p>
                            </div>
                        </div>




                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-purple-200 flex rounded-md justify-between px-4 py-3 items-center text-purple-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    নার্সদের কর্মক্ষেত্র কোথায়?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>উত্তর:</span>  সরকারী-বেসরকারী উভয় সেক্টরে নার্সদের কর্মক্ষেত্র প্রায় একই রকম হয়ে থাকে। তবে সরকারী নার্সদের কাজের ক্ষেত্র কিছুটা বিস্তৃত। সরকারী নার্সরা সরকারি হাসপাতাল ও স্বাস্থ্যকেন্দ্রে এবং আইনশৃঙ্খলা ও সামরিক বাহিনীর চিকিৎসা বিভাগে দায়িত্ব পেয়ে থাকেন।পাশাপাশি দেশের জরুরী প্রয়োজনে আকষ্মিক কোন দুর্যোগ মোকাবিলায়ও সরকারী নার্সদের দায়িত্ব দেয়া হয়।
                                    অপরদিকে বেসরকারী নার্সরা সাধারণত বেসরকারি হাসপাতাল ও স্বাস্থ্যকেন্দ্রে এবং ব্যক্তিগত ক্লিনিকে কাজ করে থাকেন। তবে নার্সদের কাজেরও বেশকিছু পদ রয়েছে। কাজের ক্ষেত্র ও অভিজ্ঞতা অনুযায়ী আপনি অ্যাসিস্ট্যান্ট নার্স, স্টাফ নার্স, ওটি সিস্টার বা নার্সিং সুপারভাইজার হিসেবে কাজ করার সুযোগ পাবেন।
                                    আবার অনেকে নার্সিং কলেজে ইন্সট্রাক্টর বা ডেমোনস্ট্রেটর ইনচার্জ হিসেবেও নিয়োগ পেয়ে থাকেন। এছাড়া ভালো দক্ষতা থাকলে নার্সিং অধিদপ্তরে প্রজেক্ট অফিসার বা সহকারী পরিচালক পদেও কাজ করতে পারেন
                                </p>
                            </div>
                        </div>


                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-purple-200 flex rounded-md justify-between px-4 py-3 items-center text-purple-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    নার্সিং এ ক্যারিয়ার কেমন হবে?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>উত্তর:</span> আমাদের দেশে প্রয়োজনের তুলনায় যোগ্য নার্সের সংখ্যা এখনো কম। কারণ অধিকাংশ মেধাবী মেয়েরা নার্সিং পড়ার যোগ্যতা থাকা সত্যেও শুধুমাত্র সঠিক ধারণার অভাবে মহৎ এ পেশায় আসতে পারছে না। তাই আমরা আশা করছি এই লেখার মাধ্যমে আপনি নার্সিংয়ে পড়ার যাবতীয় তথ্য জেনে গেছেন।
                                    দেশে এখন প্রায় সব জেলা-উপজেলা শহরগুলোতেই সরকারি বেসরকারি হাসপাতাল বা ক্লিনিক গড়ে উঠেছে। এর ফলে ক্রমাগত বেড়ে চলছে হাসপাতালের সংখ্যা। আর এসব প্রতিষ্ঠানে প্রতিবছরই প্রচুর সংখ্যক নার্সের প্রয়োজন হয়। তাই চাইলে এ পেশায় আসতে পারেন আপনিও।
                                    তবে শুধু দেশেই নয়, বর্হিবিশ্বে দক্ষ ও অভিজ্ঞ নার্সের চাহিদা প্রতিনিয়ত বেড়েই চলেছে। মধ্যপ্রাচ্য, অস্ট্রেলিয়া ও কানাডাসহ বিশ্বের বেশকিছু উন্নত দেশে বাংলাদেশের পেশাদার নার্সরা সুনামের সাথে কাজ করছেন। তাই মানব সেবাধর্মী এ পেশায় যুক্ত হওয়ার মাধ্যমে আপনিও অর্জন করতে পারেন সামাজিক মর্যাদা ও ভালো আয়ের সুযোগ।
                                </p>
                            </div>
                        </div>



                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-purple-200 flex rounded-md justify-between px-4 py-3 items-center text-purple-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    ছেলেরা কি নার্সিং পড়তে পারে?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>উত্তর:</span> হ্যা, ছেলেরা নার্সিং পড়তে পারে। ব্যাচেলর অব সায়েন্স ইন নার্সিং ও ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি কোর্সে ভর্তির জন্য পুরুষ প্রার্থীর ক্ষেত্রে সরকারি প্রতিষ্ঠানে নির্দিষ্ট আসনের ১০ শতাংশ এবং বেসরকারি প্রতিষ্ঠানের নির্দিষ্ট আসনের ২০ শতাংশ ভর্তিযোগ্য হইবে। ডিপ্লোমা ইন মিডওয়াইফারি কোর্সে শুধু নারী প্রার্থী আবেদন করতে পারবে।
                                </p>
                            </div>
                        </div>

                        <div class="group outline-none accordion-section mb-4 rounded-md" tabindex="1">
                            <div class="group bg-purple-200 flex rounded-md justify-between px-4 py-3 items-center text-purple-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    বিএসসি (Bsc) নার্সিং পড়ার যোগ্যতা কি?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>উত্তর: <br /></span> * আবেদনকারীকে বাংলাদেশের স্থায়ী নাগরিক হতে হবে। <br />
                                    * এইচএসসি বা সমমানের পরীক্ষায় ২০২১ অথবা ২০২২ ইংরেজি সালে বিজ্ঞান বিভাগ থেকে উত্তীর্ণ এবং এসএসসি বা সমমানের পরীক্ষায় ২০১৯ অথবা ২০২০ ইংরেজি সালে বিজ্ঞান বিভাগ থেকে উত্তীর্ণ হতে হবে। এইচএসসি এবং এসএসসি পরীক্ষায় সর্বমোট নূন্যতম জিপিএ ৭.০০ থাকতে হবে। তবে কোন পরীক্ষায় জিপিএ (GPA) ৩.০০ এর কম গ্রহণযোগ্য হবে না এবং উভয় পরীক্ষায় জীববিজ্ঞানে নূন্যতম জিপিএ ৩.০০ থাকতে হবে।
                                </p>
                            </div>
                        </div>


                        <div class="group outline-none accordion-section mb-1 rounded-md" tabindex="1">
                            <div class="group bg-purple-200 flex rounded-md justify-between px-4 py-3 items-center text-purple-700 font-medium transition ease duration-500 cursor-pointer pr-10 relative">
                                <div class="group-focus:text-blue-800 text-lg font-medium transition ease duration-500">
                                    ডিপ্লোমা এন্ড মিডওয়াইফারি পড়ার যোগ্যতা কি?
                                </div>
                                <div class="h-8 w-8 border border-purple-800 rounded-full  transform transition ease duration-500 group-focus:text-blue-800 group-focus:-rotate-180 group-focus:border-blue-800 absolute top-0 right-0 mb-auto text-purple-600 ml-auto mt-2 mr-2   pt-1 pl-[3px]">
                                    <FiChevronDown className=' text-2xl' />
                                </div>
                            </div>
                            <div class="group-focus:max-h-screen max-h-0 bg-purple-100 px-4 overflow-hidden ease duration-500">
                                <p class="p-2 text-gray-600 text-justify">
                                    <span className=' font-bold'>উত্তর:</span>  ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি (Diploma Nursing)/ ডিপ্লোমা ইন মিডওয়াইফারি পড়ার যোগ্যতা <br />
                                    * আবেদনকারীকে বাংলাদেশের স্থায়ী নাগরিক হতে হবে। <br />
                                    * এইচএসসি বা সমমানের পরীক্ষায় ২০২১ অথবা ২০২২ ইংরেজি সালে এবং এসএসসি বা সমমানের পরীক্ষায় ২০১৯ অথবা ২০২০ ইংরেজি সালে যেকোন বিভাগ থেকে উত্তীর্ণ হতে হবে। এসএসসি ও এইচএসসি বা সমমান পরীক্ষায় সর্বমোট নূন্যতম জিপিএ (GPA) ৬.০০ থাকতে হবে। তবে কোন একটি পরীক্ষায় নূন্যতম জিপিএ ২.৫০ এর কম গ্রহণযোগ্য হবে না।
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