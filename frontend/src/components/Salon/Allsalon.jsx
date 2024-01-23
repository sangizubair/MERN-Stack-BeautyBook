import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BASE_URL } from '../../../config';
import { Link } from 'react-router-dom';

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="flex justify-center items-center">
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="md:col-span-2 md:px-[20px]">
            {allSalons.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">All Salons</h2>
                <Carousel responsive={responsive}
                 // ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  showDots={true}
                  arrows={true}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={['tablet', 'mobile']}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-60-px"
                >
                  {allSalons.map((salonItem) => (
                    <Link to={`/salonDetail/${salonItem._id}`} key={salonItem._id}>
                      <div className="salon-card p-8 border border-gray-300 rounded mb-4">
                        {/* Display salon details here */}
                        <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid mb-4'>
                          <img src={salonItem.photo} alt={''} className='w-full h-full' />
                        </figure>
                        <h3 className="text-lg font-semibold">{salonItem.ownerName}</h3>
                        <p className="text-gray-500">{salonItem.address}</p>
                      </div>
                    </Link>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Allsalon;
