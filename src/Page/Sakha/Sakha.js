import React from 'react';
import { useState } from 'react';
import { FaChessKing, FaHome } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { ImHome, ImHome2, ImHome3 } from "react-icons/im";
import { RiHome7Fill } from "react-icons/ri";
import GiveSakha from './GiveSakha/GiveSakha';

const Sakha = () => {
    const [hover, setHover] = useState(false)
    return (
        <div className=' max-w-7xl mx-auto px-5 py-10 mb-5'>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='relative h-40 w-80 border border-purple-500 cursor-pointer overflow-hidden  mx-auto rounded-md flex items-center  '>
                <div className='hover:scale-105 transition-all duration-300 ease-in-out  w-full h-full flex items-center justify-center'>
                    <div>
                        <div className=' w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto'><FaChessKing /></div>
                        <div className=' text-center'>
                            <h1 className=' text-2xl font-bold text-purple-500'>খুলনা শাখা</h1>
                            <p className='text-gray-600'>মেডুলা'স নার্সিং ভর্তি কোচিং</p>
                        </div>
                        <div className='flex justify-center  px-3 gap-2 mt-2'>
                            <h1 className=' text-purple-500 font-bold'>যোগাযোগ : </h1>
                            <p className=' text-md'>০১৭২৫১২৮৩৮৭</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' h-[1px] w-8/12 bg-purple-500 mt-6 mx-auto  relative'>
                <div className=' w-[1px] h-[26px] bg-purple-500 absolute bottom-0 left-[50%]'></div>
                <div className=' w-[1px] h-[26px] bg-purple-500 absolute top-0 left-0'></div>
                <div className=' w-[1px] h-[26px] bg-purple-500 absolute top-0 left-[50%]'></div>
                <div className=' w-[1px] h-[26px] bg-purple-500 absolute top-0 right-0'></div>
            </div>
            <div className=' flex items-center justify-between mt-6'>
                <div className='relative h-40 w-80 border border-purple-500 mx-auto rounded-md flex items-center justify-center '>
                    <div>
                        <div className=' text-center'>
                            <div className=' w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto'><AiTwotoneHome /></div>
                            <h1 className=' text-2xl font-bold text-purple-500'>বরিশাল শাখা</h1>
                            <p className='text-gray-600'>মেডুলা'স নার্সিং ভর্তি কোচিং</p>
                        </div>
                        <div className='flex justify-center  px-3 gap-2 mt-2'>
                            <h1 className=' text-purple-500 font-bold'>যোগাযোগ : </h1>
                            <p>০১৭২২৩৪৩৯২৫</p>
                        </div>
                    </div>
                    <div className=' w-[1px] h-[26px] bg-purple-500 absolute -bottom-[26px] left-[50%]'></div>
                </div>

                <div className=' relative h-40 w-80 border border-purple-500 mx-auto rounded-md flex items-center justify-center '>
                    <div>
                        <div className=' text-center'>
                            <div className=' w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto'><FaHome /></div>
                            <h1 className=' text-2xl font-bold text-purple-500'>পটুয়াখালী শাখা</h1>
                            <p className='text-gray-600'>মেডুলা'স নার্সিং ভর্তি কোচিং</p>
                        </div>
                        <div className='flex justify-center  px-3 gap-2 mt-2'>
                            <h1 className=' text-purple-500 font-bold'>যোগাযোগ : </h1>
                            <p>০১৬১৫১২৮৩৮৮</p>
                        </div>
                    </div>
                    <div className=' w-[1px] h-[26px] bg-purple-500 absolute -bottom-[26px] left-[50%]'></div>
                </div>

                <div className=' relative h-40 w-80 border border-purple-500 mx-auto rounded-md flex items-center justify-center '>
                    <div>
                        <div className=' text-center'>
                            <div className=' w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto'><ImHome /></div>
                            <h1 className=' text-2xl font-bold text-purple-500'>ঢাকা শাখা</h1>
                            <p className='text-gray-600'>মেডুলা'স নার্সিং ভর্তি কোচিং</p>
                        </div>
                        <div className='flex justify-center  px-3 gap-2 mt-2'>
                            <h1 className=' text-purple-500 font-bold'>যোগাযোগ : </h1>
                            <p>০১৬৪৬৬৪৪০০৮</p>
                        </div>
                    </div>
                    <div className=' w-[1px] h-[26px] bg-purple-500 absolute -bottom-[26px] left-[50%]'></div>
                </div>
            </div>

            <div className=' flex items-center justify-between mt-6'>
                <div className=' h-40 w-80 border border-purple-500 mx-auto rounded-md flex items-center justify-center '>
                    <div>
                        <div className=' w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto'><ImHome2 /></div>
                        <div className=' text-center'>
                            <h1 className=' text-2xl font-bold text-purple-500'>বরগুনা শাখা</h1>
                            <p className='text-gray-600'>মেডুলা'স নার্সিং ভর্তি কোচিং</p>
                        </div>
                        <div className='flex justify-center  px-3 gap-2 mt-2'>
                            <h1 className=' text-purple-500 font-bold'>যোগাযোগ : </h1>
                            <p>০১৫৭২৬৪২০৯২</p>
                        </div>
                    </div>
                </div>

                <div className=' h-40 w-80 border border-purple-500 mx-auto rounded-md flex items-center justify-center '>
                    <div>
                        <div className=' w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto'><ImHome3 /></div>
                        <div className=' text-center'>
                            <h1 className=' text-2xl font-bold text-purple-500'>পিরেজপুর শাখা</h1>
                            <p className='text-gray-600'>মেডুলা'স নার্সিং ভর্তি কোচিং</p>
                        </div>
                        <div className='flex justify-center  px-3 gap-2 mt-2'>
                            <h1 className=' text-purple-500 font-bold'>যোগাযোগ : </h1>
                            <p>০১৯১১১৭০০৯২</p>
                        </div>
                    </div>
                </div>

                <div className=' h-40 w-80 border border-purple-500 mx-auto rounded-md flex items-center justify-center '>
                    <div>
                        <div className=' w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto'><RiHome7Fill /></div>
                        <div className=' text-center'>
                            <h1 className=' text-2xl font-bold text-purple-500'>গোপালগঞ্জ শাখা</h1>
                            <p className='text-gray-600'>মেডুলা'স নার্সিং ভর্তি কোচিং</p>
                        </div>
                        <div className='flex justify-center  px-3 gap-2 mt-2'>
                            <h1 className=' text-purple-500 font-bold'>যোগাযোগ : </h1>
                            <p>০১৫৭২৩৬৪৮০৪</p>
                        </div>
                    </div>
                </div>
            </div>
            <GiveSakha />
        </div>
    );
};

export default Sakha;