import React from 'react';
import PlanCardItem from './PlanCardItem/PlanCardItem';

const PlanCard = () => {
    return (
        <div className=' max-w-7xl mx-auto mt-20 mb-20 '>
            <div className=' px-5'>
                <div >
                    <h4 className=' font-bold text-purple-600'>#বই</h4>
                    <h1 className=' text-3xl font-bold mb-10'>আমাদের জনপ্রিয় বই সমূহঃ</h1>
                </div>
                <PlanCardItem />
            </div>
        </div>
    );
};

export default PlanCard;