import React from "react";
import reviewImg from '../../../../Assect/reviewImg.jpg'
const CarosuleItem = ({ studentData }) => {


    return (
        <div className=" h-full py-10  ">
            <div class=" bg-no-repeat h-full flex justify-center items-center">
                <div class="w-full max-w-[300px] h-[370px] border border-purple-600 p-2 py-6 rounded-xl text-gray-800 bg-no-repeat  overflow-hidden group hover:shadow-xl hover:shadow-purple-500/20 motion-safe:transition-all motion-safe:duration-700">
                    <figure class="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-purple-600  before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-fuchsia-200 before:-z-[1] group-hover:before:scale-[2.28] motion-safe:before:transition-all  motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-white"
                    >
                        <img
                            class="rounded-full block max-w-full bg-purple-600 h-full object-cover z-10 relative"
                            src={studentData?.img}
                            alt="Avatar"
                        />
                    </figure>
                    <header class="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
                        <h3 class="font-semibold text-2xl text-center text-purple-600 mt-6   relative">
                            {studentData?.name}
                        </h3>
                        <p class="text-center group-hover:text-gray-700   relative">
                            {studentData?.collage}
                        </p>
                    </header>

                    <div class="flex justify-center  mt-16 text-gray-700 relative">
                        <div class="motion-safe:translate-y-[150px]  group-hover:translate-y-[-40px] motion-safe:delay-100 motion-safe:transition">
                            <span className=" text-justify text-ellipsis overflow-hidden ... ">
                                {
                                    studentData?.review.slice(0, 115)
                                }
                                .. </span>
                            <button className=" ml-1 text-purple-600">আরো পড়ুন</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarosuleItem;
