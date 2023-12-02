import React from 'react';
import { Link } from 'react-router-dom';
import userAvatar from '../../assets/images/user-avatar.png';
import salonAvatar from '../../assets/images/salon-avatar.png';

const Register = () => {
  return (
    <div className='container rounded-lg w-[879.464px] h-[600px] flex-shrink-0 text-center py-8 bg-red-400'>
      <div className='flex w-363 h-40.135 flex-col justify-center flex-shrink-0'>
        <h2 className='text-white text-center font-roboto text-35 font-bold'>
          Choose Account Type
        </h2>
      </div>

      <div className='flex items-center justify-center gap-8 mt-8'>
        {/* Salon Owner Box */}
        <div className='flex-shrink-0 bg-white p-6 shadow-md'>
          <img
            src={userAvatar} // Replace with the actual path to your avatar image
            alt='Salon Owner'
            className='w-20 h-20 mb-4 mx-auto'
          />
          <Link to='/register/salon' className='text-pink-400'>
          Register as User
           
          </Link>
        </div>

        {/* User Box */}
        <div className='flex-shrink-0 bg-white p-6 shadow-md'>
          <img
            src={salonAvatar} // Replace with the actual path to your avatar image
            alt='User'
            className='w-20 h-20 mb-4 mx-auto'
          />
          <Link to='/register/user' className='text-pink-400'>
          Register as Salon 
          </Link>
        </div>
      </div>

      {/* Separate Login form Form */}
      <div className='bg-white p-6 mt-5 w-[600px] mx-auto shadow-md'>
        <p className='text-black mb-4'>
          To keep connected with us, please login with your personal info
        </p>
        <form>
          <label className='block mb-2'>Email:</label>  
          <input
            type='email'
            className='border border-gray-300 p-2 mb-2 w-full'
            placeholder='Enter your email'
          />
          <label className='block mb-2'>Password:</label>
          <input
            type='password'
            className='border border-gray-300 p-2 mb-2 w-full'
            placeholder='Enter your password'
          />
          <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
