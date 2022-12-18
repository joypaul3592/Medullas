import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { BiFolderOpen } from 'react-icons/bi';

const Navbar = () => {



    // For Menu
    const ref = useRef()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [drop, setDrop] = useState(false)
    const [drop2, setDrop2] = useState(false)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])



    // Navbar Style
    function resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        const shrinkOn = 1;

        if (distanceY > shrinkOn) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', resizeHeaderOnScroll);



    return (
        <div className=' bg-white z-50 sticky top-0  '>
            <nav className="max-w-7xl mx-auto px-4 md:px-3 lg:px-6">
                <div className={`${scroll ? ' h-10 md:h-14 xl:h-26' : ' h-16 md:h-18 xl:h-20'}   flex justify-between items-center  transition-all duration-300 ease-in-out  `}>
                    <div className={`transition-all duration-300 ease-in-out cursor-pointer`}>
                        <NavLink to={'/'}>
                            <h1 className=' text-3xl font-bold text-purple-600 cursor-pointer'>মেডুলা'স</h1>
                        </NavLink>
                    </div>

                    {/* For Mobile */}
                    <div className="flex h-full items-center justify-between lg:hidden">
                        {/* cancle button */}
                        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 md:mr-4 rounded-md lg:hidden text-dark-purple">
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>


                    {/* website */}
                    <div className='w-full hidden lg:flex items-center justify-around '>
                        <div className="hidden ml-auto lg:block  w-full ">
                            <div className=' flex w-full  justify-end  items-center pl-10 '>
                                <div className="h-full flex md:gap-x-6 lg:gap-x-8 xl:gap-x-10 justify-between items-center relative xl:mr-10" >


                                    <NavLink
                                        to={'adfrom'}
                                        className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                    >ভর্তি ফরম
                                    </NavLink>


                                    <NavLink
                                        to={'support'}
                                        className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                    >অনলাইন কেয়ার
                                    </NavLink>

                                    <NavLink
                                        to={'blog'}
                                        className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                    >ব্লগ
                                    </NavLink>

                                    <NavLink
                                        to={'/result'}
                                        className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                    >রেজাল্ট
                                    </NavLink>
                                    <NavLink
                                        to={'/course'}
                                        className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                    >কোর্স
                                    </NavLink>


                                    <NavLink
                                        onMouseEnter={() => setDrop2(true)}
                                        onMouseLeave={() => setDrop2(false)}
                                        to={'/bookshop'}
                                        className={({ isActive }) => (`relative flex items-center gap-2 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                    >প্রশাসনিক <MdKeyboardArrowDown />


                                        {
                                            drop2 && <div onMouseEnter={() => setDrop2(true)}
                                                onMouseLeave={() => setDrop(false)}
                                                className='pl-10 rounded absolute top-[23px] -right-6 bg-white border bg-opacity-60 backdrop-blur-lg border-purple-200 shadow-lg py-5 w-60 flex flex-col gap-3'>


                                                <NavLink
                                                    to={'/bookshop'}
                                                    className={({ isActive }) => (`flex items-center gap-3 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                                ><BiFolderOpen className=' text-lg' /> বুক শপ
                                                </NavLink>

                                                <NavLink
                                                    to={'/sakha'}
                                                    className={({ isActive }) => (`flex items-center gap-3 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                                ><BiFolderOpen className=' text-lg' />শাখা সমূহ
                                                </NavLink>

                                                <NavLink
                                                    to={'/contact'}
                                                    className={({ isActive }) => (`flex items-center gap-3 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                                ><BiFolderOpen className=' text-lg' />যোগাযোগ
                                                </NavLink>

                                                <NavLink
                                                    to={'/gallery'}
                                                    className={({ isActive }) => (`flex items-center gap-3 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                                ><BiFolderOpen className=' text-lg' />ফটো গ্যালারি
                                                </NavLink>

                                                <NavLink
                                                    to={'/aboutus'}
                                                    className={({ isActive }) => (` flex items-center gap-3 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                                ><BiFolderOpen className=' text-lg' /> আমাদের সম্পর্কে
                                                </NavLink>

                                            </div>

                                        }
                                    </NavLink>

                                    <NavLink
                                        onMouseEnter={() => setDrop(true)}
                                        onMouseLeave={() => setDrop(false)}
                                        to={'/nursingbscclg'}
                                        className={({ isActive }) => (`relative flex items-center gap-2 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                    >নার্সিং কলেজ <MdKeyboardArrowDown />


                                        {
                                            drop && <div onMouseEnter={() => setDrop(true)}
                                                onMouseLeave={() => setDrop(false)}
                                                className='pl-10 rounded absolute top-[23px] -right-6 bg-white border bg-opacity-60 backdrop-blur-lg border-purple-200 shadow-lg py-5 w-60 flex flex-col gap-3'>
                                                <NavLink
                                                    to={'/nursingbscclg'}
                                                    className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] flex items-center gap-3 hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                                ><AiOutlineFolderOpen className=' text-xl' /> বিএসসি ইন নার্সিং
                                                </NavLink>

                                                <NavLink
                                                    to={'/nursingdiploclg'}
                                                    className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] flex items-center gap-3 hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                                ><AiOutlineFolderOpen className=' text-xl' /> ডিপ্লোমা ইন নার্সিং
                                                </NavLink>

                                                <NavLink
                                                    to={'/nursingmidwiclg'}
                                                    className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] flex items-center gap-3 hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                                ><AiOutlineFolderOpen className=' text-xl' /> মিডওয়াইফারী নার্সিং
                                                </NavLink>

                                            </div>

                                        }
                                    </NavLink>





                                </div>

                                <div className='flex items-center ml-7  '>

                                    <NavLink
                                        to={'signup'}
                                        className=" relative inline-flex items-center justify-center px-5 py-1.5 overflow-hidden font-mono font-medium tracking-tighter text-black border border-purple-300 hover:text-white  rounded-full group transition-all duration-200 ease-out cursor-pointer"
                                    >
                                        <span class="absolute w-0 h-0 transition-all duration-700 ease-out bg-purple-600  rounded-full group-hover:w-60 group-hover:h-56"></span>
                                        <span class="absolute inset-0 w-full h-full  rounded-full opacity-30 transition-all duration-200 ease-out"></span>
                                        <span class="relative text-[13px] font-semibold">সাইন আপ</span>
                                    </NavLink>


                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Mobile */}
                    <div className={`w-full absolute lg:hidden transition-all duration-300 ease-in-out h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-40  ${isMenuOpen ? 'block' : 'hidden'}`}></div>
                    <div ref={ref} className={`${isMenuOpen ? 'left-0 bottom-0 top-0 z-20 ' : '-left-96 bottom-0 top-0'} transition-all duration-300 ease-in-out fixed lg:hidden  flex flex-col md:w-1/2 w-8/12 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto`}>

                        <div className="h-full flex flex-col gap-3  items-start pl-1" >

                            <div className=' flex justify-end items-end w-full'>
                                <button onClick={() => setIsMenuOpen(false)}>
                                    <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className={`transition-all mb-4 duration-300 ease-in-out cursor-pointer`}>
                                <NavLink to={'/'}>
                                    <h1 className=' text-3xl font-bold text-purple-600 cursor-pointer'>মেডুলা'স</h1>
                                </NavLink>
                            </div>

                            <NavLink
                                to={'signup'}
                                className=" pt-1.5 pb-0.5 px-4 border text-[13px] font-semibold border-purple-600 hover:bg-purple-600 hover:text-white rounded-md"
                            >সাইন আপ
                            </NavLink>

                            <div className=' flex flex-col gap-6 md:mt-8 mt-4 text-left'>

                                <NavLink
                                    to={'adfrom'}
                                    className={({ isActive }) => (`flex items-center gap-3  cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><AiOutlineFolderOpen className=' text-xl' /> ভর্তি ফরম
                                </NavLink>


                                <NavLink
                                    to={'support'}
                                    className={({ isActive }) => (`flex items-center gap-3  cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><AiOutlineFolderOpen className=' text-xl' /> অনলাইন কেয়ার
                                </NavLink>

                                <NavLink
                                    to={'blog'}
                                    className={({ isActive }) => (`flex items-center gap-3  cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><AiOutlineFolderOpen className=' text-xl' /> ব্লগ
                                </NavLink>

                                <NavLink
                                    to={'/result'}
                                    className={({ isActive }) => (`flex items-center gap-3  cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><AiOutlineFolderOpen className=' text-xl' /> রেজাল্ট
                                </NavLink>
                                <NavLink
                                    to={'/course'}
                                    className={({ isActive }) => (`flex items-center gap-3  cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><AiOutlineFolderOpen className=' text-xl' /> কোর্স
                                </NavLink>

                                <NavLink
                                    to={'/bookshop'}
                                    className={({ isActive }) => (`flex items-center gap-3 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><BiFolderOpen className=' text-lg' /> বুক শপ
                                </NavLink>

                                <NavLink
                                    to={'/sakha'}
                                    className={({ isActive }) => (`flex items-center gap-3 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><BiFolderOpen className=' text-lg' />শাখা সমূহ
                                </NavLink>
                                <NavLink
                                    to={'/contact'}
                                    className={({ isActive }) => (`flex items-center gap-3 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><BiFolderOpen className=' text-lg' />যোগাযোগ
                                </NavLink>

                                <NavLink
                                    to={'/gallery'}
                                    className={({ isActive }) => (`flex items-center gap-3 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><BiFolderOpen className=' text-lg' />ফটো গ্যালারি
                                </NavLink>

                                <NavLink
                                    to={'/aboutus'}
                                    className={({ isActive }) => (` flex items-center gap-3 cursor-pointer rounded-md text-[15px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><BiFolderOpen className=' text-lg' /> আমাদের সম্পর্কে
                                </NavLink>
                                <NavLink
                                    to={'/nursingbscclg'}
                                    className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] flex items-center gap-3 hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><AiOutlineFolderOpen className=' text-xl' /> বিএসসি ইন নার্সিং
                                </NavLink>

                                <NavLink
                                    to={'/nursingdiploclg'}
                                    className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] flex items-center gap-3 hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><AiOutlineFolderOpen className=' text-xl' /> ডিপ্লোমা ইন নার্সিং
                                </NavLink>

                                <NavLink
                                    to={'/nursingmidwiclg'}
                                    className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] flex items-center gap-3 hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
                                ><AiOutlineFolderOpen className=' text-xl' /> মিডওয়াইফারী নার্সিং
                                </NavLink>

                            </div>


                        </div>
                    </div>


                </div>
            </nav >
        </div >
    );
};

export default Navbar;