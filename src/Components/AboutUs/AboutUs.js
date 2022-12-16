import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import aboutusImg from '../../Assect/aboutus.gif'
const AboutUs = () => {
    return (
        <div className='max-w-7xl mx-auto px-5'>
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
        </div>
    );
};

export default AboutUs;