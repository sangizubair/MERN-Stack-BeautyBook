import React from 'react'

import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import uploadImageToCloudinary from '../../utils/uploadCloudinary.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const booking = () => {
   
  // also get salon id
  const { token,  user } = useContext(authContext);
  //const { id } = useParams();
  //const { id  } = useParams();
  const { id , serviceId } = useParams();
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [paymentProof, setPaymentProof] = useState('');
  const [salonDetails, setSalonDetails] = useState({});
  const [serviceDetails, setServiceDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

   // Function to handle file input change
   const handleFileInputChange = async (event) => {
    try {
      const file = event.target.files[0];
  
      // Use your existing function to upload the file to Cloudinary
      const cloudinaryData = await uploadImageToCloudinary(file);
  
      // Set the preview URL or handle the Cloudinary response as needed
      setPreviewUrl(cloudinaryData.url);
      setPaymentProof(cloudinaryData.url);
    } catch (error) {
      console.error('Error uploading file:', error.message);
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
         
         // Find the specific service based on serviceId
         const foundService = salonData.data.services.find(
          (service) => service._id === serviceId
        );

        if (foundService) {
          setServiceDetails(foundService);
        } else {
          throw new Error('Service not found');
        }
        // consol services details
        
         
        console.log(salonData.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching salon details:', error.message);
        setError('Something went wrong while fetching salon details.');
        setLoading(false);
      }
    };

    fetchSalonDetails();
  }, [id , serviceId , token ]);

  
   
  // Function to handle booking logic
  const handleBooking = async () => {
    try {
         if (!serviceDetails) {
         throw new Error('Service not found');
         }
         if (!paymentProof) {
             alert('Please upload payment proof');
             return      
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
          userId: user._id, // Include the user ID in the booking request
          paymentProofImg: paymentProof, 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }
      toast.success('Appointment booked successfully');
      
      // Handle success - e.g., show a success message
      console.log('Appointment booked successfully');
      console.log(response.json()); 
    } catch (error) {
      // Handle errors - e.g., show an error message
      console.error('Error booking appointment:', error.message);
    }
  };

  return (
    <section>
      <ToastContainer/>
    <div className='flex justify-around'>
      <div>
        <h1 className='text-xl font-extrabold'>Book your appointment</h1>
        <div className='flex gap-10 mt-4'>
          <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {salonDetails  && (
              <div>   
                {serviceDetails && salonDetails  && (
                <div className='service-details card p-4 border border-gray-300 rounded'>
                <p className='font-bold'>SlaonName:{salonDetails.salonName}</p>
                <p className='font-bold text-lg mb-2'>Service Details</p>
                <p>Name: {serviceDetails.name}</p>
                <p>Description: {serviceDetails.serviceDescription}</p>
                <p>Price: {serviceDetails.price}</p>
                <p>Id: {serviceDetails._id}</p>
              </div>
              )}
              </div>
            )}
          </div>
        </div>


        <div className='mt-8 space-y-4'>
                <div className='flex flex-col'>
                  <label htmlFor='date' className='text-sm font-semibold'>
                    Select Date:
                  </label>
                  <input
                    type='date'
                    id='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className='border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500'
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='time' className='text-sm font-semibold'>
                    Select Time:
                  </label>
                  <input
                    type='time'
                    id='time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className='border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500'
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='paymentProof' className='text-sm font-semibold'>
                    Upload Payment Proof Screenshot:
                  </label>
                  <input
                    type='file'
                    id='paymentProof'
                    onChange={handleFileInputChange}
                    required
                    className='border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500'
                  />
                </div>
              </div>
        
        <div className='mt-8'>
          <button  onClick={handleBooking} className='bg-btnColor text-white px-4 py-2  mt-2'>Book Now</button>
        </div>

      </div>

       <div className='card p-4 border border-gray-300 rounded'>
              <div>
                <h1 className='font-semibold'>Pay the 200 for your booking confirmation</h1>
              </div>
              <div className='mt-2'>
                <span className='text-sm'>Easypaisa number</span> <h1 className='text-lg'>03144684607</h1>
              </div>
            </div>

    </div>
  </section>



  )
}

export default booking;