import React, { useState } from 'react';
import './Support.css'
import { useNavigate } from 'react-router-dom';
import supportimg from '../../Assect/support.gif';
import { BiSupport } from "react-icons/bi";

const Support = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(true)
    const [sup, setSup] = useState('')
    const [qus, setQus] = useState('')
    const [support, setSupport] = useState(false)


    const changeButton = async () => await setShow(!show)
    const handalSubmit = (event) => {

        // Prevent Input Default Behaviour
        event.preventDefault()

        // Get the value
        const subject = event.target.subject.value;
        const question = event.target.question.value;

        // Return if the value is Empty
        if (subject == '' || question == '') {
            return
        } else {

            console.log(subject, question);

            // Set Input value in the Sate
            setSup(subject);
            setQus(question)

            // Reset the input field
            event.target.subject.value = '';
            event.target.question.value = '';

            // Call Next Function
            changeButton()
        }
    }




    return (
        <div>
            <div className='lg:flex lg:flex-row-reverse items-center xl:h-[80vh]  max-w-7xl mx-auto px-5'>
                <div data-aos="fade-down" className=' lg:w-[50%] w-full relative  '>
                    <img className=' w-full' src={supportimg} alt="img" />
                </div>
                <div className=' lg:w-[50%] w-full lg:pr-16 lg:text-left text-center'>
                    <h2 data-aos="zoom-in" className='sm:text-6xl text-4xl font-bold text-accent py-4'>অনলাইন সহায়তা<br /><span className=' text-purple-600'>প্রয়োজন ?</span></h2>
                    <p data-aos="fade-right" className='text-lg pb-4 text-justify'>মেডুলা'স নার্সিং ভর্তি কোচিং এখন দিচ্ছে অনলাইনে কথা বলার সুযোগ। আমদের হেল্প লাইনে এখনই যোগাযোগ করে নিতে পারেন অনলাইন সেবা। যেকোনো প্রশ্ন থাকলে এখনি কথা বলুন আমদের সাথে। আমাদের সাপোর্ট টিম সব সময় প্রস্তুত আপনাকে সেবা দিতে।</p>

                    <button onClick={() => setSupport(true)} className="bg-purple-600 pb-2 pt-2.5 my-2 flex w-full mx-auto lg:mx-0 md:w-1/3 text-white rounded font-semibold font-mono items-center justify-center hover:bg-transparent border border-purple-600 hover:text-purple-600 transition-all duration-200 ease-in-out">সেবা নিন<BiSupport className='ml-2' /> </button>

                    <div className={`absolute top-0 left-0 right-0 bottom-0 w-screen h-screen bg-gray-800 z-[4000] bg-opacity-50 flex items-center justify-center ${support ? 'block' : 'hidden'} `}>

                        <div className={`bg-white border border-gray-300 p-8 rounded-2xl shadow-xl w-[30rem] `}>
                            <div className="modal-box relative">
                                <label onClick={() => setSupport(false)} for="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2 w-10 h-10 rounded-full flex items-center justify-center bg-purple-300 border-none text-black cursor-pointer hover:bg-transparent hover:text-purple-600 border border-purple-600 pt-1">✕</label>
                                <h3 className="font-bold text-accent text-3xl py-2">আপনার সমস্যার কথা বলুন</h3>
                                {show ? <form onSubmit={handalSubmit}>
                                    <input type="text" name="subject" placeholder='বিষয়' className='w-full py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                                    <br />
                                    <textarea type="text" name="question" placeholder='আপনার প্রশ্নটি লিখুন' className='w-full py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                                    <br />

                                    {/* Submit Button */}
                                    <input type='submit' value='জমা দিন' className=' bg-purple-600 hover:bg-transparent border border-purple-600 hover:text-purple-600 transition-all duration-300 ease-in-out px-6 pt-2 pb-1.5 my-2 rounded text-white cursor-pointer' />
                                    {/* Submit Button */}

                                </form> : <div>
                                    <a onClick={changeButton} href='https://meet.google.com/ypa-bdyu-doc' target="_blank" className="bg-purple-600 px-6 py-2 my-2 flex w-96 mt-10 text-white rounded-md items-center justify-center">জয়েন করুন <BiSupport className='ml-2' /></a>
                                </div>}


                            </div>
                        </div>
                    </div>


                </div>
            </div >
        </div>
    );
};

export default Support;