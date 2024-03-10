import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Services = () => {
  const [allSalons, setAllSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [currentTab, setCurrentTab] = useState('Hair Services');
  const { id } = useParams();
  // to show all services with toggle button 
  const [showAll, setShowAll] = useState(false);
  const params = useParams();
  
  useEffect(() => {
   if(params.current){
     setCurrentTab(params.current);
   }
  },[]);

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  };


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

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
        setError('Something went wrong while fetching all salons.');
        setLoading(false);
      }
    };

    fetchAllSalons();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  // handle 
  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);

  };

  const filterServices = (services, categoryName) => {
    return services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (parseFloat(service.price) <= parseFloat(priceFilter) || !priceFilter) &&
      service.name.toLowerCase().includes(categoryName.toLowerCase())
    );
  };

  const filteredSalons = allSalons.filter(salon =>
    salon.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
    salon.services.length > 0 &&  // Check if salon has services
    salon.services.some(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (parseFloat(service.price) <= parseFloat(priceFilter) || !priceFilter) &&
      service.name.toLowerCase().includes(currentTab.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="flex flex-row items-center justify-center mb-2">
        {/* <input
          type="text"
          placeholder="Search by service name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 text-base border border-gray-300 rounded mb-2"
          style={{ width: '100%', maxWidth: '300px' }}
        /> */}
        <input
          type="number"
          placeholder="Max price"
          value={priceFilter}
          onChange={handlePriceFilterChange}
          className="p-2 text-base border border-gray-300 rounded mb-2"
          style={{ width: '100%', maxWidth: '300px' }}
        />
        <input
          type="text"
          placeholder="Search by location"
          value={locationFilter}
          onChange={handleLocationFilterChange}
          className="p-2 text-base border border-gray-300 rounded mb-2"
          style={{ width: '100%', maxWidth: '300px' }}
        />
      </div>

      <Slider {...settings}>
        {['Hair Services', 'Whitening Treatments', 'Body Treatments', 'Bleach and Polish', 'Nail Treatments', 'Facial services', 'makeup', 'Threading services', 'Waxing services', 'Cleansing services', 'Hand and feet services'].map((tabName, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(tabName)}
            className={`px-4 py-2  mr-2 ${currentTab === tabName ? 'bg-gray-200' : ''}`}
            style={{ width: 'fit-content', minWidth: 'min-content' }}
          >
            {tabName} 
          </button>
        ))}
      </Slider>
      <div className="mt-4">
        {filteredSalons.map((salon, salonIndex) => (
          <div key={salonIndex} className="salon-card bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">{salon.salonName}</h2>
            <p><strong>Location:</strong> {salon.location}</p>
            <div className="mt-4">
              <table className="table-auto w-full">
                <tbody>
                  {filterServices(salon.services, currentTab).map((service, serviceIndex) => (
                    <tr key={serviceIndex} className="border-b border-gray-400" style={{ display: showAll || serviceIndex < 3 ? 'table-row' : 'none' }}>
                      <td className="p-4">
                        <img src={service.serviceImage} alt="service" className="w-full h-auto max-h-[180px] max-w-[400px]" />
                      </td>
                      <td className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex-grow mb-2 sm:mb-0">
                          <h4 className="text-lg font-semibold mb-2">{service.serviceDescription}</h4>
                        </div>
                        <div>
                          <p className="flex-grow">RS{service.price}</p>
                        </div>
                        <div className="flex justify-center sm:justify-start">
                          <Link to={`/booking/${salon._id}/service/${service._id}`} className="block">
                            <button className="bg-btnColor text-white px-3 py-1 mt-2 sm:mt-0 sm:ml-2 sm:px-6 sm:py-2 rounded-md">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredSalons.length > 0 && (
                <div className="flex justify-center mt-4">
                  <button onClick={() => setShowAll(!showAll)} className="bg-btnColor text-white px-4 py-2 rounded-md">
                    {showAll ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;


