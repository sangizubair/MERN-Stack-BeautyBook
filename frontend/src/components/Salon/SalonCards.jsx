import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import Rating from '../Rating/rating';

const SalonCard = () => {
  const { token, salon } = useContext(authContext);
  const [allSalons, setAllSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSalons, setFilteredSalons] = useState([]);

  useEffect(() => {
    const fetchAllSalons = async () => {
      try {
        const response = await fetch(`${BASE_URL}/salons/${salon._id}/all`, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`,
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

    if (token && salon) {
      fetchAllSalons();
    }
  }, [token, salon]);

  const handleSearch = async () => {
    try {
      const query = searchQuery.trim().toLowerCase();
      const filteredSalons = allSalons.filter((salonItem) =>
        salonItem.salonName.toLowerCase().includes(query)
      );
      setFilteredSalons(filteredSalons);
    } catch (error) {
      console.error('Error searching salons:', error.message);
    }
  };

  const salonsToDisplay = searchQuery ? filteredSalons : allSalons.filter((salonItem) => salonItem._id !== salon._id);
   // Function to truncate address to 4 to 5 words
   const truncateAddress = (address) => {
    const words = address.split(' ');
    return words.slice(0, 10).join(' ');
  };
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="max-w-[1170px] px-5 mx-auto">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Search for a salon..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSearch}
              className="ml-2 bg-btnColor text-white px-4 py-2 rounded-md"
            >
              Search
            </button>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {salonsToDisplay.map((salonItem) => (
              <Link to={`/salonDetail/${salonItem._id}`} key={salonItem._id}>
                <div className="salon-card p-8">
                  {/* Display salon details here */}
                  <figure className="w-[200px] h-[200px] rounded-full border-2 border-solid mb-4">
                  <img src={salonItem.photo} alt="" className="w-full h-full object-cover rounded" />
                </figure>
                  <h3 className="text-lg font-semibold">{salonItem.salonName}</h3>
                  <div className="flex items-center">
                  <Rating value={5} /> {/* Hardcoded value for demonstration, replace with actual rating */}
                  <p className="text-gray-500 ml-2">5.0 rating</p>
                </div>
                <p className="text-gray-500">{truncateAddress(salonItem.address)}</p>
                  {/* ... (other salon details) */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SalonCard;
