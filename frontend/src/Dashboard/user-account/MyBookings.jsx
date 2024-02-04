import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MyBookings = () => {
  const { token, user } = useContext(authContext);
  const [userProfile, setUserProfile] = useState(null);
  const [userBookings, setUserBookings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users/profile/${user._id}`, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const userData = await response.json();
        setUserProfile(userData.data);
        setUserBookings(userData.data.appointments);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
        setError('Something went wrong while fetching user profile.');
        setLoading(false);
      }
    };

    if (token && user) {
      fetchUserProfile();
    }
  }, [token, user]); // 
  return (
    <div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userProfile && userBookings && (


        <div>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold mb-2'>My Bookings</h1>
            <button className='bg-btnColor text-white px-4 py-2 rounded-md text-sm font-medium'>
              <Link to='/dashboard/user-account/bookings'>View All</Link>
            </button>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold mb-2'>0</h1>
              <p className='text-sm font-medium'>Upcoming</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold mb-2'>0</h1>
              <p className='text-sm font-medium'>Past</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold mb-2'>0</h1>
              <p className='text-sm font-medium'>Cancelled</p>
            </div>
          </div>
          <div>
            {userBookings.map((booking) => (
              <div key={booking._id} className='bg-white p-4 rounded-md shadow-xl mt-4'>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-4'>
                    {/* <div className='w-[100px] h-[100px] rounded-full border-2 border-solid'>
                    <img src={booking.salonId.photo} alt='' className='w-full h-full' />
                  </div> */}
                    {/* <div>
                    <h1 className='text-xl font-bold'>{booking.salonId.salonName}</h1>
                    <p className='text-sm font-medium'>{booking.salonId.address}</p>
                  </div> */}
                  </div>
                  <div className='mt-4 space-x-4'>
                    <button className='bg-btnColor text-white px-4 py-2 rounded-md text-sm font-medium'>
                      delete
                    </button>
                    <button className='bg-btnColor text-white px-4 py-2 rounded-md text-sm font-medium'>
                      confirm
                    </button>
                  </div>
                </div>
                <div className='flex justify-between items-center mt-4'>
                  <div>
                    <p className='text-sm font-medium'>Booking Date</p>

                    <p className='text-sm font-medium'>{booking.appointmentDate}</p>

                  </div>
                  <div>
                    <p className='text-sm font-medium'>Booking Time</p>
                    <p className='text-sm font-medium'>{booking.timeSlot}</p>
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Booking Status</p>
                    <p className='text-sm font-medium'>{booking.status}</p>
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Salon name</p>
                    <p className='text-sm font-medium'>{booking.salonName}</p>
                  </div>
                  <div className='mt-4'>
                    <h2 className='text-lg font-semibold mb-2'>Services</h2>
                    <ul>
                      {booking.services && Array.isArray(booking.services) && booking.services.map((service) => (
                        <li key={service._id}>
                          <p className='text-sm font-medium'>{service.name}</p>
                          <p>{service.price}</p>

                          {/* ... (display other service details as needed) */}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      )}

    </div>
  )
}

export default MyBookings;



