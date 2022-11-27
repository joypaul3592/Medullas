import React from 'react';
import { NavLink } from 'react-router-dom';


const DashboardSideBare = ({ children }) => {




    return (
        <div className=' max-w-7xl mx-auto px-8 py-10  '>



            <div className=" p-4 flex items-center gap-10">

                <div className="rounded-xl  ">
                    <ul className="menu flex flex-col gap-6 items-center justify-center bg-base-100  overflow-y-auto w-32 h-96 text-base-content shadow-xl rounded-xl overflow-x-hidden">
                        <li className='  w-full text-center py-1.5 text-sm font-semibold hover:bg-purple-100 hover:text-white transition-all duration-500 ease-in-out cursor-pointer '><NavLink to='students' className={({ isActive }) => (`rounded-md text-[13px] hover:text-purple-500 font-semibold  px-10 py-1 ${isActive ? 'text-purple-500' : 'text-black'}`)}>Students</NavLink></li>
                        <li className='  w-full text-center py-1.5 text-sm font-semibold hover:bg-purple-100 hover:text-white transition-all duration-500 ease-in-out cursor-pointer '><NavLink className={({ isActive }) => (`rounded-md text-[13px] hover:text-purple-500 font-semibold  px-8 py-1 ${isActive ? 'text-purple-500' : 'text-black'}`)} to='addquiz'>Add Quizs</NavLink></li>
                        <li className='  w-full text-center py-1.5 text-sm font-semibold hover:bg-purple-100 hover:text-white transition-all duration-500 ease-in-out cursor-pointer '><NavLink className={({ isActive }) => (`rounded-md text-[13px] hover:text-purple-500 font-semibold  px-8 py-1 ${isActive ? 'text-purple-500' : 'text-black'}`)} to='addblog'>Add Blog</NavLink></li>
                    </ul>
                </div>

                <div className="  w-full h-[75vh]  ">
                    {children}
                </div>


            </div>
        </div>
    );
};

export default DashboardSideBare;