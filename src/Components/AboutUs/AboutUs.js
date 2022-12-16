import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BsCircleSquare } from 'react-icons/bs';
import aboutusImg from '../../Assect/aboutus.gif'
import aboutBgimg from '../../Assect/aboutBg.jpg'
import shaonImg from '../../Assect/shaon.jpg'
import susantoImg from '../../Assect/susanto.jpg'
const AboutUs = () => {
    return (
        <div className='max-w-7xl mx-auto px-5'>


            <div className=' my-16'>
                <div className=' flex items-start text-xl gap-3'>
                    <BsCircleSquare />
                    <h1><span className=' text-pink-600'>পরিচালনা পরিষদ</span></h1>
                </div>
                <div className=' flex items-center gap-10 justify-center'>

                    <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-pink-300">
                        <img src={aboutBgimg} class="w-full" />
                        <div class="flex justify-center -mt-8">
                            <img src={susantoImg} class="rounded-full h-40 w-40 border-solid border-white border-2 -mt-3" />
                        </div>
                        <div class="text-center px-3 pb-6 pt-2">
                            <h3 class=" text-lg font-bold text-white font-sans">সুশান্ত বালা</h3>
                            <p className=' text-gray-700'>পরিচালক-মেডুলা'স শিক্ষা পরিবার</p>
                        </div>

                    </div>

                    <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-pink-300">
                        <img src={aboutBgimg} class="w-full" />
                        <div class="flex justify-center -mt-8 ">
                            <img src={shaonImg} class="rounded-full h-40 w-40 border-solid border-white border-2 -mt-3" />
                        </div>
                        <div class="text-center px-3 pb-6 pt-2">
                            <h3 class="text-white text-lg font-bold font-sans">মোঃ শাওন সিকদার</h3>
                            <p className=' text-gray-700'>পরিচালক-মেডুলা'স শিক্ষা পরিবার</p>
                        </div>

                    </div>
                </div>
            </div>




            <div className='text-lg text-justify w-2/3 mx-auto border border-purple-600  p-5 rounded shadow-md shadow-gray-300 hover:shadow-purple-300 my-10'>
                <span className=' font-bold '>পরিচালকের বাণী </span>
                <h1 className='  text-justify my-1'> সুপ্রিয় শিক্ষার্থী বন্ধুরা, </h1>
                <h1 className=' my-2'>আস্সালামু আলাইকুম। হযরত শাহ মুখদুম (রহ.) এর স্মৃতি বিজড়িত পূণ্যভূমি এবং পদ্মা বিধৌত এই শিক্ষানগরী রাজশাহীতে তোমাদের সু-স্বাগতম। “এ তুফান ভারি দিতে হবে পাড়ি, নিতে হবে তরী পার” জীবন নামের এই তরীকে তীরে পৌছাতে হলে এস.এস.সি ও দাখিল পরিক্ষার পরে বিশ্রামের কোন সুযোগ নেই। তোমরা জান যে, প্রতিযোগীদের তুলনায় সরকারী নার্সিং গুলোতে আসন সংখ্যা কম। হাজার হাজার প্রতিযোগির মধ্যে তোমাকে জায়গা করে নিতে হবে তোমার কাঙ্খিত স্থানে, পৌছাতে হবে তোমার কাঙ্খিত লক্ষ্যে এজন্য প্রয়োজন তোমার প্রত্যয়দীপ্ত বাসনা এবং পরিশ্রম মুখর পড়াশোনার পাশাপাশি মেধার যথাযথ যত্ন ও সঠিক দিক নির্দেশনা। তোমার মেধাকে ভর্তির এই মহাযুদ্ধে উপযোগী করে গড়ে তোলাই আমাদের দায়িত্ব।</h1>

                <p className=' my-3'> তোমার সম্ভাবনাময় জীবনকে সফলতার দ্বার প্রান্তে পৌঁছানোর লক্ষ্যে আন্তরিক সহযোগীতা ও দিক নির্দেশনার আশ্বাস নিয়ে অপেক্ষা করছি আমরা মেডুলা'স পরিবার। বর্তমান বিশ্বে আমরা এক চ্যালেঞ্জিং সময় অতিক্রম করছি। তথ্য-প্রযুক্তির এই যুগে প্রতিদিনই পৃথিবীর জ্ঞানভান্ডারে যুক্ত হচ্ছে নতুন নতুন জ্ঞান ও প্রযুক্তি। কিন্তু বিজ্ঞানের উন্নয়ন হচ্ছে রকেটের গতিতে আর তার সাথে পাল্লা দিয়ে উল্কার গতিতে ঘটে চলেছে নৈতিক অধঃপতন। </p>

                <p className=' my-3'>দূর্নীতি, অপসংস্কৃতি, রাজনৈতিক দূর্বৃত্তায়ন থেকে আমাদের প্রিয় বাংলাদেশকে রক্ষা করা এখন বড় চ্যালেঞ্জ। কিন্তু এই চ্যালেঞ্জকে মোকাবেলা করার কোন পদক্ষেপ নেই আমাদের এই শিক্ষা ব্যবস্থায়। পৃথিবীর সব জ্ঞানে পণ্ডিত হলেও নৈতিক জ্ঞান না থাকলে তাকে পৃথিবীর সবচেয়ে বড় মূর্খ বলা হয়ে থাকে। এ থেকে উত্তরণের জন্য প্রয়োজন মেধা ও নৈতিকতার সমন্বয়। </p>

                <p className=' my-3 '>
                    তোমরাই পারবে মেধা ও নৈতিকতার সমন্বয় ঘটিয়ে এ সমাজকে পরিবর্তন করতে এবং একটি সুন্দর সমাজ গড়তে। তোমরাই পারবে একটি সমৃদ্ধ বাংলাদেশ গড়তে যেখানে থাকবে আদর্শ ও সুন্দরের পূর্ণতা। তাই তোমাদের উজ্জল সফলতা ও লালিত স্বপ্নকে বাস্তবে রূপদানের জন্যে আমরা বরাবরের মতই সদা প্রস্তুত। অতীতের মতই আমাদের স্বর্নোজ্জ্বল সাফল্যের অংশীদার হবে তুমি এবং তোমার পদ-চারনায় মুখরিত হবে নার্সিং ক্যাম্পাস গুলো। এই প্রত্যাশায়… </p>
                <p className=' mt-3'>পরিচালক</p>
                <p className=' font-bold'>মেডুলা'স  কোচিং, খুলনা শাখা</p>
            </div>

            <div className=' flex items-center justify-between'>
                <div>
                    <img src={aboutusImg} alt="aboutusImg" />
                </div>
                <div>
                    <h1 className=' text-3xl font-bold text-purple-600 mb-4'>আমাদের স্বাতন্ত্র্য :</h1>
                    <ul className=' text-lg'>
                        <li className=' flex items-start gap-2'><AiOutlineSend className=' mt-1 text-purple-600' />পরীক্ষার উত্তর পত্র O.M.R মেশিনে ডিজিটাল পদ্ধতিতে মূল্যায়ন ও তাৎক্ষণিক ফল প্রকাশ।</li>
                        <li className=' flex items-start gap-2'><AiOutlineSend className=' mt-1 text-purple-600' />পরীক্ষার ফলাফল মোবাইলে SMS এর মাধ্যমে ছাত্র-ছাত্রী ও অভিভাবকদের জানানো।</li>
                        <li className=' flex items-start gap-2'><AiOutlineSend className=' mt-1 text-purple-600' />প্রতি লেকচারের পর কমেন্ট সীটের মাধ্যমে শিক্ষার্থীদের মতামত গ্রহণ।</li>
                        <li className=' flex items-start gap-2'><AiOutlineSend className=' mt-1 text-purple-600' />অপ্রতিদ্বন্দী কর্ণিয়া গাইড, লেকচার শীট ফ্রি।</li>
                        <li className=' flex items-start gap-2'><AiOutlineSend className=' mt-1 text-purple-600' />সাধারণ জ্ঞান ও ইংরেজী এর প্রতি বিশেষ গুরুত্বারোপ।</li>
                        <li className=' flex items-start gap-2'><AiOutlineSend className=' mt-1 text-purple-600' />ছাত্র ও ছাত্রীদের জন্য পৃথক ব্যাচের সুব্যবস্থা রয়েছে।</li>
                        <li className=' flex items-start gap-2'><AiOutlineSend className=' mt-1 text-purple-600' />নিজস্ব জেনারেটরের মাধ্যমে সার্বক্ষণিক বিদ্যুতের সুব্যবস্থা।</li>
                        <li className=' flex items-start gap-2'><AiOutlineSend className=' mt-1 text-purple-600' />শীতাতপ নিয়ন্ত্রিত রুমে ক্লাসের সুব্যবস্থা।</li>
                        <li className=' flex items-start gap-2'><AiOutlineSend className=' mt-1 text-purple-600' />মাল্টিমিডিয়ার মাধ্যমে ক্লাসের সুব্যবস্থা।</li>
                        <li className=' flex items-start gap-2'><AiOutlineSend className=' mt-1 text-purple-600' />সিসি ক্যামেরার মাধ্যমে সার্বক্ষণিক তত্ত্বাবধায়ন।</li>
                        <li className=' flex items-start gap-2'><AiOutlineSend className=' mt-1 text-purple-600' />ঘরে বসেই প্রতিদিনের রেজাল্ট দেখতে পাবে।</li>
                    </ul>
                </div>
            </div>


            <div className='w-2/3 mx-auto border border-purple-600 text-lg  p-5 rounded shadow-md shadow-gray-300 hover:shadow-purple-300 my-10 text-justify'>
                <h1 className=' text-xl font-bold mb-2 text-purple-600'>ভর্তি কোচিং এর প্রয়োজনীয়তা:</h1>
                <p>মাধ্যমিক ও উচ্চ মাধ্যমিক পর্যায়ে ভালো রেজাল্ট করা যত না কঠিন তার চেয়ে অনেক কঠিন IHT-MATS & Nursing এ চান্স পাওয়া। কারণ বিপুল সংখ্যক ছাত্র/ছাত্রীর প্রত্যাশা থাকে উচ্চ শিক্ষা গ্রহনের কিন্তু ভর্তিচ্ছুদের তুলনাই আসন স্বল্পতা ছাত্র/ছাত্রীদের মুখোমুখিভর্তি কোচিং এর প্রয়োজনীয়তা করে দিচ্ছে তীব্র প্রতিযোগীতা। ভর্তি পরীক্ষার প্রশ্নসমূহ পাঠ্যপুস্তক থেকে ভিন্নরূপ ও টেকনিক্যাল হয়ে থাকে যা একজন শিক্ষার্থীর পক্ষে ব্যতিক্রম অনুশিলন ছাড়া সীমিত সময়ের মধ্যে আয়ত করা সম্ভব হয়ে উঠে না। এ ছাড়া সাধারণত মাধ্যমিক পর্যায়ে ছাত্র/ছাত্রীরাও পুরো সলেবাস না পড়ে সাজেশন আকারে সীমিত অধ্যায় সম্পর্কে ধারণা নেয় ফলে Conception কখনো Clear থাকে না। কিন্তু ভর্তি পরীক্ষা পুরো সিলেবাসের উপর হওয়ায় অনেক ভালো ছাত্রছাত্রীর পক্ষে চান্স পাওয়া সম্ভব হয়ে উঠে না। অনীবার্যভাবে কাঙ্খিত রেজাল্ট অনিশ্চিত হয়ে পড়ে। আর এর যোগ্যতা কেবল মাত্র কেচিং এর মাধ্যমেই অর্জন করা সম্ভব। তাই বর্তমান সময়ে কোচিং এর গুরুত্ব সর্বজন শ্বীকৃত এবং পরিক্ষিত। SSC ও HSC পরীক্ষার ৩/৪ মাস ছাত্রছাত্রীদের জীবনে অত্যান্ত গুরুত্বপূর্ণ। এই স্বল্প সময়ের মাঝে টিকে থাকবে তারাই যারা কৌশলী ও পরিশ্রমী। কৌশল ও পরিশ্রমকে পুঁজি করে ভাল ফলাফলের অধিকারী ছাত্রছাত্রীরা যেমন ভর্তি যুদ্ধে উত্তীর্ণ হয়।</p>
            </div>
            <div className='w-2/3 mx-auto border border-purple-600 text-lg  p-5 rounded shadow-md shadow-gray-300 hover:shadow-purple-300 my-10 text-justify mb-16'>
                <h1 className=' text-xl font-bold mb-2 text-purple-600'>অন্যান্য কোচিং থেকে মেডুলা'স কেন আলাদা:</h1>
                <div>মেডুলা'স একমাত্র কোচিং যেখানে ক্লাস এবং পরীক্ষা মেডিকেল, ইঞ্জিনিয়ারিং ও বিশ্ববিদ্যালয়ের ছাত্র ও পরিচালকের সরাসরি তত্ত্বাবধানে অনুষ্ঠিত হয়ে থাকে। অথচ অন্য সকল প্রতিষ্ঠানে পরিচালক নিজে পড়ান না বরং জুনিয়র শিক্ষক নিয়ে ক্লাস করান। তাই ছাত্র-ছাত্রীরা ক্লাসে তেমন উপকৃত হয় না।
                    আমরা কেবলমাত্র অভিজ্ঞ শিক্ষক দ্বারা সমস্ত কোর্সের কার্যক্রম পরিচালনা করি। তাই আমাদের পড়ানোর মান সব সময় অন্য সব কোচিং সেন্টারের চেয়ে হাজার গুণ উন্নত থাকে। <br />
                    আমাদের ভর্তি পরীক্ষায় প্রস্তুতির পাশাপাশি আনলাইন ফরম পুরণ ও ফর্ম জমা, জেলা কোটা সম্পর্কিত তথ্য বা পরামর্শ প্রদান ইত্যাদি ব্যাপারে সরাসরি সাহায্য করি, যা অন্য কোথাও কেউ করে না।</div>
            </div>


            <div className=' my-10'>
                <div className=' flex items-start text-xl gap-3'>
                    <BsCircleSquare />
                    <h1><span className=' text-pink-600'>এক নজরে মেডুলা'স ও অন্যান্য কোচিং সেন্টার এর পার্থ্যক্য</span></h1>
                </div>
                <div className=' mt-4  mx-auto'>
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-center text-gray-500 ">
                            <thead class="w-full text-gray-700 text-lg uppercase  bg-gradient-to-r from-white via-pink-200 to-white ">
                                <tr className=' w-full'>
                                    <th scope="col" class="py-2 px-6 w-1/2">
                                        মেডুলা'স
                                    </th>
                                    <th scope="col" class="py-2 px-6 w-1/2">
                                        অন্যান্য কোচিং সেন্টার
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white hover:bg-pink-50 border-b border-t border-pink-300 text-base font-bold w-full">
                                    <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-pink-300 whitespace-nowrap w-1/2 ">
                                        শুধুমাত্র নার্সিং ভর্তি কোচিং।
                                    </th>
                                    <td class="py-2 px-6 w-1/2">
                                        একাধিক প্রতিষ্ঠানের কোচিং সেন্টার।
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-pink-50 border-b border-pink-300 text-base font-bold w-full">
                                    <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-pink-300 whitespace-nowrap w-1/2">
                                        মেডিকেল, ইঞ্জিনিয়ারিং ও বিশ্ববিদ্যালয়ের মেধাবী ছাত্র ও পরিচালক দ্বারা পরিচালিত।
                                    </th>
                                    <td class="py-2 px-6 w-1/2">
                                        বিভিন্ন জুনিয়র ছাত্র-ছাত্রী ক্লাস নিয়ে থাকে।
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-pink-50 border-b border-pink-300 text-base font-bold w-full">
                                    <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-pink-300 whitespace-nowrap w-1/2">
                                        পরিচালকগণ নিজেরাই সকল বিষয় এর ক্লাস এবং পরীক্ষা তত্ত্বাবধান করেন।
                                    </th>
                                    <td class="py-2 px-6 w-1/2 ">
                                        পরিচালক ক্লাস নেন না এবং তার দেখাই পাওয়া যায় না।
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-pink-50 border-b border-pink-300 text-base font-bold w-full">
                                    <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-pink-300 whitespace-nowrap w-1/2">
                                        অভিজ্ঞ শিক্ষকদ্বারা ক্লাস নেওয়া হয়।
                                    </th>
                                    <td class="py-2 px-6 w-1/2">
                                        জুনিয়র শিক্ষক দিয়ে ক্লাস নিয়ে ছাত্র-ছাত্রীদের ধোকা দেন।
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-pink-50 border-b border-pink-300 text-base font-bold w-full">
                                    <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-pink-300 whitespace-nowrap w-1/2">
                                        আমরাই শুধুমাত্র লাল ও সবুজ কালিতে বই দাগিয়ে দেই।
                                    </th>
                                    <td class="py-2 px-6 w-1/2">
                                        বই দাগিয়ে দেয়া হয় না।
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-pink-50 border-b border-pink-300 text-base font-bold w-full">
                                    <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-pink-300 whitespace-nowrap w-1/2">
                                        সর্বাধিক তথ্য ও নির্ভূল নোট প্রদান করা হয়।
                                    </th>
                                    <td class="py-2 px-6 w-1/2">
                                        নোট দেয়া হয় না, বরং দেয়া হয় ভুলে ভরা লেকচার সিট।
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-pink-50 border-b border-pink-300 text-base font-bold w-full">
                                    <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-pink-300 whitespace-nowrap w-1/2">
                                        ছাত্র শিক্ষক সম্পর্ক অত্যন্ত সহজ। ফলে খুব সহজে ছাত্র-ছাত্রী সকল সমস্যা সমাধান করে নিতে পারে।
                                    </th>
                                    <td class="py-2 px-6 w-1/2">
                                        ছাত্র শিক্ষক সম্পর্ক সহজ নয়।
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-pink-50 border-b border-pink-300 text-base font-bold w-full">
                                    <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-pink-300 whitespace-nowrap w-1/2">
                                        একাধিক Question Seet এ পরীক্ষা নেয়া হয়।
                                    </th>
                                    <td class="py-2 px-6 w-1/2">
                                        বাংলাদেশে কোন কোচিং-এ একাধিক Question Seet এ পরীক্ষা নেয়া হয় না।
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-pink-50 border-b border-pink-300 text-base font-bold w-full">
                                    <th scope="row" class="pt-2 pb-2.5 px-6 font-medium text-gray-900 border-r border-pink-300 whitespace-nowrap w-1/2">
                                        প্রতিদিন Class Test MCQ গ্রহণ করা এবং পড়া ধরা হয়।
                                    </th>
                                    <td class="pt-2 pb-2.5 px-6 w-1/2">
                                        Class Test গ্রহণ বা পড়া ধরা হয় না।
                                    </td>
                                </tr>


                                <tr class="bg-white hover:bg-pink-50 border-b border-pink-300 text-base font-bold ">
                                    <th scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-pink-300 whitespace-nowrap w-1/2">
                                        বিশেষ আকর্ষণ: Special Batch (সম্পূর্ণ ফ্রি)
                                    </th>
                                    <td class="py-2 px-6 w-1/2">
                                        এরকম কোন Special Batch গঠন করা হয় না।
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default AboutUs;