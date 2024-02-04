import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SidePanel from './SidePanel';
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
                          <Link to={`/booking/${id}/service/${service._id}`}>
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

          <section className="w-1/4 bg-white p-4 ">
            <div className='shadow-panelShadow p-3  lg:p-5 rounded-md'>
              <div className=' flex flex-col items-start'>
                <p className='text__para mt-0  font-semibold text-headingColor '>
                  ABOUT US
                </p>
                <p className='text-[16px] text__para leading-7  mt-4 text-textColor'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, molestias?</p>
              </div>
              <hr />
              <div className='mt-[30px]'>
                <p className='text__para mt-0  font-semibold text-headingColor '>
                  CONTACT & BUSINESS HOURS
                </p>

                <div className='flex justify-stretch gap-2 mt-4 items-center'>
                  <p className=' text__para mt-0 text-headingColor'>

                  </p><span className='text-textColor'>923144684607</span>
                </div>
              </div>
              <hr />

              <div className='mt-[30px]'>
                <p className='text__para mt-0 font-semibold text-headingColor'>
                  Availble Time Slots
                </p>
                <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b border-solid px-4 py-2">Day</th>
              <th className="border-b border-solid px-4 py-2">Working Hours</th>
            </tr>
          </thead>
          <tbody>
            {salonDetails.workingHours && salonDetails.workingHours.map((hours, index) => (
              <tr key={index}>
                <td className="border-b border-solid px-4 py-2">{hours.day}</td>
                <td className="border-b border-solid px-4 py-2">
                  
                  {hours.dayOnOff ? `${hours.startTime} - ${hours.endTime}` : 'Closed'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
              </div>
            </div>
          </section>


        </div>

      )}
    </div>
  );
};

export default SalonDetails;
