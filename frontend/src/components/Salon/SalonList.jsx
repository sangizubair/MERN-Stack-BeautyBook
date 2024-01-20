import React, { useState, useEffect, useContext } from 'react';
import Slider from 'react-slick';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="flex justify-center items-center">
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="slider-container">
          <Slider {...settings}>
            {salonsToDisplay.map((salonItem) => (
              <div key={salonItem._id} className="instagram-card p-8">
                <Link to={`/salonDetail/${salonItem._id}`}>
                  <figure className='w-full h-[200px] mb-2 overflow-hidden'>
                    <img src={salonItem.photo} alt={''} className='w-full h-full object-cover' />
                  </figure>
                  <h3 className="text-lg font-semibold">{salonItem.ownerName}</h3>
                   <p className="text-gray-500">{salonItem.address}</p>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      {/* Add your custom arrow icon or use a pre-made icon */}
      <span>&#8594;</span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      {/* Add your custom arrow icon or use a pre-made icon */}
      <span>&#8592;</span>
    </div>
  );
};

export default SalonList;
