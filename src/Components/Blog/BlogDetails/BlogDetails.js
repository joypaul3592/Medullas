import React from 'react';
import { BsDiamondHalf } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import blog1img from '../../../Assect/blog1.png'
import blog2img from '../../../Assect/blog2.png'
import blog3img from '../../../Assect/blog3.png'
import blogcard1 from '../../../Assect/blog4.png'
import blogcard2 from '../../../Assect/blogcard1.png'
import blogcard3 from '../../../Assect/blogcard2.png'

const BlogDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const studentId = (id - 1)
    const blogDatas = [
        {
            id: 1,
            title: 'ছেলেরা কি নার্সিং পড়তে পারে? ',
            date: '০৭-১৫-২০২১',
            address: 'খুলনা, বাংলাদেশ।',
            details: ' হ্যা, ছেলেরা নার্সিং পড়তে পারে। ব্যাচেলর অব সায়েন্স ইন নার্সিং ও ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি কোর্সে ভর্তির জন্য পুরুষ প্রার্থীর ক্ষেত্রে সরকারি প্রতিষ্ঠানে নির্দিষ্ট আসনের ১০ শতাংশ এবং বেসরকারি প্রতিষ্ঠানের নির্দিষ্ট আসনের ২০ শতাংশ ভর্তিযোগ্য হইবে। ডিপ্লোমা ইন মিডওয়াইফারি কোর্সে শুধু নারী প্রার্থী আবেদন করতে পারবে।',
            img: blog1img,
        },
        {
            id: 2,
            title: 'নার্সিং এ ক্যারিয়ার কেমন হবে?',
            date: '০৫-২৫-২০২২',
            address: 'ঢাকা, বাংলাদেশ।',
            details: ' আমাদের দেশে প্রয়োজনের তুলনায় যোগ্য নার্সের সংখ্যা এখনো কম। কারণ অধিকাংশ মেধাবী মেয়েরা নার্সিং পড়ার যোগ্যতা থাকা সত্যেও শুধুমাত্র সঠিক ধারণার অভাবে মহৎ এ পেশায় আসতে পারছে না। তাই আমরা আশা করছি এই লেখার মাধ্যমে আপনি নার্সিংয়ে পড়ার যাবতীয় তথ্য জেনে গেছেন। দেশে এখন প্রায় সব জেলা-উপজেলা শহরগুলোতেই সরকারি বেসরকারি হাসপাতাল বা ক্লিনিক গড়ে উঠেছে। এর ফলে ক্রমাগত বেড়ে চলছে হাসপাতালের সংখ্যা। আর এসব প্রতিষ্ঠানে প্রতিবছরই প্রচুর সংখ্যক নার্সের প্রয়োজন হয়। তাই চাইলে এ পেশায় আসতে পারেন আপনিও। তবে শুধু দেশেই নয়, বর্হিবিশ্বে দক্ষ ও অভিজ্ঞ নার্সের চাহিদা প্রতিনিয়ত বেড়েই চলেছে। মধ্যপ্রাচ্য, অস্ট্রেলিয়া ও কানাডাসহ বিশ্বের বেশকিছু উন্নত দেশে বাংলাদেশের পেশাদার নার্সরা সুনামের সাথে কাজ করছেন। তাই মানব সেবাধর্মী এ পেশায় যুক্ত হওয়ার মাধ্যমে আপনিও অর্জন করতে পারেন সামাজিক মর্যাদা ও ভালো আয়ের সুযোগ।',
            img: blog2img,
        },
        {
            id: 3,
            title: 'নার্সদের কর্মক্ষেত্র কোথায়?',
            date: '০৮-২৮-২০২২',
            address: 'বরিশাল, বাংলাদেশ।',
            details: 'সরকারী-বেসরকারী উভয় সেক্টরে নার্সদের কর্মক্ষেত্র প্রায় একই রকম হয়ে থাকে। তবে সরকারী নার্সদের কাজের ক্ষেত্র কিছুটা বিস্তৃত। সরকারী নার্সরা সরকারি হাসপাতাল ও স্বাস্থ্যকেন্দ্রে এবং আইনশৃঙ্খলা ও সামরিক বাহিনীর চিকিৎসা বিভাগে দায়িত্ব পেয়ে থাকেন।পাশাপাশি দেশের জরুরী প্রয়োজনে আকষ্মিক কোন দুর্যোগ মোকাবিলায়ও সরকারী নার্সদের দায়িত্ব দেয়া হয়। অপরদিকে বেসরকারী নার্সরা সাধারণত বেসরকারি হাসপাতাল ও স্বাস্থ্যকেন্দ্রে এবং ব্যক্তিগত ক্লিনিকে কাজ করে থাকেন। তবে নার্সদের কাজেরও বেশকিছু পদ রয়েছে। কাজের ক্ষেত্র ও অভিজ্ঞতা অনুযায়ী আপনি অ্যাসিস্ট্যান্ট নার্স, স্টাফ নার্স, ওটি সিস্টার বা নার্সিং সুপারভাইজার হিসেবে কাজ করার সুযোগ পাবেন। আবার অনেকে নার্সিং কলেজে ইন্সট্রাক্টর বা ডেমোনস্ট্রেটর ইনচার্জ হিসেবেও নিয়োগ পেয়ে থাকেন। এছাড়া ভালো দক্ষতা থাকলে নার্সিং অধিদপ্তরে প্রজেক্ট অফিসার বা সহকারী পরিচালক পদেও কাজ করতে পারেন',
            img: blog3img,
        },
        {
            id: 4,
            title: 'নার্সিং ভর্তি পরীক্ষার বই কোনটা পড়বো?',
            date: '০৬-১৩-২০২২',
            address: 'রংপুর, বাংলাদেশ।',
            details: 'বোর্ড বই বা মেইন বইয়ের বিকল্প নেই। গাইড বই কখনোই মূল বইয়ের বিকল্প নয়। তাই বেশি বেশি মূল বই পড়ুন। বিএসসি ইন নার্সিং এর জন্য: এসএসসি’র বাংলা ব্যাকরণ, ইংরেজি গ্রামার, সাধারন গনিত এবং এইচএসসির পদার্থ, রসায়ন, জীববিজ্ঞান এবং সাধারন জ্ঞানের যেকোন একটি বই। ডিপ্লোমা ইন নার্সিং/ডিপ্লোমা ইন মিডওয়াইফারি এর জন্য: এসএসসি’র বাংলা ব্যাকরণ, ইংরেজি গ্রামার, সাধারন গনিত, সাধারন বিজ্ঞান এবং সাধারন জ্ঞানের যেকোন একটি বই। সেই সাথে বিগত সালের প্রশ্নের ধরন দেখার জন্য ভাল মানের একটি ভর্তি গাইড ফলো করুন',
            img: blogcard1,
        },
        {
            id: 5,
            title: 'আলাদা ভাবে পরীক্ষা হবে নাকি একই সাথে?',
            date: '০২-২১-২০২১',
            address: 'নওগা, বাংলাদেশ।',
            details: 'একই দিনে, একই সময়ে নার্সিং ভর্তি পরীক্ষা অনুষ্ঠিত হবে। আপনি যেকোনো একটি কেন্দ্রে পরীক্ষা দিলেই হলো। পরীক্ষার কেন্দ্র এডমিট কার্ডে লেখা থাকবে। যেই কেন্দ্রে পরীক্ষা দিতে ইচ্ছুক/সুবিধা হয়, সেখানেই পরীক্ষা দিতে পারবেন। আপনার প্রাপ্ত নম্বর এবং কলেজ/ইন্সটিটিউট চয়েস এর পর্যায়ক্রমের উপর নির্ভর করে আপনি কোন নার্সিং কলেজ/ইনস্টিটিউটে চান্স পাবেন।',
            img: blogcard2,
        },
        {
            id: 6,
            title: 'কোন কলেজ/ইনস্টিটিউটে কম নম্বরে চান্স হয়?',
            date: '০৯-১৬-২০২২',
            address: 'চাঁদপুর, বাংলাদেশ।',
            details: 'আবেদন করার সময় পছন্দের পর্যায়ক্রমে সবগুলো নার্সিং কলেজ/ইনস্টিটিউট চয়েস দেওয়া যায়। ঢাকায় বিএসসি নার্সিং কলেজ ২ টি (ঢাকা নার্সিং কলেজ এবং কলেজ অফ নার্সিং, শের ই বাংলা নগর)। এবং ডিপ্লোমা ইন নার্সিং & মিডওয়াইফারি ইন্সটিটিউট ১ টি (মিটফোর্ড নার্সিং ইন্সটিটিউট, ঢাকা)। এই গুলোতে চান্স পেতে হলে বেশি মার্ক পেতে হবে। ঢাকার বাইরে তুলনামূলক ভাবে অল্প নম্বর পেয়ে চান্স পাওয়া যায়। বিগত বছরগুলোর অভিজ্ঞতা থেকে বলা যায়, মেয়েদের জন্য ৮০+ পেলে চান্স পাওয়া আশা করা যায়। কিন্তু, ছেলেদের চান্স পেতে হলে ৯০+ মার্ক পেতে হয়।',
            img: blogcard3,
        }

    ]


    return (
        <div className=' max-w-7xl px-5 mx-auto my-12'>
            <div class=" lg:w-1/2 md:w-2/3 w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-md ">
                <div>
                    <img class="rounded-t-lg h-80 mx-auto" src={blogDatas[studentId]?.img} alt="blogImg1" />
                </div>
                <div className=' flex items-center justify-between px-5 mb-3 text-gray-600'>
                    <p>{blogDatas[studentId]?.address}</p>
                    <p>{blogDatas[studentId]?.date}</p>
                </div>
                <div class="p-5 pt-0">
                    <div>
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-purple-600">{blogDatas[studentId]?.title}</h5>
                    </div>
                    <p class="mb-3 font-normal text-gray-700 text-justify ">{blogDatas[studentId]?.details}</p>
                </div>
            </div>



            <div className=' mt-12 flex items-center gap-3 text-lg'>
                <BsDiamondHalf className=' text-purple-600' />
                <h1>সম্পর্কিত পোস্ট..</h1>
            </div>

            <div className='lg:grid lg:grid-cols-3 flex flex-col items-center gap-10 text-center my-10'>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out ">
                    <div>
                        <img class="rounded-t-lg h-60 mx-auto" src={blogDatas[3]?.img} alt="blogImg1" />
                    </div>
                    <div class="p-5">
                        <div>
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{blogDatas[3]?.title}</h5>
                        </div>
                        <p class="mb-3 font-normal text-gray-700 text-justify ">{blogDatas[3]?.details.slice(0, 150)}...</p>
                        <button onClick={() => navigate(`/blogdetails/${blogDatas[3]?.id}`)} class="inline-flex items-center px-6 pt-2.5 pb-1.5 text-sm  text-center text-purple-800 border border-purple-200 bg-purple-200 rounded-lg hover:bg-transparent focus:outline-none focus:ring-blue-300 ">
                            বিস্তারিত পরুন
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out ">
                    <div>
                        <img class="rounded-t-lg h-60 mx-auto" src={blogDatas[4]?.img} alt="blogImg1" />
                    </div>
                    <div class="p-5">
                        <div>
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{blogDatas[4]?.title}</h5>
                        </div>
                        <p class="mb-3 font-normal text-gray-700 text-justify ">{blogDatas[4]?.details.slice(0, 150)}...</p>
                        <button onClick={() => navigate(`/blogdetails/${blogDatas[4]?.id}`)} class="inline-flex items-center px-6 pt-2.5 pb-1.5 text-sm  text-center text-purple-800 border border-purple-200 bg-purple-200 rounded-lg hover:bg-transparent focus:outline-none focus:ring-blue-300 ">
                            বিস্তারিত পরুন
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out ">
                    <div>
                        <img class="rounded-t-lg h-60 mx-auto" src={blogDatas[5]?.img} alt="blogImg1" />
                    </div>
                    <div class="p-5">
                        <div>
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{blogDatas[5]?.title}</h5>
                        </div>
                        <p class="mb-3 font-normal text-gray-700 text-justify ">{blogDatas[5]?.details.slice(0, 150)}...</p>
                        <button onClick={() => navigate(`/blogdetails/${blogDatas[5]?.id}`)} class="inline-flex items-center px-6 pt-2.5 pb-1.5 text-sm  text-center text-purple-800 border border-purple-200 bg-purple-200 rounded-lg hover:bg-transparent focus:outline-none focus:ring-blue-300 ">
                            বিস্তারিত পরুন
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BlogDetails;