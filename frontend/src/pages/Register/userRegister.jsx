import React from 'react'
import { Link } from 'react-router-dom'
import uploadAvatar from '../../assets/images/Ellipse 1.png';
import camera from '../../assets/images/Group 22.png';

const userRegister = () => {
  return (
   // user register page 
   <>
        <div className='container rounded-lg mt-16 w-[879px] h-[600px] flex-shrink-0 text-center py-8 bg-btnColor'>
      <div className='flex w-363 h-40.135 flex-col justify-center flex-shrink-0'>
        <h2 className='text-white text-center font-roboto text-35 font-bold'>
        Create an Account
        </h2>
      </div>

      {/* Separate Singup Form */}
      <div className='p-6 mt-4 w-[600px] mx-auto'>
        <p className='mb-2 text-white'>
          To keep connected with us, please register with your personal info
        </p>
        <div className='flex flex-col items-center mb-6'>
          <img src={uploadAvatar} alt="" />
          <img src={camera} alt="" />
        </div>
        <form className='flex flex-col items-center'>
        <input
            type='text'
            className='border border-gray-300 p-2 mb-4 w-96 rounded-lg'
            placeholder='Full Name'
          />
          {/* <label className='block mb-2'>Email:</label> */}
          <input
            type='email'
            className='border border-gray-300 p-2 mb-4 w-96 rounded-lg'
            placeholder='Enter your email'
          />
          {/* <label className='block mb-2'>Password:</label> */}
          <input
            type='password'
            className='border border-gray-300 p-2 mb-4 w-96 rounded-lg'
            placeholder='Enter your password'
          />
           {/* Gender */}
          <select
            className='border border-gray-300 p-2 mb-4 w-96 rounded-lg'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <button type='submit' className='bg-white font-[600] text-btnColor py-2 px-4 rounded-[50px] w-40 '>
          Register
          </button>
          {/* Login link */}
          <div className='mt-4'>
            <p className='text-white'>
              Already have an account?{' '}
              <Link to='/signup' className='text-black-400 underline'>
                Login
              </Link>
            </p>
          </div>  
        </form>
      </div>
    </div>
   
   </>
  )
}

export default userRegister