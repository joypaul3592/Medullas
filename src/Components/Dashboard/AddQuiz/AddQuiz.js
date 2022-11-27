import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const AddQuiz = () => {
    return (

        <div>
            <h1>Add Quiz</h1>
            <div>
                <form className=' mt-5'>
                    <div className=' flex items-center gap-10'>
                        <div class="mb-6 w-2/3">
                            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-700 ">Set Name*</label>
                            <input type="text" id="default-input" class="bg-[#F5F7FD] border border-purple-200 text-gray-900 text-sm rounded-lg placeholder:font-semibold  focus:ring-blue-500 focus:ring-1 focus:outline-none block w-full p-2.5 " placeholder=' Question Set Name' required />
                        </div>
                        <div class="mb-6 w-1/3 relative">
                            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-700 ">Set Name*</label>

                            <select class="bg-[#F5F7FD] border border-purple-200  text-sm rounded-lg placeholder:font-semibold appearance-none  focus:ring-blue-500 focus:ring-1 focus:outline-none block w-full p-2.5  cursor-pointer  font-semibold text-gray-600">
                                <option>Quick Test</option>
                                <option>Quiz Test</option>
                                <option>Exam</option>
                            </select>

                            <div className=' absolute top-[2.5rem] right-5 z-50 '>
                                <MdOutlineKeyboardArrowDown className=' text-xl' />
                            </div>
                        </div>

                    </div>
                </form>
            </div>


            <div className=' bg-white shadow-lg py-10 rounded-lg mb-7'>
                <div className='  flex items-center justify-between py-1.5 px-3 pb-5 border-b border-gray-300'>
                    <div className=' flex items-center gap-3'>
                        <div className='h-3 w-3 rounded-full bg-purple-600'></div>
                        <h1 className=' font-medium' >Question: 1</h1>
                    </div>
                    <div className=' flex items-center gap-8'>
                        <div >
                            <button className=' flex items-center gap-3 py-1 px-3 bg-purple-100 rounded-md text-sm font-semibold'><div className=' h-7 w-7 rounded-full bg-purple-200 flex items-center justify-center'><AiOutlinePlus className=' text-xl text-purple-400' /></div> Add Option</button>
                        </div>

                        <div>
                            <button className=' flex items-center gap-3 py-1 px-3 bg-red-100 rounded-md text-sm font-semibold'><div className=' h-7 w-7 rounded-full bg-red-200 flex items-center justify-center'><MdDeleteForever className=' text-xl text-red-400' /></div> Add Option</button>
                        </div>
                    </div>
                </div>

                <div className=' mt-4 px-3'>
                    <form>
                        <div class="mb-6">
                            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-700 ">Type Question*</label>
                            <input type="text" id="default-input" class="bg-[#F5F7FD] border border-purple-200 text-gray-900 text-sm rounded-lg placeholder:font-semibold  focus:ring-blue-500 focus:ring-1 focus:outline-none block w-full p-2.5 " placeholder='Type Question' required />
                        </div>
                        <div className=' grid grid-cols-4 items-center gap-4 py-5'>
                            <div class="flex items-center gap-2.5">
                                <input id="disabled-radio-1" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer" />
                                <input type="text" id="default-input" class="bg-[#F5F7FD] border border-purple-200 text-gray-900 text-sm rounded-lg placeholder:font-semibold  focus:ring-blue-500 focus:ring-1 focus:outline-none block w-full p-2.5 " placeholder='option' required />
                            </div>
                            <div class="flex items-center gap-2.5">
                                <input checked id="disabled-radio-2" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer" />
                                <input type="text" id="default-input" class="bg-[#F5F7FD] border border-purple-200 text-gray-900 text-sm rounded-lg placeholder:font-semibold  focus:ring-blue-500 focus:ring-1 focus:outline-none block w-full p-2.5 " placeholder='option' required />
                            </div>
                            <div class="flex items-center gap-2.5">
                                <input checked id="disabled-radio-2" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer" />
                                <input type="text" id="default-input" class="bg-[#F5F7FD] border border-purple-200 text-gray-900 text-sm rounded-lg placeholder:font-semibold  focus:ring-blue-500 focus:ring-1 focus:outline-none block w-full p-2.5 " placeholder='option' required />
                            </div>

                            <div class="flex items-center gap-2.5">
                                <input checked id="disabled-radio-2" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer" />
                                <input type="text" id="default-input" class="bg-[#F5F7FD] border border-purple-200 text-gray-900 text-sm rounded-lg placeholder:font-semibold  focus:ring-blue-500 focus:ring-1 focus:outline-none block w-full p-2.5 " placeholder='option' required />
                            </div>
                        </div>
                    </form>
                    <h1 className=' font-medium text-sm text-gray-600'> <span className=' text-purple-600 mr-2'>Notes :</span>The radio button is for correct answer, you have to choose one correct answer.</h1>
                </div>
            </div>

            <div className=' py-1.5 px-4 bg-purple-200 inline-block rounded-md text-purple-700 mt-4 hover:ml-4 transition-all  duration-500 ease-in-out cursor-pointer'>
                <div className=' flex items-center gap-4'>
                    <div className=' w-7 h-7 flex items-center justify-center bg-purple-300 rounded-full'>
                        <BiPlus />
                    </div>
                    <button className=' text-sm font-medium '>Add Question</button>
                </div>
            </div>






        </div>
    );
};

export default AddQuiz;