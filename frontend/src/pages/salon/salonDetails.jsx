import React from 'react';
import { useParams } from 'react-router-dom';
import salons from '../../assets/data/salon';
import StarRating from '../../components/Rating/rating.jsx';
import { useState } from 'react';
import Feedback from './Feedback.jsx';
import SidePanel from './SidePanel.jsx';

const SalonDetails = () => {
  const { id } = useParams();
  const selectedSalon = salons.find(salon => salon.id === id);
  // Add state for managing service visibility
  const [showAllServices, setShowAllServices] = useState(false);

  if (!selectedSalon) {
    return <div>Salon not found</div>;
  }

  const {
    salonName,
    expereince,
    avgRating,
    totalRating,
    photo,
    totalClients,
    location,
    phone,
    type,
    about,
    services,
  } = selectedSalon;

  // Show only the first 5 services or all services based on the state
  const visibleServices = Array.isArray(services) ? (showAllServices ? services : services.slice(0, 5)) : [];


  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[30px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center'>
              <img src={photo} alt={salonName} className='w-80 h-80' />
            </div>
            <div>
              <h2>{salonName}</h2>
              <p>Location: {location}</p>
              {/* <p>Experience: {expereince}</p>
              <p>Average Rating: {avgRating} ({totalRating} reviews)</p>
              <p>Total Clients: {totalClients}</p>
              <p>Phone: {phone}</p>
              <p>Type: {type}</p>
              <p>About: {about}</p> */}
              <div className='flex items-center gap-[6px]'>
                <span className='flex items-center gap-2'>{avgRating}</span>
                {<StarRating />} <span className='text-[14px] leading-6  lg:text-[16px] lg:leading-7 text-textColor font-[400]'>({totalRating})</span>
              </div>

              {/* Display services if available */}
              {services && services.length > 0 && (
                <div className='mt-8'>
                  <h3>Services:</h3>
                  <table className="table-auto mt-2">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b-2">Service</th>
                        <th className="px-4 py-2 border-b-2">Price</th>
                        {/* <th className="px-4 py-2 border-b-2">Actions</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {visibleServices.map((service, index) => (
                        <tr key={index} className="border-t-2">
                          <td className="px-4 py-2">{service.name}</td>
                          <td className="px-4 py-2">{service.price}</td>
                          <td className="px-4 py-2">
                            <button className="bg-btnColor text-white px-4 py-2 rounded">Book</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {!showAllServices && services.length > 5 && (
                    <button className="mt-2 text-blue-500" onClick={() => setShowAllServices(true)}>
                      See All
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
          
          <div>
            <SidePanel />
          </div>
        </div>
        <section>
          <Feedback />
        </section>


      </div>




    </section>
  );
};

export default SalonDetails;
