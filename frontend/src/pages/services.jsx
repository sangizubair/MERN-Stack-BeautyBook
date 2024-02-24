import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
const Services = () => {
  const [allSalons, setAllSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [salonsPerPage] = useState(3);

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
       // console.error('Error fetching all salons:', error.message);
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

  const indexOfLastSalon = currentPage * salonsPerPage;
  const indexOfFirstSalon = indexOfLastSalon - salonsPerPage;
  const currentSalons = allSalons.slice(indexOfFirstSalon, indexOfLastSalon);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterServices = (services, categoryName) => {
    return services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (parseFloat(service.price) <= parseFloat(priceFilter) || !priceFilter) &&
      service.name.toLowerCase() === categoryName.toLowerCase()
    );
  };

  const filterSalons = (salons) => {
    return salons.filter(salon =>
      salon.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
      salon.services.some(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (parseFloat(service.price) <= parseFloat(priceFilter) || !priceFilter)
      )
    );
  };

  const renderSalon = (salon) => {
    if (!salon.services || salon.services.length === 0) {
      return null; // Don't render salon card if it has no services
    }
  
    return (
      <div key={salon._id}>
        <h2 className="text-xl font-bold mb-4">{salon.salonName}</h2> 
        <p><strong>Location:</strong> {salon.location}</p>
        {['Hair Services', 'Hair styling services ', 'Whitening Treatments', 'Body Treatments', 'Nail Treatments', 'Bleach and Polish services', 'Bleach services ', 'Facial services' , 'makeup' , 'makup services', 'Body sculpting / Fat loss' , 'Threading services' , 'Party makeup' , 'Bridal makeup services' , 'Waxing services' , 'Manicure / pedicure services' , 'Cleansing services ','Hand and feet services' , 'Mehndi Pacage' , 'MINI barat glow pacage' , 'Barat Glamour bridal Pacage' , 'Pakistani celebrity bridal pacage' , 'Hair styling' , 'Hair Colour' ].map((category, index) => {
          const filteredServices = filterServices(salon.services, category);
          if (filteredServices.length === 0) {
            return null; // Don't render category if salon doesn't offer services under this category
          }
          return (
            <div key={index} className="service-category mb-4">
              <h3 className="text-lg font-bold mb-2">{category}</h3>  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredServices.map((service, serviceIndex) =>(
                  <div key={serviceIndex} className="service-card bg-white border border-gray-200 rounded-lg shadow-md p-4">
                    <Link to={`/salonDetail/${salon._id}`} className="block">
                      <h4 className="text-lg font-semibold mb-2">{service.serviceDescription}</h4>
                      <p className="mb-2"><strong>Price:</strong> RS{service.price}</p>
                      <img src={service.serviceImage} alt="service" className="w-full h-auto " style={{ maxHeight: '180px', maxWidth : '400px' }} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  

  const filteredSalons = filterSalons(currentSalons);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
  <div className="flex flex-row items-center justify-center mb-2">
  <input
    type="text"
    placeholder="Search by service name"
    value={searchQuery}
    onChange={handleSearchChange}
    className="p-2 text-base border border-gray-300 rounded mb-2"
    style={{ width: '100%', maxWidth: '300px' }} // Added style for mobile responsiveness
  />
  <input
    type="number"
    placeholder="Max price"
    value={priceFilter}
    onChange={handlePriceFilterChange}
    className="p-2 text-base border border-gray-300 rounded mb-2"
    style={{ width: '100%', maxWidth: '300px' }} // Added style for mobile responsiveness
  />
  <input
    type="text"
    placeholder="Search by location"
    value={locationFilter}
    onChange={handleLocationFilterChange}
    className="p-2 text-base border border-gray-300 rounded mb-2"
    style={{ width: '100%', maxWidth: '300px' }} // Added style for mobile responsiveness
  />
</div>


      {filteredSalons.map((salon, salonIndex) => {
        const filteredServices = salon.services.filter(service =>
          service.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (parseFloat(service.price) <= parseFloat(priceFilter) || !priceFilter)
        );

        if (filteredServices.length === 1) {
          return null; // Don't render salon card if it has no services after filtering
        }

        return (
          <div key={salonIndex} className="salon-card bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6">
            {renderSalon(salon)}
          </div>
        );
      })}
      {/* Pagination */}
      <div className="flex justify-center">
        <ul className="flex list-none">
          {Array.from({ length: Math.ceil(allSalons.length / salonsPerPage) }, (_, i) => (
            <li key={i}>
              <button
                className={`px-3 py-1 mx-1 focus:outline-none ${
                  i + 1 === currentPage ? 'bg-btnColor' : 'bg-gray-200'
                }`}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
