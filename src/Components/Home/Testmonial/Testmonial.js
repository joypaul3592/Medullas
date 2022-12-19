// Carousel.js
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarosuleItem from './CarosuleItem/CarosuleItem'
import { GrPrevious, GrNext } from 'react-icons/gr'

function SampleNextArrow(props) {
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
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                focusOnSelect: true,
            }
        }
        ]
    };

    const StudentsData = [
        {
            id: 1,
            name: 'ত্রয়ী মল্লিক',
            collage: '২০২১-২২ শিক্ষাবর্ষে যশোর নার্সিং এ ২য়',
            img: 'https://i.ibb.co/Pxk0L4y/Triyi-Mollik.jpg',
            review: "আমি ত্রয়ী মল্লিক, মেডুলা'স নার্সিং ভর্তি কোচিং থেকে নার্সিং ভর্তি পরীক্ষায় যশোর নার্সিং এ ২য় স্থান অর্জন করেছি এবং বর্তমানে আমি যশোর নার্সিং ইনস্টিটিউট-এ পড়ছি। মেডুলা'স এর যাবতীয় নোট, গাইড লাইন নার্সিং ভর্তি পরীক্ষায় বিশেষ সহায়ক ভূমিকা পালন করেছে। আমি মনে করি গাইড লাইন হিসাবে মেডুলা'স এর অবদান প্রত্যেক শিক্ষার্থীদের জন্য আদর্শ। মেডুলা'স এর শীট, নোট, শিক্ষকদের পরামর্শ আমার চান্স প্রাপ্তিতে সহায়ক ভূমিকা পালন করেছে। আমি সর্বদা মেডুলা'স এর সাফল্য কামনা করছি।"
        },
        {
            id: 2,
            name: 'ঊর্মি খাতুন',
            collage: '২০২১-২২ শিক্ষাবর্ষে খুলনা নার্সিং এ ৯ম',
            img: 'https://i.ibb.co/DgfCTkb/Urmi-Khatun.jpg',
            review: "আমি ঊর্মি খাতুন। সৃষ্টিকর্তার অসীম কৃপায় আমি ২০১৯-২০ শিক্ষাবর্ষে খুলনা নার্সিং এ ৯ম স্থান অর্জন করেছি। আমার এই সাফল্যের জন্য আমি মেডুলা'স নার্সি ভর্তি কোচিং এর কাছে অত্যন্ত কৃতজ্ঞ। মেডুলা'স নার্সিং ভর্তি কোচিং থেকে প্রাপ্ত গাইডলাইন আমার এই সফলতা অর্জনে অত্যন্ত সহায়ক ভূমিকা পালন করেছে। মেডুলা'স এমন একটি প্রতিষ্ঠান যেখানে একজন শিক্ষার্থীকে তাদের সর্বোচ্চ চেষ্টা দিয়ে গড়ে তোলে। তাই নার্সিং ভর্তিচ্ছু পরীক্ষার্থীদের চান্সপ্রাপ্তিতে মেডিকন নার্সিং ভর্তি কোচিং অত্যন্ত সহায়ক ভূমিকা পালন করবে বলে আমি বিশ্বাস করি। পরিশেষে মেডুলা'স-এর সার্বিক সাফল্য কামনা করছি।"
        },
        {
            id: 3,
            name: 'মুর্শিদা খাতুন',
            collage: '২০২১-২২ শিক্ষাবর্ষে খুলনা নার্সিং এ ৭ম',
            img: 'https://i.ibb.co/jvw9kmn/Murshida-Khatun.jpg',
            review: "আমি মুর্শিদা খাতুন। সৃষ্টিকর্তার অসীম কৃপায় আমি ২০১৯-২০ শিক্ষাবর্ষে খুলনা নার্সিং এ ৭ম স্থান অর্জন করেছি। আমার এই সাফল্যের জন্য আমি মেডুলা'স নার্সি ভর্তি কোচিং এর কাছে অত্যন্ত কৃতজ্ঞ। মেডুলা'স নার্সিং ভর্তি কোচিং থেকে প্রাপ্ত গাইডলাইন আমার এই সফলতা অর্জনে অত্যন্ত সহায়ক ভূমিকা পালন করেছে। মেডুলা'স এমন একটি প্রতিষ্ঠান যেখানে একজন শিক্ষার্থীকে তাদের সর্বোচ্চ চেষ্টা দিয়ে গড়ে তোলে। তাই নার্সিং ভর্তিচ্ছু পরীক্ষার্থীদের চান্সপ্রাপ্তিতে মেডিকন নার্সিং ভর্তি কোচিং অত্যন্ত সহায়ক ভূমিকা পালন করবে বলে আমি বিশ্বাস করি। পরিশেষে মেডুলা'স-এর সার্বিক সাফল্য কামনা করছি।"
        },
        {
            id: 4,
            name: 'তামান্না আক্তার',
            collage: '২০২১-২২ শিক্ষাবর্ষে যশোর নার্সিং এ ৬ষ্ট',
            img: 'https://i.ibb.co/gJYg668/Tamanna-Akter.jpg',
            review: "আমি তামান্না আক্তার, ২০১৯-২০ শিক্ষাবর্ষে যশোর নার্সিং কলেজ-এ চান্স পেয়েছি। আমার নার্সিং এ পড়ার স্বপ্ন বাস্তবায়নে মেডুলা'স নার্সিং ভর্তি কোচিং এর  ভূমিকা অনেক বেশি। মেডুলা'স-এর মত এত যত্নশীল ভাবে প্রতিটা শিক্ষার্থীকে পাঠদান থেকে শুরু করে দৈনিক, সাপ্তাহিক ,মাসিক পরীক্ষা নেয়ার মাধ্যমে ভর্তি পরীক্ষার জন্য অন্য কোনো কোচিং এ যোগ্য প্রার্থী হিসেবে গড়ে তোলা হয় কি না আমার জানা নেই। সঠিক গাইডলাইনর মাধ্যমে চান্স পাওয়ার পথকে সহজতর করতে মেডুলা'স সত্যিই প্রশংসার দাবিদার। মেডুলা'স-কে ধন্যবাদ আমার মত শত শত শিক্ষার্থীর নার্সিং পড়ার স্বপ্নকে বাস্তবে পরিণত করার বন্ধু হিসেবে পাশে থাকার জন্য। আমি মেডুলা'স নার্সিং ভর্তি কোচিং এর ভবিষ্যৎ সাফল্য কামনা করছি।"
        },
        {
            id: 5,
            name: 'রিয়া মন্ডল',
            collage: '২০২১-২২ শিক্ষাবর্ষে যশোর নার্সিং এ ১১তম',
            img: 'https://i.ibb.co/j3m40W6/Ria-Mondol.jpg',
            review: "আমি রিয়া মন্ডল যশোর নার্সিং কলেজ  এর বর্তমান ও নিয়মিত শিক্ষার্থী। নার্সিং ছিল আমার স্বপ্ন। আর এ স্বপ্ন বাস্তবায়নে মেডুলা'স নার্সিং ভর্তি কোচিং ছিল মূল পথপ্রদর্শক। নার্সিং পড়ার স্বপ্ন নিয়ে যখন কোন কিছুতে কূল পাচ্ছিলাম না ঠিক তখনই মেডুলা'স নার্সিং ভর্তি কোচিং-এ ভর্তি হওয়ার সিদ্ধান্ত নেই। এই কোচিং-এর অভিজ্ঞ শিক্ষক মন্ডলীদের পড়ামর্শ ক্লাস, ক্লাস টেস্ট, সাপ্তাহিক ও মাসিক পরীক্ষা গ্রহন সহ কোর্স শেষে রিভিউ ক্লাসের ব্যবস্থা ইত্যাদি পদক্ষেপ ও নিজ প্রচেষ্টায় নার্সিং ভর্তি পরীক্ষায় উত্তীর্ণ হই এবং নিজ স্বপ্ন পূরন হওয়ায় অনেক আনন্দ পাই। আমি সর্বপরি এটাই বলবো যারা নার্সিং করার স্বপ্ন দেখতেছেন আপনাদের জন্য মেডুলা'স নার্সিং ভর্তি কোচিং এক গুরুত্বপূর্ণ ও অতুলনীয় ভুমিকা পালন করবে ও সফলতার লক্ষে পৌঁছাতে সাহায্য করবে বলে আমি মনে করি। পরিশেষে, মেডুলা'স নার্সিং ভর্তি কোচিং এর উন্নতি ও মঙ্গল কামনা করছি।"
        },
        {
            id: 6,
            name: 'তন্নি মল্লিক',
            collage: '২০২১-২২ শিক্ষাবর্ষে খুলনা নার্সিং এ ১৪তম',
            img: 'https://i.ibb.co/pxN67xy/Tonni-Mollik.jpg',
            review: "আমি তন্নি মল্লিক। সৃষ্টিকর্তার অসীম কৃপায় আমি ২০১৯-২০ শিক্ষাবর্ষে খুলনা নার্সিং এ ১৪তম স্থান অর্জন করেছি। আমার এই সাফল্যের জন্য আমি মেডুলা'স নার্সি ভর্তি কোচিং এর কাছে অত্যন্ত কৃতজ্ঞ। মেডুলা'স নার্সিং ভর্তি কোচিং থেকে প্রাপ্ত গাইডলাইন আমার এই সফলতা অর্জনে অত্যন্ত সহায়ক ভূমিকা পালন করেছে। মেডুলা'স এমন একটি প্রতিষ্ঠান যেখানে একজন শিক্ষার্থীকে তাদের সর্বোচ্চ চেষ্টা দিয়ে গড়ে তোলে। তাই নার্সিং ভর্তিচ্ছু পরীক্ষার্থীদের চান্সপ্রাপ্তিতে মেডিকন নার্সিং ভর্তি কোচিং অত্যন্ত সহায়ক ভূমিকা পালন করবে বলে আমি বিশ্বাস করি। পরিশেষে মেডুলা'স-এর সার্বিক সাফল্য কামনা করছি।"
        }

    ]

    return (
        <div className=' max-w-7xl mx-auto px-10 pb-10'>
            <div >
                <h4 className=' font-bold text-purple-600'>#মতামত</h4>
                <h1 className=' text-3xl font-bold mb-10'>কৃতি শিক্ষার্থীদের মতামত</h1>
            </div>
            <div className=' mt-6' >
                <Slider {...settings} className='h-[30rem] max-w-7xl mx-auto '>
                    {
                        StudentsData.map(studentData => <CarosuleItem key={studentData.id} studentData={studentData} />)
                    }
                </Slider>
            </div >
        </div >

    );
}

export default Testmonial;