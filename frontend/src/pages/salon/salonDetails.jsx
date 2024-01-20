import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import useLocation



const SalonDetails = () => {
  const { token, salon } = useContext(authContext);
  const { id } = useParams();
  const [salonDetails, setSalonDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalonDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/salons/${id}`, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',

          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch salon details');
        }

        const salonData = await response.json();
        setSalonDetails(salonData.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching salon details:', error.message);
        setError('Something went wrong while fetching salon details.');
        setLoading(false);
      }
    };

    fetchSalonDetails();
  }, [id]);

  return (
    
    <div className='flex justify-center items-center'>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {salonDetails && (
        <div className='w-full max-w-[1170px] flex justify-center items-center'>
          <section className="w-3/4 mr-10">
            <figure className="w-[500px] h-[300px] border-2 border-solid mb-4">
              <img src={salonDetails.photo} alt={''} className="w-full h-full" />
            </figure>
            <h1 className="text-3xl font-bold mb-2">{salonDetails.salonName || 'Beauty Salon'}</h1>
            {/* <h2>{salonDetails.ownerName}</h2> */}
            <p>
              {salonDetails.address || 'Address'} 
            </p>
            {/* Display other details as needed */}
            {/* ... (other salon details) */}
            <div className='mt-10'>
              <h2 className="text-xl font-semibold mb-2">Service</h2>
              <table className="w-full border-collapse">
                <tbody>
                  {salonDetails.services && salonDetails.services.map(service => (
                    <React.Fragment key={service.id}>
                      <tr>
                        <td className="border-b border-solid px-4 py-2 ">
                        <span className="font-extrabold">{service.name}</span>
                         <div className='mt-1'>
                          <p >
                            {service.serviceDescription}
                          </p>
                         </div>
                        </td>
                        <td className="border-b border-solid px-4 py-2 text-sm">{service.price}</td>
                        <td className="border-b border-solid px-4 py-2 text-sm">
                        <Link to={`/booking?serviceName=${encodeURIComponent(service.name)}&serviceDescription=${encodeURIComponent(service.serviceDescription)}&servicePrice=${encodeURIComponent(service.price)}`}>
                          <button className="bg-btnColor text-white px-2 py-1 mt-2">Book</button>
                        </Link>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="w-1/4 bg-white p-4">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p>Email: {salonDetails.email}</p>
              {/* Add other contact details */}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Address</h2>
              <p>{salonDetails.address}</p>
              {/* Add other address details */}
            </div>
          </section>

        </div>
      )}
    </div>
  );
};

export default SalonDetails;
