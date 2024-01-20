import React from 'react'
import Qrcode from '../../assets/images/qrcode.jpg'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const booking = () => {
 

  
  // also get salon id
  const { token, salon } = useContext(authContext);
  const { id  } = useParams();
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
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
    <section>
     <div className='flex justify-around'>
      <div>
        <h1 className='text-xl font-extrabold'>Book your appoitment</h1>
        <div className='flex gap-10 mt-4'>
          {/* take appoitment date */}
           <div>
           {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {salonDetails && (
              <div>
                {salonDetails.salonName}
                  {/* // fetch specific service */}
              </div>
          )}
           </div>
          <div>
            <label htmlFor="">Date</label>
             <input type="date" name="" id="" />
           </div>
            {/* take appoitment time */}
            <div>
            <label htmlFor="">Time</label>
             <input type="time" name="" id="" />
             </div>
        </div>
        <div>
              
          </div>
          
          {/* keep one button for Book Now  */}
          <div className='mt-8'>
            <button className='bg-btnColor text-white px-2 py-1 mt-2'>Book Now</button>
            </div>
         
      </div>

      <div className=''>
        <div >
        <h1>Scane the code and pay </h1>
        </div>
        <img src={Qrcode} alt="" className='h-80'/>
      </div>
    </div>
    </section>
   

     
  )
}

export default booking ;