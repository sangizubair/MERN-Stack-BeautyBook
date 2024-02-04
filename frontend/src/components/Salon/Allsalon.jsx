import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { BASE_URL } from '../../../config';
import { Link } from 'react-router-dom';
import SalonProfile from '../../assets/images/salonProfile.png'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Allsalon = () => {
  const [allSalons, setAllSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllSalons = async () => {
      try {
        const response = await fetch(`${BASE_URL}/salons/`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch all salons');
        }

        const salonsData = await response.json();
        setAllSalons(salonsData.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching all salons:', error.message);
        setError('Something went wrong while fetching all salons.');
        setLoading(false);
      }
    };

    fetchAllSalons();
  }, []);

  // Custom responsive settings
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed:5000
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed:5000

      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed:5000
      },
    },
  ];

  // Custom arrow components
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev" onClick={onClick}>
        <span>&#8592;</span>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow next" onClick={onClick}>
        <span>&#8594;</span>
      </div>
    );
  };

  return (
    <section className="flex justify-center items-center">
      <div className="max-w-[400px] px-5  ">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {allSalons.length > 0 && (
          <div >
            <h2 className="text-xl font-semibold mb-4">Our Recommended Salons</h2>
            <Slider dots   autoplaySpeed={2000}
            
            responsive={responsiveSettings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
              {allSalons.map((salonItem) => (
                <Link to={`/salonDetail/${salonItem._id}`} key={salonItem._id}>
                  <div className=" p-8 border border-gray-300 rounded mb-4">
                    {/* Display salon details here */}
                    <figure className='w-[150px] h-[150px] rounded-full border-2 border-solid mb-4'>
                      <img src={salonItem.photo} alt={''} className='w-full h-full' />
                    </figure>
                    <h3 className="text-lg font-semibold">{salonItem.ownerName}</h3>
                    <p className="text-gray-500">{salonItem.address}</p>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default Allsalon;
