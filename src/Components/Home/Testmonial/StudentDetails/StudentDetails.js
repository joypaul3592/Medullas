import React from 'react';
import { BsDiamondHalf } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';

const StudentDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const studentId = (id - 1)

    const StudentsData = [
        {
            id: 1,
            name: 'ত্রয়ী মল্লিক',
            collage: '২০২১-২২ শিক্ষাবর্ষে যশোর নার্সিং এ ২য়',
            img: 'https://i.ibb.co/Pxk0L4y/Triyi-Mollik.jpg',
            review: "আমি ত্রয়ী মল্লিক, মেডুলা'স নার্সিং ভর্তি কোচিং থেকে নার্সিং ভর্তি পরীক্ষায় যশোর নার্সিং এ ২য় স্থান অর্জন করেছি এবং বর্তমানে আমি যশোর নার্সিং ইনস্টিটিউট-এ পড়ছি। মেডুলা'স এর যাবতীয় নোট, গাইড লাইন নার্সিং ভর্তি পরীক্ষায় বিশেষ সহায়ক ভূমিকা পালন করেছে। আমি মনে করি গাইড লাইন হিসাবে মেডুলা'স এর অবদান প্রত্যেক শিক্ষার্থীদের জন্য আদর্শ। মেডুলা'স এর শীট, নোট, শিক্ষকদের পরামর্শ আমার চান্স প্রাপ্তিতে সহায়ক ভূমিকা পালন করেছে। আমি সর্বদা মেডুলা'স এর সাফল্য কামনা করছি।"
        },
        {
            id: 2,
            name: 'ঊর্মি খাতুন',
            collage: '২০২১-২২ শিক্ষাবর্ষে খুলনা নার্সিং এ ৯ম',
            img: 'https://i.ibb.co/DgfCTkb/Urmi-Khatun.jpg',
            review: "আমি ঊর্মি খাতুন। সৃষ্টিকর্তার অসীম কৃপায় আমি ২০১৯-২০ শিক্ষাবর্ষে খুলনা নার্সিং এ ৯ম স্থান অর্জন করেছি। আমার এই সাফল্যের জন্য আমি মেডুলা'স নার্সি ভর্তি কোচিং এর কাছে অত্যন্ত কৃতজ্ঞ। মেডুলা'স নার্সিং ভর্তি কোচিং থেকে প্রাপ্ত গাইডলাইন আমার এই সফলতা অর্জনে অত্যন্ত সহায়ক ভূমিকা পালন করেছে। মেডুলা'স এমন একটি প্রতিষ্ঠান যেখানে একজন শিক্ষার্থীকে তাদের সর্বোচ্চ চেষ্টা দিয়ে গড়ে তোলে। তাই নার্সিং ভর্তিচ্ছু পরীক্ষার্থীদের চান্সপ্রাপ্তিতে মেডিকন নার্সিং ভর্তি কোচিং অত্যন্ত সহায়ক ভূমিকা পালন করবে বলে আমি বিশ্বাস করি। পরিশেষে মেডুলা'স-এর সার্বিক সাফল্য কামনা করছি।"
        },
        {
            id: 3,
            name: 'মুর্শিদা খাতুন',
            collage: '২০২১-২২ শিক্ষাবর্ষে খুলনা নার্সিং এ ৭ম',
            img: 'https://i.ibb.co/jvw9kmn/Murshida-Khatun.jpg',
            review: "আমি মুর্শিদা খাতুন। সৃষ্টিকর্তার অসীম কৃপায় আমি ২০১৯-২০ শিক্ষাবর্ষে খুলনা নার্সিং এ ৭ম স্থান অর্জন করেছি। আমার এই সাফল্যের জন্য আমি মেডুলা'স নার্সি ভর্তি কোচিং এর কাছে অত্যন্ত কৃতজ্ঞ। মেডুলা'স নার্সিং ভর্তি কোচিং থেকে প্রাপ্ত গাইডলাইন আমার এই সফলতা অর্জনে অত্যন্ত সহায়ক ভূমিকা পালন করেছে। মেডুলা'স এমন একটি প্রতিষ্ঠান যেখানে একজন শিক্ষার্থীকে তাদের সর্বোচ্চ চেষ্টা দিয়ে গড়ে তোলে। তাই নার্সিং ভর্তিচ্ছু পরীক্ষার্থীদের চান্সপ্রাপ্তিতে মেডিকন নার্সিং ভর্তি কোচিং অত্যন্ত সহায়ক ভূমিকা পালন করবে বলে আমি বিশ্বাস করি। পরিশেষে মেডুলা'স-এর সার্বিক সাফল্য কামনা করছি।"
        },
        {
            id: 4,
            name: 'তামান্না আক্তার',
            collage: '২০২১-২২ শিক্ষাবর্ষে যশোর নার্সিং এ ৬ষ্ট',
            img: 'https://i.ibb.co/gJYg668/Tamanna-Akter.jpg',
            review: "আমি তামান্না আক্তার, ২০১৯-২০ শিক্ষাবর্ষে যশোর নার্সিং কলেজ-এ চান্স পেয়েছি। আমার নার্সিং এ পড়ার স্বপ্ন বাস্তবায়নে মেডুলা'স নার্সিং ভর্তি কোচিং এর  ভূমিকা অনেক বেশি। মেডুলা'স-এর মত এত যত্নশীল ভাবে প্রতিটা শিক্ষার্থীকে পাঠদান থেকে শুরু করে দৈনিক, সাপ্তাহিক ,মাসিক পরীক্ষা নেয়ার মাধ্যমে ভর্তি পরীক্ষার জন্য অন্য কোনো কোচিং এ যোগ্য প্রার্থী হিসেবে গড়ে তোলা হয় কি না আমার জানা নেই। সঠিক গাইডলাইনর মাধ্যমে চান্স পাওয়ার পথকে সহজতর করতে মেডুলা'স সত্যিই প্রশংসার দাবিদার। মেডুলা'স-কে ধন্যবাদ আমার মত শত শত শিক্ষার্থীর নার্সিং পড়ার স্বপ্নকে বাস্তবে পরিণত করার বন্ধু হিসেবে পাশে থাকার জন্য। আমি মেডুলা'স নার্সিং ভর্তি কোচিং এর ভবিষ্যৎ সাফল্য কামনা করছি।"
        },
        {
            id: 5,
            name: 'রিয়া মন্ডল',
            collage: '২০২১-২২ শিক্ষাবর্ষে যশোর নার্সিং এ ১১তম',
            img: 'https://i.ibb.co/j3m40W6/Ria-Mondol.jpg',
            review: "আমি রিয়া মন্ডল যশোর নার্সিং কলেজ  এর বর্তমান ও নিয়মিত শিক্ষার্থী। নার্সিং ছিল আমার স্বপ্ন। আর এ স্বপ্ন বাস্তবায়নে মেডুলা'স নার্সিং ভর্তি কোচিং ছিল মূল পথপ্রদর্শক। নার্সিং পড়ার স্বপ্ন নিয়ে যখন কোন কিছুতে কূল পাচ্ছিলাম না ঠিক তখনই মেডুলা'স নার্সিং ভর্তি কোচিং-এ ভর্তি হওয়ার সিদ্ধান্ত নেই। এই কোচিং-এর অভিজ্ঞ শিক্ষক মন্ডলীদের পড়ামর্শ ক্লাস, ক্লাস টেস্ট, সাপ্তাহিক ও মাসিক পরীক্ষা গ্রহন সহ কোর্স শেষে রিভিউ ক্লাসের ব্যবস্থা ইত্যাদি পদক্ষেপ ও নিজ প্রচেষ্টায় নার্সিং ভর্তি পরীক্ষায় উত্তীর্ণ হই এবং নিজ স্বপ্ন পূরন হওয়ায় অনেক আনন্দ পাই। আমি সর্বপরি এটাই বলবো যারা নার্সিং করার স্বপ্ন দেখতেছেন আপনাদের জন্য মেডুলা'স নার্সিং ভর্তি কোচিং এক গুরুত্বপূর্ণ ও অতুলনীয় ভুমিকা পালন করবে ও সফলতার লক্ষে পৌঁছাতে সাহায্য করবে বলে আমি মনে করি। পরিশেষে, মেডুলা'স নার্সিং ভর্তি কোচিং এর উন্নতি ও মঙ্গল কামনা করছি।"
        },
        {
            id: 6,
            name: 'তন্নি মল্লিক',
            collage: '২০২১-২২ শিক্ষাবর্ষে খুলনা নার্সিং এ ১৪তম',
            img: 'https://i.ibb.co/pxN67xy/Tonni-Mollik.jpg',
            review: "আমি তন্নি মল্লিক। সৃষ্টিকর্তার অসীম কৃপায় আমি ২০১৯-২০ শিক্ষাবর্ষে খুলনা নার্সিং এ ১৪তম স্থান অর্জন করেছি। আমার এই সাফল্যের জন্য আমি মেডুলা'স নার্সি ভর্তি কোচিং এর কাছে অত্যন্ত কৃতজ্ঞ। মেডুলা'স নার্সিং ভর্তি কোচিং থেকে প্রাপ্ত গাইডলাইন আমার এই সফলতা অর্জনে অত্যন্ত সহায়ক ভূমিকা পালন করেছে। মেডুলা'স এমন একটি প্রতিষ্ঠান যেখানে একজন শিক্ষার্থীকে তাদের সর্বোচ্চ চেষ্টা দিয়ে গড়ে তোলে। তাই নার্সিং ভর্তিচ্ছু পরীক্ষার্থীদের চান্সপ্রাপ্তিতে মেডিকন নার্সিং ভর্তি কোচিং অত্যন্ত সহায়ক ভূমিকা পালন করবে বলে আমি বিশ্বাস করি। পরিশেষে মেডুলা'স-এর সার্বিক সাফল্য কামনা করছি।"
        }

    ]

    return (
        <div className=' max-w-7xl mx-auto px-5 my-5 py-10'>
            <div className='w-11/12  mx-auto lg:flex items-center bg-purple-100 rounded-b-xl rounded-l-xl shadow-xl'>
                <div className=' lg:w-1/2 w-full'>
                    <img className=' w-full h-full rounded-xl' src={StudentsData[studentId].img} alt="" />
                </div>
                <div className='lg:w-1/2 w-full bg-purple-100 px-4 py-5 rounded-b-xl'>

                    <div className=' md:flex items-cente justify-between mb-3'>
                        <h1 className=' text-2xl text-purple-600'><span className=' text-black'>নামঃ </span>{StudentsData[studentId].name}</h1>
                        <h1 className=' text-2xl text-purple-600'><span className=' text-black'>শিক্ষাবর্ষঃ </span>{StudentsData[studentId].collage.slice(0, 7)}</h1></div>
                    <h1 className=' text-2xl text-purple-600 mb-5'><span className=' text-black'>ইনস্টিটিউটঃ </span>{StudentsData[studentId].collage.slice(19)}</h1>
                    <p>{StudentsData[studentId].review}</p>
                </div>
            </div>




            <div className=' mt-12 flex items-center gap-3 text-lg'>
                <BsDiamondHalf className=' text-purple-600' />
                <h1>সম্পর্কিত পোস্ট..</h1>
            </div>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>


                <div className=" h-full py-10  ">
                    <div class=" bg-no-repeat h-full flex justify-center items-center">
                        <div class="w-full max-w-[300px] h-[370px] border relative border-purple-600 p-2 py-6 rounded-xl text-gray-800 bg-no-repeat  overflow-hidden group hover:shadow-xl hover:shadow-purple-500/20 motion-safe:transition-all motion-safe:duration-700">
                            <figure class="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4  before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-fuchsia-200 before:-z-[1] before:scale-[2.28] motion-safe:before:transition-all  motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center outline-white"
                            >
                                <img
                                    class="rounded-full block max-w-full bg-purple-600 h-full object-cover z-10 relative"
                                    src={StudentsData[2].img}
                                    alt="Avatar"
                                />
                            </figure>
                            <header class="motion-safe:translate-y-4 translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
                                <h3 class="font-semibold text-2xl text-center text-purple-600 mt-6   relative">
                                    {StudentsData[2]?.name}
                                </h3>
                                <p class="text-center text-gray-700   relative">
                                    {StudentsData[2]?.collage}
                                </p>
                            </header>

                            <div class="flex justify-center  mt-16 text-gray-700 relative">
                                <div class="  translate-y-[-40px] motion-safe:delay-200 motion-safe:transition">
                                    <span className=" text-justify hidden md:inline text-ellipsis overflow-hidden ... ">
                                        {
                                            StudentsData[2]?.review.slice(0, 115)
                                        }
                                        .. </span>
                                    <span className=" text-justify md:hidden text-ellipsis overflow-hidden ... ">
                                        {
                                            StudentsData[2]?.review.slice(0, 110)
                                        }
                                        .. </span>
                                    <button onClick={() => navigate(`/studentdetails/${StudentsData[2]?.id}`)} className=" ml-1 text-purple-600">আরো পড়ুন</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className=" h-full py-10  ">
                    <div class=" bg-no-repeat h-full flex justify-center items-center">
                        <div class="w-full max-w-[300px] h-[370px] border relative border-purple-600 p-2 py-6 rounded-xl text-gray-800 bg-no-repeat  overflow-hidden group hover:shadow-xl hover:shadow-purple-500/20 motion-safe:transition-all motion-safe:duration-700">
                            <figure class="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4  before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-fuchsia-200 before:-z-[1] before:scale-[2.28] motion-safe:before:transition-all  motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center outline-white"
                            >
                                <img
                                    class="rounded-full block max-w-full bg-purple-600 h-full object-cover z-10 relative"
                                    src={StudentsData[1].img}
                                    alt="Avatar"
                                />
                            </figure>
                            <header class="motion-safe:translate-y-4 translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
                                <h3 class="font-semibold text-2xl text-center text-purple-600 mt-6   relative">
                                    {StudentsData[1]?.name}
                                </h3>
                                <p class="text-center text-gray-700   relative">
                                    {StudentsData[1]?.collage}
                                </p>
                            </header>

                            <div class="flex justify-center  mt-16 text-gray-700 relative">
                                <div class="  translate-y-[-40px] motion-safe:delay-200 motion-safe:transition">
                                    <span className=" text-justify hidden md:inline text-ellipsis overflow-hidden ... ">
                                        {
                                            StudentsData[2]?.review.slice(0, 115)
                                        }
                                        .. </span>
                                    <span className=" text-justify md:hidden text-ellipsis overflow-hidden ... ">
                                        {
                                            StudentsData[2]?.review.slice(0, 110)
                                        }
                                        .. </span>
                                    <button onClick={() => navigate(`/studentdetails/${StudentsData[1]?.id}`)} className=" ml-1 text-purple-600">আরো পড়ুন</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className=" h-full py-10  ">
                    <div class=" bg-no-repeat h-full flex justify-center items-center">
                        <div class="w-full max-w-[300px] h-[370px] border relative border-purple-600 p-2 py-6 rounded-xl text-gray-800 bg-no-repeat  overflow-hidden group hover:shadow-xl hover:shadow-purple-500/20 motion-safe:transition-all motion-safe:duration-700">
                            <figure class="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4  before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-fuchsia-200 before:-z-[1] before:scale-[2.28] motion-safe:before:transition-all  motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center outline-white"
                            >
                                <img
                                    class="rounded-full block max-w-full bg-purple-600 h-full object-cover z-10 relative"
                                    src={StudentsData[4].img}
                                    alt="Avatar"
                                />
                            </figure>
                            <header class="motion-safe:translate-y-4 translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
                                <h3 class="font-semibold text-2xl text-center text-purple-600 mt-6   relative">
                                    {StudentsData[4]?.name}
                                </h3>
                                <p class="text-center text-gray-700   relative">
                                    {StudentsData[4]?.collage}
                                </p>
                            </header>

                            <div class="flex justify-center  mt-16 text-gray-700 relative">
                                <div class="  translate-y-[-40px] motion-safe:delay-200 motion-safe:transition">
                                    <span className=" text-justify hidden md:inline  text-ellipsis overflow-hidden ... ">
                                        {
                                            StudentsData[2]?.review.slice(0, 115)
                                        }
                                        .. </span>
                                    <span className=" text-justify md:hidden text-ellipsis overflow-hidden ... ">
                                        {
                                            StudentsData[2]?.review.slice(0, 110)
                                        }
                                        .. </span>
                                    <button onClick={() => navigate(`/studentdetails/${StudentsData[4]?.id}`)} className=" ml-1 text-purple-600">আরো পড়ুন</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StudentDetails;