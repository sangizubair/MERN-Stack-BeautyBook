import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import e from 'express';

// this is  for salon only 
const MyBookings = () => {
  const { token, salon } = useContext(authContext);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext)

  const handleConfirmBooking = async (bookingId) => {
    try {
      const response = await fetch(`${BASE_URL}/updatebooking/${salon._id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookingId: bookingId, // Send salonId or userId, whichever is appropriate
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to confirm booking');
      }
      else {
        console.log(response)
      }


      // Update the local state to reflect the changes
      // setUserProfile((prevProfile) => {
      //   const updatedBookings = prevProfile.map((booking) =>
      //     booking._id === bookingId ? { ...booking, status: 'approved' } : booking
      //   );
      //   return updatedBookings;
      // });
    } catch (error) {
      console.error('Error confirming booking:', error.message);
      setError('Failed to confirm booking.');
    }
  };


  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`${BASE_URL}/auth/salonbookings/${salon._id}`, {
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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
        setError('Something went wrong while fetching user profile.');
        setLoading(false);
      }
    };

    if (token && salon) {
      fetchUserProfile();
    }
  }, [token, salon]); // 
  return (
    <div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userProfile && (
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
          <div >

            {userProfile.map((booking) => (
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
                    <button onClick={() => handleConfirmBooking(booking._id)} className='bg-btnColor text-white px-4 py-2 rounded-md text-sm font-medium'>
                      Confirm
                    </button>
                  </div>
                </div>
                <h3 className='text-lg font-bold'>Booking ID: {booking._id}</h3>
                <ul>
                  {booking.services && Array.isArray(booking.services) && booking.services.map((service) => (
                    <li key={service._id}>
                      <p className='text-sm font-medium'>Service Name:{service.name}</p>
                      <p>Service Price:{service.price}</p>

                      {/* ... (display other service details as needed) */}
                    </li>
                  ))}
                  <li>
                    <p>Booking date:{booking.appointmentDate}</p>
                    <p>Booking Time{booking.timeSlot}</p>
                  </li>
                </ul>
                <p>Status: {booking.status}</p>
                {/* Add other booking details here */}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default MyBookings;



