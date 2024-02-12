import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../config';
import { Link } from 'react-router-dom';

const Services = () => {
  const [allSalons, setAllSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const filteredSalons = allSalons.filter((salonItem) => {
    return salonItem.services.some((service) => {
      const serviceNameMatch = service.name.toLowerCase().includes(searchQuery);
      const priceMatch = !priceFilter || parseFloat(service.price) <= parseFloat(priceFilter);
      return serviceNameMatch && priceMatch;
    });
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="flex items-center mb-4 justify-center">
        <input
          type="text"
          placeholder="Search by service name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="mr-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Max price"
          value={priceFilter}
          onChange={handlePriceFilterChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <h1 className="text-3xl font-semibold mb-4">Hair related Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSalons.map((salonItem) => (
          salonItem.services
            .filter((service) => service.name.toLowerCase().includes('hair'))
            .map((service, index) => (
              <div key={index} className="facial-service-card bg-white border-2 rounded-lg shadow-md p-6">
                <Link to={`/salonDetail/${salonItem._id}`}>
                  <h3 className="text-lg font-semibold">{salonItem.ownerName}</h3>
                </Link>
                <p><strong>Service Name:</strong> {service.name}</p>
                <p><strong>Description:</strong> {service.serviceDescription}</p>
                <p><strong>Price:</strong> RS{service.price}</p>
              </div>
            ))
        ))}
      </div>
      <h1 className="text-3xl font-semibold mb-4">Facial related Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSalons.map((salonItem) => (
          salonItem.services
            .filter((service) => service.name.toLowerCase().includes('facial'))
            .map((service, index) => (
              <div key={index} className="facial-service-card bg-white border-2 rounded-lg shadow-md p-6">
                <Link to={`/salonDetail/${salonItem._id}`}>
                  <h3 className="text-lg font-semibold">{salonItem.ownerName}</h3>
                </Link>
                <p><strong>Service Name:</strong> {service.name}</p>
                <p><strong>Description:</strong> {service.serviceDescription}</p>
                <p><strong>Price:</strong> RS{service.price}</p>
              </div>
            ))
        ))}
      </div>
    </div>
  );
};

export default Services;
