import React from 'react';
import { TbMicrophone } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import giveSakhaImg from '../../../Assect/giveSakha.gif'
const GiveSakha = () => {
    const navigate = useNavigate()
    return (
        <div className=' grid grid-cols-2 items-center mt-16 mb-6'>
            <div>
                <h1 className=' text-7xl font-bold leading-[85px]'>মেডুলা'স এর শাখা <br />নিতে আগ্রহী ?</h1>
                <p>আপনি কি মেডুলা'স এর শাখা নিতে আগ্রহী ? তবে আজই যোগাযোগ করুন মেডুলা'স এর সাথে। আমরা দিচ্ছি শর্ত সাপেক্ষে সারা বাংলাদেশে শাখা নেয়ার সুযোগ। তাই দেরি না করে আজই যোগাযোগ করুন আমদের সাথে। </p>
                <button onClick={() => navigate('/contact')} className=' pt-2 pb-1 px-6 bg-purple-600 border border-purple-600 hover:bg-transparent hover:text-purple-600 text-white transition-all duration-200 ease-in-out rounded mt-3 flex items-center gap-2'>যোগাযোগ <TbMicrophone /></button>
            </div>
            <div>
                <img src={giveSakhaImg} alt="giveSakhaImg" />
            </div>
        </div>
    );
};

export default GiveSakha;