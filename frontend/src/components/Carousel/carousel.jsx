import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FaLocationArrow } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";



function Carousel() {

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1675034743339-0b0747047727?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [searchInput, setSearchInput] = useState('');


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    setShowPopup(true); // Show the popup when there is input
  };
  const closePopup = () => {
    setShowPopup(false);
    setSearchInput(''); // Clear search input when closing the popup
  };
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-0  relative group'>
      {/* Search bar positioned on top of the carousel */}
      <div className='absolute text-white top-0 left-0 right-0 z-10 mx-auto my-24 text-center  '>
        <h1 className='text-5xl font-bold'>
          New stylist. New life. New you.
        </h1>
        <h1 className='p-5 text-base font-semibold'>
          Discover and book beauty professionals near you
        </h1>
      </div>
      <div className='absolute top-0 left-0 right-0 z-10 mx-auto my-60 text-center  sm:w-3/8 md:w-3/6 lg:w-2/6 xl:w-2/4 '>
        <div className='relative'>
          <FaSearchLocation className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-500  " />
          <FaLocationArrow className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-500" />
          <input type="text" placeholder="Search services..." value={searchInput}
            onChange={handleSearchInputChange} className={`w-full sm:w-4/7 bg-white text-black rounded-md px-6 py-2 outline-none ${showPopup}`} />
          {showPopup && (
            <div className='absolute text-center top-0 left-0 right-0 z-10 mx-auto my-52 transform -translate-y-1/2 bg-white rounded-md p-4 sm:w-[40%]  md:w-[70%] lg:w-[80%] xl:w-[100%]'>
              <div onClick={closePopup} className='text-black'><IoArrowBack /></div>
              {/* Your dynamic content based on the search input goes here */}
              <h2 >What are you looking for</h2>
              <hr className='bg-black w-full' />
              <h1 className='p-4 text'>POPULAR  SERVICES</h1>
              <div className='grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 my-2 '>
                <div className='bg-gray-200 p-2 rounded-md'>Threading</div>
                <div className='bg-gray-200 p-2 rounded-md'>Waxing</div>
                <div className='bg-gray-200 p-2 rounded-md'>Facials</div>
                <div className='bg-gray-200 p-2 rounded-md'>Trimming</div>
                <div className='bg-gray-200 p-2 rounded-md'>Extension</div>
                <div className='bg-gray-200 p-2 rounded-md'>Skin Polish</div>
                <div className='bg-gray-200 p-2 rounded-md'>Keratin</div>
                <div className='bg-gray-200 p-2 rounded-md'>Makeup</div>
                <div className='bg-gray-200 p-2 rounded-md'>Cleansing</div>
                <div className='bg-gray-200 p-2 rounded-md'>Face lifting</div>
                <div className='bg-gray-200 p-2 rounded-md'>Manicure</div>
                <div className='bg-gray-200 p-2 rounded-md'>Pedicure</div>
                {/* Add more services as needed */}
              </div>
              {/* Add your logic to fetch and display related services */}
            </div>
          )}
          <span className='absolute -mx-60 top-1/2 transform -translate-y-1/2 '>
            <input type="text" placeholder='Where?' className='w-full sm:w-4/6 outline-none px-4 py-2' />
          </span>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      ></div>
      {/* Search bar inside the carousel */}

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
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;