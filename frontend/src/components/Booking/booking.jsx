import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import uploadImageToCloudinary from '../../utils/uploadCloudinary.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  const { token, user } = useContext(authContext);
  const { id, serviceId } = useParams();
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [paymentProof, setPaymentProof] = useState('');
  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState('');
  const [salonDetails, setSalonDetails] = useState({});
  const [serviceDetails, setServiceDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileInputChange = async (event) => {
    try {
      const file = event.target.files[0];
      const cloudinaryData = await uploadImageToCloudinary(file);
      setPreviewUrl(cloudinaryData.url);
      setPaymentProof(cloudinaryData.url);
    } catch (error) {
      toast.error('Failed to upload payment proof');
    }
  };

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

        const foundService = salonData.data.services.find(
          (service) => service._id === serviceId
        );

        if (foundService) {
          setServiceDetails(foundService);
        } else {
          throw new Error('Service not found');
        }

        setLoading(false);
      } catch (error) {
       
        setError('Something went wrong while fetching salon details.');
        setLoading(false);
      }
    };

    fetchSalonDetails();
  }, [id, serviceId, token]);

  const handleBooking = async () => {
    try {
      if (!serviceDetails) {
        throw new Error('Service not found');
      }
      if (!paymentProof) {
        alert('Please upload payment proof');
        return;
      }
      const response = await fetch(`${BASE_URL}/auth/book`, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          salonId: id,
          salonName: salonDetails.salonName,
          services: [serviceDetails],
          appointmentDate: date,
          timeSlot: time,
          userContact: userContact,
          userName: userName,
          userId: user._id,
          paymentProofImg: paymentProof,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }
      toast.success('Appointment booked successfully');
     
    } catch (error) {
      toast.error('Failed to book appointment');
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-xl font-extrabold mb-4">Book your appointment</h1>
          <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {salonDetails && (
              <div>
                {serviceDetails && salonDetails && (
                  <div className="card p-4 border border-gray-300 rounded">
                    <p className="font-bold">Salon Name: {salonDetails.salonName}</p>
                    <p className="font-bold text-lg mb-2">Service Details</p>
                    <p>Name: {serviceDetails.name}</p>
                    <p>Description: {serviceDetails.serviceDescription}</p>
                    <p>Price: {serviceDetails.price}</p>
                    <p>Id: {serviceDetails._id}</p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm font-semibold">Select Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="time" className="text-sm font-semibold">Select Time:</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="paymentProof" className="text-sm font-semibold">Upload Payment Proof Screenshot:</label>
              <input
                type="file"
                id="paymentProof"
                onChange={handleFileInputChange}
                required
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="userName" className="text-sm font-semibold">Enter your name:</label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="userContact" className="text-sm font-semibold">Enter your contact number:</label>
              <input
                type="text"
                id="userContact"
                value={userContact}
                onChange={(e) => setUserContact(e.target.value)}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mt-8">
            <button onClick={handleBooking} className="bg-btnColor text-white px-4 py-2 mt-2">Book Now</button>
          </div>
        </div>

        <div className="card p-4 border border-gray-300 rounded">
          <div>
            <h1 className="font-semibold">Pay the 20% for your booking confirmation</h1>
          </div>
          <div className="mt-2">
            <span className="text-sm">Payment Contacts</span>
            <h1 className="text-lg"><strong>Easypaisa</strong>{salonDetails.easyPaisa}</h1>
            <h1 className="text-lg"><strong>JazzCash</strong>{salonDetails.jazzCash}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
