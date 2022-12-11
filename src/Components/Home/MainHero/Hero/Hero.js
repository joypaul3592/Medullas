import React from "react";
import { useNavigate } from "react-router-dom";
import heroimg from "../../../../Assect/hero.png";
import style1 from "../../../../Assect/style1.png";
import style4 from "../../../../Assect/style4.png";
const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className="relative bg-gradient-to-r from-pink-50 to-sky-100 z-0">
            <div className=" relative max-w-7xl mx-auto lg:flex items-center pt-10 pb-32 px-5 justify-between">
                <div className=" lg:text-left xl:w-[40%] lg:w-[45%] w-full pr-10 text-center">
                    <h4 className="  text-sm font-bold text-purple-600 ml-1 ">
                        দেশ সেরা নার্সিং ভর্তি কোচিং
                    </h4>
                    <h1 className=" font-bold xl:text-7xl xl:leading-[6.5rem]  text-6xl leading-[5.5rem] ">
                        মেডুলা'স নার্সিং <br />
                        ভর্তি কোচিং
                    </h1>
                    <p className="text-lg  mb-5 text-justify">
                        নার্সিং একটি মহৎ সেবামূলক পেশা। তাছাড়া নার্সিং-এর ক্যারিয়ার উজ্জ্বল।
                        যার জন্য এর ভর্তি পরীক্ষায় হয়ে থাকে তুমুল প্রতিযোগিতা । তাই, এই
                        প্রতিযোগিতায় সফল হতে, সুষম প্রস্তুতি আর সঠিক দিক নির্দেশনা অনুসরণ
                        করার পাশাপাশি বেশি বেশি পরীক্ষা দিয়ে নিজের প্রস্তুতি শাণিত করার
                        বিকল্প নেই।
                    </p>
                    <button onClick={() => navigate('/adfrom')} className=" py-2 px-7 border border-purple-600 bg-purple-600 text-white rounded-full hover:bg-transparent hover:text-purple-600 transition-all duration-200 ease-in-out">
                        নিবন্ধন করুন
                    </button>
                </div>

                <div className=" relative flex items-end lg:justify-end justify-center lg:w-[60%] w-full md:pt-10 lg:pt-0">
                    <img className=" xl:h-[75vh] md:h-[60vh] xl:-mr-20 -mr-10" src={heroimg} alt="heroimg" />
                </div>
                <div className="  absolute top-4 -left-24 opacity-40">
                    <img className=" h-40 " src={style1} alt="style1" />
                </div>
            </div>
            <div className=" absolute bottom-60 lg:bottom-32 right-5 lg:left-[47%] opacity-40">
                <img className=" h-20 " src={style4} alt="style4" />
            </div>

            <div className=" absolute lg:top-32 top-20 lg:left-[52%] opacity-40 right-10">
                <img className=" h-28 " src={style4} alt="style4" />
            </div>
        </div>
    );
};

export default Hero;
