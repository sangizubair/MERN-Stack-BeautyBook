import React, { useState, useEffect, useContext } from 'react';
import Slider from 'react-slick';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Rating from '../Rating/rating';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SalonList = () => {
  const { salon } = useContext(authContext);
  const [allSalons, setAllSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllSalons = async () => {
      try {
        let url;
        if (salon) {
          url = `${BASE_URL}/salons/${salon._id}/all`;
        }
        const response = await fetch(url, {
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

    if (salon) {
      fetchAllSalons();
    }
  }, [salon]);

  const salonsToDisplay = allSalons.filter((salonItem) => salonItem._id !== salon?._id);

  // Custom responsive settings for the slider
  const responsiveSettings = [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
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

  // Function to truncate address to 4 to 5 words
  const truncateAddress = (address) => {
    const words = address.split(' ');
    return words.slice(0, 10).join(' ');
  };

  return (
    <section className="flex justify-center items-center">
      <div className="lg:w-[1000px] md:w-[600px] w-[350px] px-5">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <Slider
          dots
          responsive={responsiveSettings}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {salonsToDisplay.map((salonItem) => (
            <div key={salonItem._id} className="p-4 border border-gray-300 rounded mb-4 w-[300px] ">
              <Link to={`/salonDetail/${salonItem._id}`}>
                <figure className="w-full h-[200px] mb-4">
                  <img src={salonItem.photo} alt={''} className="w-full h-full object-cover rounded" />
                </figure>
                <h3 className="text-lg font-semibold">{salonItem.ownerName}</h3>
                <div className="flex items-center">
                  <Rating value={5} /> {/* Hardcoded value for demonstration, replace with actual rating */}
                  <p className="text-gray-500 ml-2">5.0 rating</p>
                </div>
                <p className="text-gray-500">{truncateAddress(salonItem.address)}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SalonList;
