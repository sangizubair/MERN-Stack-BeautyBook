import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// this is for salon only
const MyBookings = () => {
  const { token, salon } = useContext(authContext);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { salonId } = useParams();
  const { dispatch } = useContext(authContext);

  const [confirmedCount, setConfirmedCount] = useState(0);
  const [canceledCount, setCanceledCount] = useState(0);
  const [pendingBookings, setPendingBookings] = useState(0);
  const [showAll, setShowAll] = useState(false);

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

      setUserProfile((prevUserProfile) => {
        return prevUserProfile.map((booking) => {
          if (booking._id === bookingId) {
            return { ...booking, status: 'approved' };
          }
          return booking;
        });
      });

      toast.success('Booking confirmed successfully');
      // Optionally, you can update the local state or perform any other actions
    } catch (error) {
      toast.error('Failed to confirm booking');
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
      setUserProfile((prevUserProfile) => {
        return prevUserProfile.map((booking) => {
          if (booking._id === bookingId) {
            return { ...booking, status: 'cancelled' };
          }
          return booking;
        });
      });
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
        setError('Something went wrong while fetching user profile.');
        setLoading(false);
      }
    };

    if (token && salon) {
      fetchUserProfile();
    }
  }, [token, salon]); //

  // Toggle function to show all bookings
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Render only the first 5 bookings if showAll is false
  const renderBookings = () => {
    if (!userProfile) return null;
    if (!showAll) {
      return userProfile.slice(0, 5).map(renderBookingCard);
    }
    return userProfile.map(renderBookingCard);
  };

  // Render each booking card
  const renderBookingCard = (booking) => (
    <div key={booking._id} className='bg-white p-4 rounded-md shadow-xl mt-4 flex flex-wrap'>
      {/* Left side content */}
      <div className='w-full md:w-3/4 pr-4'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-bold'>Booking ID: {booking._id}</h3>
        </div>
        <ul>
          {booking.services &&
            Array.isArray(booking.services) &&
            booking.services.map((service) => (
              <li key={service._id}>
                <p className='text-sm font-medium'>Service Name: {service.name}</p>
                <p>Service Price: {service.price}</p>
                {/* ... (display other service details as needed) */}
              </li>
            ))}
          <li>
            <p>Booking date: {booking.appointmentDate}</p>
            <p>Booking Time: {booking.timeSlot}</p>
            <p>Status: {booking.status}</p>
            <p>UserName: {booking.userName}</p>
            <p>User Contact: {booking.userContact}</p>
          </li>
        </ul>
      </div>
      {/* Right side content */}
      <div className='w-full md:w-1/4 flex items-center justify-center text-center'>
        {booking.paymentProofImg && (
          <a className='text-blue-500 ' href={booking.paymentProofImg} target='_blank' rel='noopener noreferrer'>
            <figure>
              <img src={booking.paymentProofImg} alt='' className='w-20 h-20' />
            </figure>
            paymentProofImg
          </a>
        )}
      </div>
      <div className='w-full flex justify-end space-x-2'>
        <button
          onClick={() => {
          
            handleConfirmBookingCancel(booking._id);
          }}
          className='bg-btnColor text-white px-4 py-2 rounded-md text-sm font-medium'
        >
          Delete
        </button>
        <button
          onClick={() => {
            handleConfirmBooking(booking._id);
          }}
          className='bg-btnColor text-white px-4 py-2 rounded-md text-sm font-medium'
        >
          Confirm
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <ToastContainer />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userProfile && (
        <div>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold mb-2'>My Bookings</h1>
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
          <div>{renderBookings()}</div>
          <div className='mt-4'>
            <button className='bg-btnColor text-white px-4 py-2 rounded-md text-sm font-medium' onClick={toggleShowAll}>
              {showAll ? 'See Less' : 'See All'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
