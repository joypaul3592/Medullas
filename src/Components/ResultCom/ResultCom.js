import React from 'react';
import img1 from '../../Assect/result1.jpg'
import img2 from '../../Assect/result2.jpg'
import img3 from '../../Assect/result3.jpg'
import img4 from '../../Assect/result4.jpg'
import CourseImg from '../../Assect/Course2.png'
const ResultCom = () => {
    return (
        <div>
            <div className=' h-60 w-screen bg-gradient-to-r from-pink-50 to-sky-100'>
                <div className=' w-10/12 mx-auto  h-full flex items-center justify-between'>
                    <div></div>
                    <h1 className=' text-7xl font-bold ml-40 text-purple-600'>#রেজাল্ট </h1>
                    <img className=' h-full' src={CourseImg} alt="CourseImg" />
                </div>
            </div>
            <div class="container max-w-7xl m-auto py-10 px-5 ">
                <div className=' text-lg font-bold  text-purple-600 mb-5'>
                    <p>#রিসেন্ট পাবলিশ</p>
                </div>
                <div className='gap-10  grid grid-cols-3  items-center justify-start'>

                    <div class="group ">
                        <div class="flex flex-col w-full hover:shadow-lg hover:shadow-purple-100 rounded group overflow-hidden h-auto border border-purple-600  transition-all duration-200 ease-in-out rounded-tr-[115px] rounded-bl-[115px]">
                            <div className=' w-full rounded-b-full rounded-r-full p-2 border border-purple-600 overflow-hidden '>
                                <img class="block h-52 w-full group-hover:scale-[1.08] rounded-r-full transition-all duration-300 ease-in-out rounded-b-full  flex-none bg-cover " src={img1} />
                            </div>
                            <div class=" p-4 py-6  flex flex-col justify-center leading-normal">
                                <div class="text-black  font-bold text-lg mb-2 pl-1 leading-tight group-hover:text-purple-600">নার্সিং ভর্তি রেজাল্ট ২০২০-২১ইং প্রকাশিত হয়েছে</div>
                                <p className=' px-1 text-justify'>নার্সিং ভর্তি পরীক্ষা ২০২০–২১ এর ফলাফল বাংলাদেশ নার্সিং এন্ড মিডওয়াইফারি কাউন্সিল (BNMC) এর ওয়েবসাইটে প্রকাশ করা হয়েছে।</p>
                                <div className=' w-full flex items-center justify-end'>
                                    <p class="text-grey-darker text-sm h-8 rounded-full bg-fuchsia-200 border border-fuchsia-200 w-32 text-fuchsia-500 flex items-center justify-center cursor-pointer">আরো পড়ুন</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="group">
                        <div class="flex flex-col w-full rounded hover:shadow-lg hover:shadow-purple-100 group overflow-hidden h-auto border border-purple-600  transition-all duration-200 ease-in-out rounded-tr-[115px] rounded-bl-[115px]">
                            <div className=' w-full rounded-b-full rounded-r-full p-2 border border-purple-600 overflow-hidden '>
                                <img class="block h-52 w-full group-hover:scale-[1.08] rounded-r-full transition-all duration-300 ease-in-out rounded-b-full  flex-none bg-cover " src={img2} />
                            </div>
                            <div class=" p-4 py-6  flex flex-col justify-center leading-normal">
                                <div class="text-black  font-bold text-lg mb-2 pl-1 leading-tight group-hover:text-purple-600">নার্সিং ভর্তি রেজাল্ট ২০২০-২১ইং প্রকাশিত হয়েছে</div>
                                <p className=' px-1 text-justify'>নার্সিং ভর্তি পরীক্ষা ২০২০–২১ এর ফলাফল বাংলাদেশ নার্সিং এন্ড মিডওয়াইফারি কাউন্সিল (BNMC) এর ওয়েবসাইটে প্রকাশ করা হয়েছে।</p>
                                <div className=' w-full flex items-center justify-end'>
                                    <p class="text-grey-darker text-sm h-8 rounded-full bg-fuchsia-200 w-32  text-fuchsia-600 flex items-center justify-center cursor-pointer hover:bg-transparent border border-fuchsia-200">আরো পড়ুন</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="group">
                        <div class="flex flex-col w-full rounded hover:shadow-lg hover:shadow-purple-100 group overflow-hidden h-auto border border-purple-600  transition-all duration-200 ease-in-out rounded-tr-[115px] rounded-bl-[115px]">
                            <div className=' w-full rounded-b-full rounded-r-full p-2 border border-purple-600 overflow-hidden '>
                                <img class="block h-52 w-full group-hover:scale-[1.08] rounded-r-full transition-all duration-300 ease-in-out rounded-b-full  flex-none bg-cover " src={img3} />
                            </div>
                            <div class=" p-4 py-6  flex flex-col justify-center leading-normal">
                                <div class="text-black  font-bold text-lg mb-2 pl-1 leading-tight group-hover:text-purple-600">নার্সিং ভর্তি রেজাল্ট ২০২০-২১ইং প্রকাশিত হয়েছে</div>
                                <p className=' px-1 text-justify'>নার্সিং ভর্তি পরীক্ষা ২০২০–২১ এর ফলাফল বাংলাদেশ নার্সিং এন্ড মিডওয়াইফারি কাউন্সিল (BNMC) এর ওয়েবসাইটে প্রকাশ করা হয়েছে।</p>
                                <div className=' w-full flex items-center justify-end'>
                                    <p class="text-grey-darker text-sm h-8 rounded-full bg-fuchsia-200 border border-fuchsia-200 w-32 text-fuchsia-500 flex items-center justify-center cursor-pointer">আরো পড়ুন</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="group">
                        <div class="flex flex-col w-full rounded hover:shadow-lg hover:shadow-purple-100 group overflow-hidden h-auto border border-purple-600  transition-all duration-200 ease-in-out rounded-tr-[115px] rounded-bl-[115px]">
                            <div className=' w-full rounded-b-full rounded-r-full p-2 border border-purple-600 overflow-hidden '>
                                <img class="block h-52 w-full group-hover:scale-[1.08] rounded-r-full transition-all duration-300 ease-in-out rounded-b-full  flex-none bg-cover " src={img3} />
                            </div>
                            <div class=" p-4 py-6  flex flex-col justify-center leading-normal">
                                <div class="text-black  font-bold text-lg mb-2 pl-1 leading-tight group-hover:text-purple-600">নার্সিং ভর্তি রেজাল্ট ২০২০-২১ইং প্রকাশিত হয়েছে</div>
                                <p className=' px-1 text-justify'>নার্সিং ভর্তি পরীক্ষা ২০২০–২১ এর ফলাফল বাংলাদেশ নার্সিং এন্ড মিডওয়াইফারি কাউন্সিল (BNMC) এর ওয়েবসাইটে প্রকাশ করা হয়েছে।</p>
                                <div className=' w-full flex items-center justify-end'>
                                    <p class="text-grey-darker text-sm h-8 rounded-full bg-fuchsia-200 border border-fuchsia-200 w-32 text-fuchsia-500 flex items-center justify-center cursor-pointer">আরো পড়ুন</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="group">
                        <div class="flex flex-col w-full hover:shadow-lg hover:shadow-purple-100 rounded group overflow-hidden h-auto border border-purple-600  transition-all duration-200 ease-in-out rounded-tr-[115px] rounded-bl-[115px]">
                            <div className=' w-full rounded-b-full rounded-r-full p-2 border border-purple-600 overflow-hidden '>
                                <img class="block h-52 w-full group-hover:scale-[1.08] rounded-r-full transition-all duration-300 ease-in-out rounded-b-full  flex-none bg-cover " src={img4} />
                            </div>
                            <div class=" p-4 py-6  flex flex-col justify-center leading-normal">
                                <div class="text-black  font-bold text-lg mb-2 pl-1 leading-tight group-hover:text-purple-600">নার্সিং ভর্তি রেজাল্ট ২০২০-২১ইং প্রকাশিত হয়েছে</div>
                                <p className=' px-1 text-justify'>নার্সিং ভর্তি পরীক্ষা ২০২০–২১ এর ফলাফল বাংলাদেশ নার্সিং এন্ড মিডওয়াইফারি কাউন্সিল (BNMC) এর ওয়েবসাইটে প্রকাশ করা হয়েছে।</p>
                                <div className=' w-full flex items-center justify-end'>
                                    <p class="text-grey-darker text-sm h-8 rounded-full bg-fuchsia-200 border border-fuchsia-200 w-32 text-fuchsia-500 flex items-center justify-center cursor-pointer">আরো পড়ুন</p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>


                <div className=' my-10 '>
                    <nav className='mx-auto text-center' aria-label="Page navigation">
                        <ul class="inline-flex space-x-2">
                            <li><button class="flex items-center justify-center w-10 h-10 text-purple-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-purple-100">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                            </li>
                            <li><button class="w-10 h-10 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-full focus:shadow-outline">1</button></li>
                            <li><button class="w-10 h-10 text-purple-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-purple-100">2</button></li>
                            <li><button class="w-10 h-10 text-purple-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-purple-100">3</button></li>
                            <li><button class="flex items-center justify-center w-10 h-10 text-purple-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-purple-100">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                            </li>
                        </ul>
                    </nav>
                </div>


            </div>

        </div>
    );
};

export default ResultCom;