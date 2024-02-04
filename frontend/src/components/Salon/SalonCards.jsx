import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
const SalonCard = () => {
  const { token, salon } = useContext(authContext);
  const [allSalons, setAllSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const salonsToDisplay = allSalons.filter((salonItem) => salonItem._id !== salon._id);

  return (
      <>
       <section className='bg-[#fff9ea]'>
        <div className='container text-center'>
          <h2 className='heading'>Find a Salon</h2>
          <div className='max-w-[570px] mt-[30px] bg-[#0066ff2c] mx-auto rounded-md flex items-center  justify-center  '>
            <input type="text" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='search salon..' />
            <button className='bg-btnColor btn mt-0 rounded-[0px] rounded-r-md'>
              Search
            </button>
          </div>
        </div>
      </section>
    <section className="flex justify-center items-center">
      <div className="max-w-[1170px] px-5 mx-auto ">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {salonsToDisplay.map((salonItem) => (
            <Link to={`/salonDetail/${salonItem._id}`} key={salonItem._id}>
              <div className="salon-card p-8">
                {/* Display salon details here */}
                <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid mb-4'>
                  <img src={salonItem.photo} alt={''} className='w-full h-full' />
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

    </>
  );
};

export default SalonCard;




    