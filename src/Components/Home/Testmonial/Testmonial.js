// Carousel.js
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarosuleItem from './CarosuleItem/CarosuleItem'
import { GrPrevious, GrNext } from 'react-icons/gr'

function SampleNextArrow(props) {
    console.log(props);
    const { onClick } = props;
    return (
        <div
        ><GrPrevious className='slick-arrow slick-prev h-40 bg-red-200' onClick={onClick} /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div

        ><GrNext className='slick-arrow slick-next' onClick={onClick} /></div>
    );
}


const Testmonial = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
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
        <div className=' max-w-7xl mx-auto px-10 pb-10'>
            <div >
                <h4 className=' font-bold text-purple-600'>#মতামত</h4>
                <h1 className=' text-3xl font-bold mb-10'>কৃতি শিক্ষার্থীদের মতামত</h1>
            </div>
            <div className=' mt-6' >
                <Slider {...settings} className='h-[30rem] max-w-7xl mx-auto '>
                    <CarosuleItem />
                    <CarosuleItem />
                    <CarosuleItem />
                    <CarosuleItem />
                    <CarosuleItem />
                    <CarosuleItem />
                    <CarosuleItem />
                </Slider>
            </div >
        </div >

    );
}

export default Testmonial;