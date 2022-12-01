import React from 'react';
import aboutimg from '../../Assect/about.gif'
import { BsRecordCircle, BsTelephoneFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate()
    return (
        <div className=' lg:mt-[400px] md:mt-[500px] mt-[900px] py-10 '>
            <div className=' max-w-7xl mx-auto lg:flex items-center px-5'>
                <div className=' lg:w-[45%] w-full '>
                    <img className=' mx-auto lg:mx-0' src={aboutimg} alt="aboutimg" />
                </div>
                <div className=' lg:w-[52%] w-full lg:text-left text-center pr-2 py-5'>
                    <h4 className=' font-bold text-lg text-purple-600'>মেডুলা'স এর বিশেষত্ব</h4>
                    <h1 className=' xl:text-5xl text-4xl font-bold mb-3 xl:leading-[60px] leading-[40px] mt-5 mx-auto lg:mx-0 xl:mt-0 md:w-7/12 w-full lg:w-10/12'>সাফল্য অর্জনে সঠিক দিক নির্দেশনাই সর্বোত্তম হাতিয়ার</h1>
                    <p className=' text-gray-600 xl:mb-8 mb-4 text-justify'>নার্স হওয়ার স্বপ্নপূরণে মেডুলা'স শিক্ষা পরিবার এর আয়োজন 'মেডুলা'স নার্সিং ভর্তি প্রস্তুতি প্রোগ্রাম’ ।
                        শিক্ষার্থীদের জন্য যেখানে রয়েছে অভিজ্ঞ শিক্ষকমন্ডলীর ক্লাস, লেকচার শিট, ভর্তি গাইড, ডেইলি এক্সাম, উইকলি এক্সাম, সাবজেক্ট ফাইনাল এক্সাম, স্পেশাল মডেল টেস্ট সহ অনন্য সেবাসমূহ।</p>
                    <div className=' grid md:grid-cols-2 grid-cols-1 mb-8 gap-5'>
                        <div className=' flex items-center gap-3 bg-white  py-4 p-2 hover:shadow-purple-300 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-purple-600' />
                            <h1 className=' text-lg font-medium'>দেশ সেরা রেজাল্ট ও সাফল্য</h1>
                        </div>
                        <div className=' flex items-center gap-3 bg-white hover:shadow-purple-300  py-4 p-2 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-purple-600' />
                            <h1 className=' text-lg font-medium'>অভিজ্ঞ শিক্ষকমন্ডলীদ্বারা ক্লাস গ্রহ</h1>
                        </div>
                        <div className=' flex items-center gap-3 bg-white hover:shadow-purple-300  py-4 p-2 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-purple-600' />
                            <h1 className=' text-lg font-medium'>সময়ের মধ্যে কোর্স সম্পন্ন করা</h1>
                        </div>
                        <div className=' flex items-center gap-3 bg-white hover:shadow-purple-300  py-4 p-2 rounded-lg shadow-md '>
                            <BsRecordCircle className=' text-xl text-purple-600' />
                            <h1 className=' text-lg font-medium'>Analysis রিপোর্ট ও SMS রেজাল্ট</h1>
                        </div>
                    </div>
                    <div className=' md:flex items-center gap-12'>
                        <button onClick={() => navigate('/contact')} className=' py-2 px-8 bg-purple-600 border border-purple-600 hover:bg-transparent hover:text-purple-600 text-white rounded-lg transition-all duration-300 ease-in-out'>যোগাযোগ</button>
                        <div className=' justify-center mt-5 md:mt-0 flex items-center gap-3 hover:text-purple-600 cursor-pointer'>
                            <div className=' h-10 w-10 rounded-full flex items-center justify-center bg-purple-100'>
                                <BsTelephoneFill />
                            </div>
                            <h1 className=' text-gray-800'>+8801972343925</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;