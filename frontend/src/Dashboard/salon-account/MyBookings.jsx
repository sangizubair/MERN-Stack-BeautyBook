import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// this is  for salon only 
const MyBookings = () => {
  const { token, salon } = useContext(authContext);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { salonId } = useParams();
  const { dispatch } = useContext(authContext)
  const [confirmationStatus, setConfirmationStatus] = useState({
    confirmed: false,
    canceled: false,
  });
   // states to calculate the number of bookings cancelled and confirmed
  const [confirmedCount, setConfirmedCount] = useState(0);
  const [canceledCount, setCanceledCount] = useState(0);
  const [pendingBookings, setPendingBookings] = useState(0);

  // this is handleConfirmBooking approved
  const handleConfirmBooking = async (bookingId) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/updatebooking/${salon._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the authorization header if needed
        },
        body: JSON.stringify({
          bookingId: bookingId,
        }),
      });
  
      if (!response.ok) {
        console.log(response); // Log the entire response for debugging
        throw new Error('Failed to confirm booking');
      }
     // const updatedBooking = await response.json();
     // console.log('Updated Booking:', updatedBooking);
      setConfirmationStatus({ confirmed: true, canceled: false });
      toast.success('Booking confirmed successfully');
      // Optionally, you can update the local state or perform any other actions
    } catch (error) {
      console.error('Error confirming booking:', error.message);
    }
   
  };


  // this is handleConfirmBookingCancel
  const handleConfirmBookingCancel = async (bookingId) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/updatebookingcancel/${salon._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the authorization header if needed
        },
        body: JSON.stringify({
          bookingId: bookingId,
        }),
      });
  
      if (!response.ok) {
       // console.log(response); // Log the entire response for debugging
        throw new Error('Failed to confirm booking');
      }
     // const updatedBooking = await response.json();
     // console.log('Updated Booking:', updatedBooking);
      setConfirmationStatus({ confirmed: false, canceled: true });
      
      toast.success('Booking cancelled successfully');
      // Optionally, you can update the local state or perform any other actions
    } catch (error) {
      console.error('Error confirming booking:', error.message);
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

        // Calculate the number of bookings that are confirmed and canceled
        const confirmedBookings = userData.data.filter((booking) => booking.status === 'approved');
        const canceledBookings = userData.data.filter((booking) => booking.status === 'cancelled');
        const pendingBookings = userData.data.filter((booking) => booking.status === 'pending');

        setConfirmedCount(confirmedBookings.length);
        setCanceledCount(canceledBookings.length);
        setPendingBookings(pendingBookings.length);
        
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
    <ToastContainer />
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
            <h1 className='text-3xl font-bold mb-2'>{pendingBookings}</h1>
            <p className='text-sm font-medium'>Upcoming</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold mb-2'>{confirmedCount}</h1>
            <p className='text-sm font-medium'>Confirmed</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold mb-2'>{canceledCount}</h1>
            <p className='text-sm font-medium'>Cancelled</p>
          </div>
        </div>
        <div>
          {userProfile.map((booking) => (
            <div key={booking._id} className='bg-white p-4 rounded-md shadow-xl mt-4'>
              <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                 
                </div>
                <div className='mt-4 space-x-4'>
                  {confirmationStatus.canceled && (
                    <p className='text-red-500'>Booking Cancelled</p>
                  )}
                  {confirmationStatus.confirmed && (
                    <p className='text-green-500'>Booking Approved</p>
                  )}
                  <button
                    onClick={() => {
                      console.log('Cancel button clicked'); // Debugging
                      handleConfirmBookingCancel(booking._id);
                    }}
                    className='bg-btnColor text-white px-4 py-2 rounded-md text-sm font-medium'
                    disabled={confirmationStatus.canceled}
                  >
                    delete
                  </button>
                  <button
                    onClick={() => {
                      console.log('Confirm button clicked'); // Debugging
                      handleConfirmBooking(booking._id);
                    }}
                    className='bg-btnColor text-white px-4 py-2 rounded-md text-sm font-medium'
                    disabled={confirmationStatus.confirmed}
                  >
                    Confirm
                  </button>
                </div>
              </div>
              <h3 className='text-lg font-bold'>Booking ID: {booking._id}</h3>
              <ul>
                {booking.services &&
                  Array.isArray(booking.services) &&
                  booking.services.map((service) => (
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



