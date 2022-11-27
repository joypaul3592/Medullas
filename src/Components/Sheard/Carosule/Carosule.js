import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarosuleItem from './CarosuleItem/CarosuleItem';


const Carosule = () => {

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    };
    return (
        <div className='  mt-12 max-w-7xl mx-auto'>
            <div >
                <h4 className=' font-medium text-purple-600'>Course</h4>
                <h1 className=' text-3xl font-bold mb-3  '>Featured Courses</h1>
            </div>



            <Slider {...settings} className='  w-full '>
                <CarosuleItem imgLink={"https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image3.png"} />
                <CarosuleItem imgLink={"https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image1.png"} />
                <CarosuleItem imgLink={"https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image2.png"} />
                <CarosuleItem imgLink={"https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image4.png"} />
                <CarosuleItem imgLink={"https://demo.themewinter.com/wp/turitors/wp-content/uploads/2019/11/course_image5.png"} />
            </Slider>
        </div>

    );
};

export default Carosule;