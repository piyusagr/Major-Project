import React from "react";
import photo from '/public/main.jpg';
import acer from '/public/logo/acer.png';
import adidas from '/public/logo/adidas.png';
import adobe from '/public/logo/adobe.png';
import amazon from '/public/logo/amazon.png';
import apple from '/public/logo/Apple.png';
import barclays from '/public/logo/barclays.png';
import expedia from '/public/logo/expedia.png';
import ford from '/public/logo/ford.png';
import mastercard from '/public/logo/mastercard.png';
import visa from '/public/logo/visa.png';
import CarouselItem from './InfiniteSlider.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
    const logos = [
        acer, adidas, adobe, apple, amazon,
        barclays, expedia, ford, mastercard, visa
    ];

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },

        ],
        autoplay: true,
        autoplaySpeed: 500,
    };

    return (
        <div className="bg-sky-900">
            <div className="bg-sky-900 flex flex-col md:flex-row h-full w-full px-10 py-10  text-yellow-300">
                <div
                    className="font-bold flex-col flex text-lg md:text-2xl text-center sm:w-[150vh]  px-7 pt-7"
                >
                    <h1 className="text-2xl md:text-4xl pb-4 pt-8 font-extrabold">Welcome to Website</h1>
                    <p className="text-white font-semibold pb-3">Unlock Your Career Potential with Seamless Interview Experience</p>
                    <p className="text-white font-bold py-2">Embark on a journey of career growth and success. We understand that the interview process is a crucial step in achieving your professional aspirations. That's why we've crafted an innovative platform to enhance and simplify your interview experiences.</p>
                </div>
                <div className="overflow-hidden relative items-center text-center justify-center pl-5 ">
                    <img
                        src={photo}
                        alt="interview"
                        className="object-cover items-centerjustify--between transform border border-spacing-4 skew-y-6 rounded-2xl my-[20vh]"
                    />
                </div>
            </div>
            <div className="carousel-container rounded-full pb-[10rem] px-[2rem] md:px-[7rem]">
                <Slider {...settings} >
                    {logos.map((imgUrl, index) => (
                        <CarouselItem key={index} imgUrl={imgUrl} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Main;
