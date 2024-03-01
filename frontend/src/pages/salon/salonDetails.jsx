import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const SalonDetails = () => {
  const { token, salon } = useContext(authContext);
  const { id } = useParams();
  const [salonDetails, setSalonDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);

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

  const toggleShowAllServices = () => {
    setShowAllServices(!showAllServices);
  };

  const toggleShowAllImages = () => {
    setShowAllImages(!showAllImages);
  };

  return (
    <div className="flex flex-col items-center">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {salonDetails && (
        <div className="w-full max-w-[1170px] flex flex-col lg:flex-row justify-center items-start lg:items-center lg:space-x-10 p-4 lg:p-0">
          {/* Salon Information (Left Side) */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            {/* Salon Photo */}
            <figure className="w-full h-[300px] lg:h-auto lg:max-w-[400px] border-2 border-solid mb-4">
              <img src={salonDetails.photo} alt="" className="w-full h-full object-cover" />
            </figure>
            {/* Salon Name */}
            <h1 className="text-3xl font-bold mb-2">{salonDetails.salonName || 'Beauty Salon'}</h1>
            {/* Salon Address */}
            <p>{salonDetails.address || 'Address'}</p>
          </div>
          {/* About Section (Right Side) */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">About Us</h2>
              <p className="text-sm leading-7">{salonDetails.bio || 'Beauty salon'}</p>
              <p className='text-sm leading-7'> <strong>Contact</strong>: {salonDetails.phone}</p>
              <p className='text-sm leading-7'> <strong>Email</strong>: {salonDetails.email}</p>

              {/* Working Hours */}
              {/* Working Hours */}
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Working Hours</h2>
                <table className="w-full border-collapse">
                  <tbody>
                    {salonDetails.workingHours &&
                      salonDetails.workingHours.map((hours, index) => {
                        const startHour = parseInt(hours.startTime.split(':')[0]);
                        const endHour = parseInt(hours.endTime.split(':')[0]);
                        const startMin = hours.startTime.split(':')[1];
                        const endMin = hours.endTime.split(':')[1];
                        const startPeriod = startHour >= 12 ? 'PM' : 'AM';
                        const endPeriod = endHour >= 12 ? 'PM' : 'AM';
                        const formattedStartTime =
                          startHour > 12 ? `${startHour - 12}:${startMin} ${startPeriod}` : `${startHour}:${startMin} ${startPeriod}`;
                        const formattedEndTime =
                          endHour > 12 ? `${endHour - 12}:${endMin} ${endPeriod}` : `${endHour}:${endMin} ${endPeriod}`;
                        return (
                          <tr key={index}>
                            <td className="border-b border-solid px-4 py-2">{hours.day}</td>
                            <td className="border-b border-solid px-4 py-2">
                              {hours.dayOnOff ? `${formattedStartTime} - ${formattedEndTime}` : 'Closed'}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>


            </div>
          </div>
        </div>
      )}
      {/* Services Section */}
      <div className="w-full max-w-[1170px] mt-10">
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        <table className="w-full border-collapse mb-4">
          <tbody>
            {salonDetails.services &&
              (showAllServices ? salonDetails.services : salonDetails.services.slice(0, 10)).map((service) => (
                <tr key={service.id}>
                  <td className="border-b border-solid px-4 py-2">
                    <span className="font-extrabold">{service.name}</span>
                    <div className="mt-1">
                      <p>{service.serviceDescription}</p> 
                    </div>
                  </td>
                  <td className="border-b border-solid px-10 py-2 text-sm">RS {service.price}</td>
                  <td className="border-b border-solid px-4 py-2 text-sm">
                    <Link to={`/booking/${id}/service/${service._id}`}>
                      <button className="bg-btnColor text-white px-2 py-1 mt-2">Book</button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {salonDetails.services && salonDetails.services.length > 10 && (
          <button onClick={toggleShowAllServices} className="text-btnColor font-semibold mt-2 focus:outline-none">
            {showAllServices ? 'Show less' : 'See more'}
          </button>
        )}
      </div>
      {/* Cover Images */}
      <div className="w-full max-w-[1170px] mt-10">
        <h2 className="text-xl font-semibold mb-2">Our works</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {salonDetails.coverImage &&
            (showAllImages ? salonDetails.coverImage : salonDetails.coverImage.slice(0, 3)).map((image, index) => (
              <div key={index} className="w-full overflow-hidden rounded-md">
                <img
                  src={image}
                  alt={`Cover ${index}`}
                  className="w-full h-64 object-cover"
                  style={{ maxHeight: '300px' }} // Set max height to control the height of images
                />
              </div>
            ))}
        </div>
        {salonDetails.coverImage && salonDetails.coverImage.length > 3 && (
          <button onClick={toggleShowAllImages} className="text-btnColor font-semibold mt-2 focus:outline-none">
            {showAllImages ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    </div>
  );
};

export default SalonDetails;
