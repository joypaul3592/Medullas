import React from 'react';
import img1 from '../../Assect/teacher1.jpg'
import img2 from '../../Assect/teacher2.jpg'
import img3 from '../../Assect/teacher3.jpg'
import img4 from '../../Assect/teacher4.jpg'
import img5 from '../../Assect/teacher5.jpg'
import img6 from '../../Assect/teacher6.jpg'
import img7 from '../../Assect/teacher7.jpg'
import img8 from '../../Assect/teacher8.jpg'

const TeacherTeam = () => {
    return (
        <section class="bg-white max-w-7xl mx-auto px-5">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">আমাদের অভিজ্ঞ শিক্ষকমন্ডলী</h1>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border border-purple-600 cursor-pointer rounded-xl hover:border-transparent group hover:bg-fuchsia-700 ">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img1} alt="img1" />
                        <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">আফসারা আজাদ সারা</h1>
                        <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">এমবিবিএস খুলনা মেডিকেল কলেজ <br />
                            <span className=' text-purple-600  group-hover:text-gray-300'>শিক্ষক-জীব বিজ্ঞান</span></p>
                    </div>

                    <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border border-purple-600  cursor-pointer rounded-xl hover:border-transparent group hover:bg-fuchsia-700 ">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img2} alt="img2" />
                        <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitaliz group-hover:text-white">
                            সাগর তরফদার</h1>
                        <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">কুয়েট সিভিল ইঞ্জিনিয়ারিং-১৭<br />
                            <span className=' text-purple-600  group-hover:text-gray-300'>শিক্ষক-সাধারন-গনিত</span></p>
                    </div>

                    <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border border-purple-600  cursor-pointer rounded-xl hover:border-transparent group hover:bg-fuchsia-700 ">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img4} alt="img4" />
                        <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">মোঃ ফরহাদ হাওলাদার</h1>
                        <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">সেকশন অফিসার-কুয়েট<br />
                            <span className=' text-purple-600  group-hover:text-gray-300'>প্রধান পরীক্ষা নিয়ন্ত্রক</span></p>
                    </div>

                    <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border border-purple-600  cursor-pointer rounded-xl hover:border-transparent group hover:bg-fuchsia-700 ">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img3} alt="img3" />
                        <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">মাহবুবুর রহমান রাফি</h1>
                        <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">কুয়েট সিভিল ইঞ্জিনিয়ারিং-১৭<br />
                            <span className=' text-purple-600  group-hover:text-gray-300'>শিক্ষক-রসায়ন বিজ্ঞান</span></p>
                    </div>




                    <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border border-purple-600  cursor-pointer rounded-xl hover:border-transparent group hover:bg-fuchsia-700 ">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img5} alt="img3" />
                        <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">অসীম গাইন</h1>
                        <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">বাংলা, খুলনা বিশ্ববিদ্যালয়<br />
                            <span className=' text-purple-600  group-hover:text-gray-300'>শিক্ষক-বাংলা</span></p>
                    </div>

                    <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border border-purple-600  cursor-pointer rounded-xl hover:border-transparent group hover:bg-fuchsia-700 ">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img6} alt="img3" />
                        <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">শারমিন সুলতানা</h1>
                        <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">ইংরেজি, খুলনা বিশ্ববিদ্যালয়<br />
                            <span className=' text-purple-600  group-hover:text-gray-300'>শিক্ষক-ইংরেজি</span></p>
                    </div>

                    <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border border-purple-600  cursor-pointer rounded-xl hover:border-transparent group hover:bg-fuchsia-700 ">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img7} alt="img3" />
                        <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">পিযুষ কুমার দত্ত</h1>
                        <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">কুয়েট সিভিল ইঞ্জিনিয়ারিং-১৭<br />
                            <span className=' text-purple-600  group-hover:text-gray-300'>শিক্ষক-পদার্থ বিজ্ঞান</span></p>
                    </div>

                    <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border border-purple-600  cursor-pointer rounded-xl hover:border-transparent group hover:bg-fuchsia-700 ">
                        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={img8} alt="img3" />
                        <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">রাবেয়া খাতুন</h1>
                        <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300 text-center">নার্সিং অফিসার(এক্স-ক্যাডার নার্স)<br />
                            <span className=' text-purple-600  group-hover:text-gray-300'>প্রধান পরীক্ষা নিয়ন্ত্রক</span></p>
                    </div>



                </div>

            </div>
        </section>
    );
};

export default TeacherTeam;