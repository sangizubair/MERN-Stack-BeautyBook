import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
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

  return (
    <section className="flex justify-center items-center">
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default SalonList;
