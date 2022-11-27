import React, { useState } from 'react';
import './Support.css'
import { useNavigate } from 'react-router-dom';
import supportimg from '../../Assect/Support2.png'
import sun from '../../Assect/sun.png'
import { BiSupport } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import Contact from '../Contact/Contact';

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
            <div className='lg:flex lg:flex-row-reverse items-center xl:h-[90vh]  max-w-7xl mx-auto px-5'>
                <div data-aos="fade-down" className=' w-[50%] relative'>
                    <img src={supportimg} alt="img" />
                    <img className='floating h-40 absolute top-[-7%] right-0' src={sun} alt="img" />
                </div>
                <div className=' w-[50%]'>
                    <h2 data-aos="zoom-in" className='text-6xl font-bold text-accent py-4'>Wanna Study <span className=' text-red-600'>Support?</span></h2>
                    <p data-aos="fade-right" className='text-lg py-4 text-justify'>Welcome to LangZila support center. If you have trouble understanding something. Course related or website related or something else. Then please come to our meet support session by clicking the button below. We love to help you.</p>

                    <button onClick={() => setSupport(true)} className="bg-red-600 py-2 my-2 flex lg:w-1/3 text-white rounded font-semibold font-mono items-center justify-center hover:bg-purple-900">Live Support <BiSupport className='ml-2' /> </button>

                    <div className={`absolute top-0 left-0 right-0 bottom-0 w-screen h-screen bg-gray-800 z-[4000] bg-opacity-50 flex items-center justify-center ${support ? 'block' : 'hidden'} `}>

                        <div className={`bg-white border border-gray-300 p-8 rounded-2xl shadow-xl w-[30rem] `}>
                            <div className="modal-box relative">
                                <label onClick={() => setSupport(false)} for="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2 w-10 h-10 rounded-full flex items-center justify-center bg-purple-300 border-none text-black cursor-pointer hover:bg-red-200">✕</label>
                                <h3 className="font-bold text-accent text-3xl py-2">Tell us your problem</h3>
                                {show ? <form onSubmit={handalSubmit}>
                                    <input type="text" name="subject" placeholder='Subject' className='w-full py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                                    <br />
                                    <textarea type="text" name="question" placeholder='Enter your Question' className='w-full py-2 my-4  rounded px-2  bg-white border-sky-900 border-2 outline-none ' />
                                    <br />

                                    {/* Submit Button */}
                                    <input type='submit' value='Submit' className=' bg-purple-600 hover:bg-red-700 px-6 py-2 my-2 rounded text-white' />
                                    {/* Submit Button */}

                                </form> : <div>
                                    <a onClick={changeButton} href='https://meet.google.com/ypa-bdyu-doc' target="_blank" className="bg-purple-600 px-6 py-2 my-2 flex w-96 mt-10 text-white rounded-md items-center justify-center">Join Now <BiSupport className='ml-2' /></a>
                                </div>}


                            </div>
                        </div>
                    </div>


                </div>
            </div >
            <Contact />
        </div>
    );
};

export default Support;