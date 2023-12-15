import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import userAvatar from '../../assets/images/user-avatar.png';
import salonAvatar from '../../assets/images/salon-avatar.png';
import { FaCheck } from 'react-icons/fa';

const Register = () => {
  const [selectedType, setSelectedType] = useState(null);
  // const history =useHistory();

  const handleBoxClick = (type) => {
    setSelectedType(type);
  };

  // const handleSignUpClick = () => {
  //   if (selectedType === 'user') {
  //     history.push('/register/user');
  //   } else if (selectedType === 'salon') {
  //     history.push('/register/salon');
  //   }
  // };

  return (
    <div className='container rounded-lg w-[879.464px] h-[600px] flex-shrink-0 text-center py-8 bg-btnColor'>
      <div className='flex w-363 h-40.135 flex-col justify-center flex-shrink-0'>
        <h2 className='text-white text-center font-roboto text-35 font-bold'>
          Choose Account Type
        </h2>
      </div>

      <div className='flex items-center justify-center gap-8 mt-8'>
        {/* Salon Owner Box */}
        <div
          className={`flex-shrink-0 border border-black p-6 shadow-md cursor-pointer relative ${
            selectedType === 'user' ? '' : ''
          }`}
          onClick={() => handleBoxClick('user')}
        >
          {selectedType === 'user' && (
            <div className='absolute top-2 right-2 text-white'>
              <FaCheck />
            </div>
          )}
          <img
            src={userAvatar} // Replace with the actual path to your avatar image
            alt='User'
            className='w-20 h-20 mb-4 mx-auto'
          />
          <Link to='/register/user' className='text-white'>
            Register as User
          </Link>
        </div>

        {/* User Box */}
        <div
          className={`flex-shrink-0 border border-black p-6 shadow-md cursor-pointer relative ${
            selectedType === 'salon' ? '' : ''
          }`}
          onClick={() => handleBoxClick('salon')}
        >
          {selectedType === 'salon' && (
            <div className='absolute top-2 right-2 text-white '>
              <FaCheck />
            </div>
          )}
          <img
            src={salonAvatar} // Replace with the actual path to your avatar image
            alt='Salon Owner'
            className='w-20 h-20 mb-4 mx-auto'
          />
          <Link to='/register/salon' className='text-white'>
            Register as Salon
          </Link>
        </div>
      </div>

      {/* Separate Login form Form */}
      <div className='p-6 mt-5 w-[600px] mx-auto'>
        <p className='text-black mb-10'>
          To keep connected with us, please login with your personal info
        </p>
        <form className='flex flex-col items-center'>
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
          <button type='submit' className='bg-white font-[600] text-pink-400 py-2 px-4 rounded-[50px] w-40 '>
            Login
          </button>
          {/* Signup link */}
          {/* <div className='mt-4'>
            <p className='text-white'>
              No account?{' '}
              <Link to='/register' className='text-black-400 underline'>
                Signup here
              </Link>
            </p>
          </div>   */}
        </form>
      </div>
    </div>
  );
};

export default Register;
