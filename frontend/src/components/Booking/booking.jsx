import React from 'react'
import Qrcode from '../../assets/images/qrcode.jpg'
import { useLocation } from 'react-router-dom';

const booking = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const serviceName = queryParams.get('serviceName') || 'Default Service';
  const serviceDescription = queryParams.get('serviceDescription') || 'No description available';
  const servicePrice = queryParams.get('servicePrice') || 'N/A';
  return (
    <section>
     <div className='flex justify-around'>
      <div>
        <h1 className='text-xl font-extrabold'>Book you appoitment</h1>
        <div className='flex gap-10 mt-4'>
          {/* take appoitment date */}
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
            <h2>Service Details:</h2>
            <p>Name: {serviceName}</p>
            <p>Description: {serviceDescription}</p>
            <p>Price: {servicePrice}</p>
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