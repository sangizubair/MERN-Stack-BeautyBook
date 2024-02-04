import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import SalonCard from './SalonCards';
import { Link } from 'react-router-dom';

const SalonCardsAll = () => {
  const [allSalons, setAllSalons] = useState([]);
  const [filteredSalons, setFilteredSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  useEffect(() => {
    const fetchAllSalons = async () => {
      try {
        const response = await fetch(`${BASE_URL}/salons`, {
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

  const handleSearch = async () => {
    try {
      setSearchLoading(true);

      const query = searchQuery.trim().toLowerCase();
      const filteredSalons = allSalons.filter((salonItem) =>
        salonItem.ownerName.toLowerCase().includes(query)
      );
      setFilteredSalons(filteredSalons);
    } catch (error) {
      console.error('Error searching salons:', error.message);
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center">
      <div className="max-w-[1170px] px-5 mx-auto ">
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
            disabled={searchLoading}
            className="ml-2 bg-btnColor text-white px-4 py-2 rounded-md"
          >
            {searchLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
        {searchQuery && !searchLoading && filteredSalons.length === 0 && (
          <p>No salons found for the search query.</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(searchQuery ? filteredSalons : allSalons).map((salonItem) => (
            <Link to={`/salonDetail/${salonItem._id}`} key={salonItem._id}>
              <div className="salon-card p-8">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid mb-4">
                  <img src={salonItem.photo} alt="" className="w-full h-full" />
                </figure>
                <h3 className="text-lg font-semibold">{salonItem.ownerName}</h3>
                <p className="text-gray-500">{salonItem.address}</p>
                {/* ... (other salon details) */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalonCardsAll;
