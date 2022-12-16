import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const NursingBscClg = () => {
    return (
        <div className=' max-w-7xl px-5 mx-auto'>
            <div>
                <h1 className=' md:text-5xl text-4xl font-bold text-center mt-10 text-green-700'>বিএসসি ইন নার্সিং কলেজ সমূহ </h1>
                <p className=' mt-2 md:w-2/3 w-full mx-auto text-justify'>সরকারি নার্সিং কলেজ মোট ২০টি। এই ২০টি কলেজের মধ্যে বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় (বিএসএমএমইউ)’র নার্সিং ফ্যাকাল্টি ১টি এবং সামরিক ৬টি।

                    ১৩টি সরকারি নার্সিং কলেজ এর আসন সংখ্যা ১২০০। এই ১৩টি সরকারি নার্সিং কলেজ এর পরীক্ষা একইদিনে, একই প্রশ্নপত্রে হয়ে থাকে। বাকি ৭টি  (বিএসএমএমইউ ১টি + সামরিক ৬টি) কলেজের পরীক্ষা ভিন্ন ভিন্ন সময়ে হয়ে থাকে।

                    এছাড়াও ৬টি সরকারি নার্সিং কলেজ (পাবনা, ঝালকাঠি, কিশোরগঞ্জ, কুষ্টিয়া, নড়াইল, সিরাজগঞ্জ) প্রক্রিয়াধীন রয়েছে।</p>
            </div>


            <div className=' my-10'>
                <div className=' flex items-start  gap-3 text-lg font-bold text-green-600'>
                    <AiOutlineSend className=' text-black mt-1' />
                    <h1>১৩টি সরকারি নার্সিং কলেজ এর নাম ও আসন সংখ্যা:</h1>
                </div>
                <div className=' mt-4 md:w-3/4 w-full mx-auto'>
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-center text-gray-500 ">
                            <thead class=" text-gray-700 text-lg uppercase  bg-gradient-to-r from-white via-green-200 to-white ">
                                <tr>
                                    <th scope="col" class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ক্র.নং
                                    </th>
                                    <th scope="col" class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        প্রতষ্ঠানের নাম
                                    </th>
                                    <th scope="col" class="py-2 px-6">
                                        আসন সংখ্যা
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০১
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        ঢাকা নার্সিং কলেজ, ঢাকা মেডিকেল কলেজ হাসপাতাল, ঢাকা
                                    </td>
                                    <td class="py-2 px-6">
                                        ১০০
                                    </td>
                                </tr>


                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০২
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        ময়মনসিংহ নার্সিং কলেজ, মেডিকেল কলেজ হাসপাতাল, ময়মনসিংহ
                                    </td>
                                    <td class="py-2 px-6">
                                        ১০০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৩
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        রাজশাহী নার্সিং কলেজ, মেডিকেল কলেজ হাসপাতাল, রাজশাহী
                                    </td>
                                    <td class="py-2 px-6">
                                        ১০০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৪
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        চট্রগ্রাম নার্সিং কলেজ, মেডিকেল কলেজ হাসপাতাল, চট্রগ্রাম
                                    </td>
                                    <td class="py-2 px-6">
                                        ১০০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৫
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        রংপুর নার্সিং কলেজ, মেডিকেল কলেজ হাসপাতাল, রংপুর
                                    </td>
                                    <td class="py-2 px-6">
                                        ১০০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৬
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        সিলেট নার্সিং কলেজ, এমএজি ওসমানী মেডিকেল কলেজ হাসপাতাল, সিলেট
                                    </td>
                                    <td class="py-2 px-6">
                                        ১০০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৭
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        বরিশাল নার্সিং কলেজ, শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল, বরিশাল
                                    </td>
                                    <td class="py-2 px-6">
                                        ১০০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৮
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        দিনাজপুর নার্সিং কলেজ, মেডিকেল কলেজ হাসপাতাল, দিনাজপুর
                                    </td>
                                    <td class="py-2 px-6">
                                        ১০০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৯
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        কলেজ অব নার্সিং শেরেবাংলা নগর, ঢাকা
                                    </td>
                                    <td class="py-2 px-6">
                                        ১০০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ১০
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        মানিকগঞ্জ নার্সিং কলেজ, মানিকগঞ্জ
                                    </td>
                                    <td class="py-2 px-6">
                                        ১০০
                                    </td>
                                </tr>
                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ১১
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        তাজউদ্দিন আহমেদ নার্সিং কলেজ, গাজীপুর
                                    </td>
                                    <td class="py-2 px-6">
                                        ১০০
                                    </td>
                                </tr>
                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ১২
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        লালমনিরহাট নার্সিং কলেজ, লালমনিরহাট
                                    </td>
                                    <td class="py-2 px-6">
                                        ৫০
                                    </td>
                                </tr>
                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ১৩
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        বান্দরবান নার্সিং কলেজ, বান্দরবান
                                    </td>
                                    <td class="py-2 px-6">
                                        ৫০
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




            <div className=' my-10'>
                <div className=' flex items-start  gap-3 text-lg font-bold text-green-600'>
                    <AiOutlineSend className=' text-black mt-1' />
                    <h1>বিএসএমএমইউ ১টি + সামরিক ৬টি নার্সিং কলেজের আসনসংখ্য:</h1>
                </div>
                <div className=' mt-4 md:w-3/4 w-full mx-auto'>
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-center text-gray-500 ">
                            <thead class=" text-gray-700 text-lg uppercase  bg-gradient-to-r from-white via-green-200 to-white ">
                                <tr>
                                    <th scope="col" class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ক্র.নং
                                    </th>
                                    <th scope="col" class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        প্রতষ্ঠানের নাম
                                    </th>
                                    <th scope="col" class="py-2 px-6">
                                        আসন সংখ্যা
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০১
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        নার্সিং অনুষদ, বিএসএমএমইউ, ঢাকা
                                    </td>
                                    <td class="py-2 px-6">
                                        ২৫
                                    </td>
                                </tr>


                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০২
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        আর্মড ফোর্সেস মেডিকেল ইনস্টিটিউট, ঢাকা
                                    </td>
                                    <td class="py-2 px-6">
                                        ৬০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৩
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        আর্মি নার্সিং কলেজ, রংপুর
                                    </td>
                                    <td class="py-2 px-6">
                                        ৫০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৪
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        আর্মি নার্সিং কলেজ, চট্টগ্রাম
                                    </td>
                                    <td class="py-2 px-6">
                                        ৫০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৫
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        আর্মি নার্সিং কলেজ, কুমিল্লা
                                    </td>
                                    <td class="py-2 px-6">
                                        ৫০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৬
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        আর্মি নার্সিং কলেজ, যশোর
                                    </td>
                                    <td class="py-2 px-6">
                                        ৫০
                                    </td>
                                </tr>

                                <tr class="bg-white hover:bg-green-50 border-b border-t border-green-300 text-base font-bold ">
                                    <td class="py-2 px-6 border-r border-green-300 whitespace-nowrap">
                                        ০৭
                                    </td>
                                    <td scope="row" class="py-2 px-6 font-medium text-gray-900 border-r border-green-300 whitespace-nowrap ">
                                        আর্মি নার্সিং কলেজ, বগুড়া
                                    </td>
                                    <td class="py-2 px-6">
                                        ৫০
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

export default NursingBscClg;