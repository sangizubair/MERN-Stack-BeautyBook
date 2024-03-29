import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Car1 from '../../assets/images/saloncover.png';
import Car2 from '../../assets/images/carousl2.avif';
import Car3 from '../../assets/images/carousl3.avif';

function Carousel() {
  const slides = [
    { url: Car1 },
    { url: Car2 },
    { url: Car3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Auto slide every 3 seconds
    const interval = setInterval(nextSlide, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Rest of your component code...
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[500px]   w-full m-auto py-0  relative group'>
      <div className='absolute text-white top-0 left-0 right-0 z-10 mx-auto my-24 text-center'>
        <h1 className='text-2xl font-extrabold sm:text-xl md:text-5xl lg:text-6xl'>
          New stylist. New life. New you.
        </h1>
        <h1 className='p-5 ms-auto text-xs font-semibold sm:text-sm md:text-sm text-center lg:text-lg whitespace-nowrap'>
          Discover and book beauty professionals near you
        </h1>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      ></div>

      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-500'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
