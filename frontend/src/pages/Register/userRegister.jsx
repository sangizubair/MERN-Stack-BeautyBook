import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../../utils/uploadCloudinary.js';
import { BASE_URL } from '../../../config.js';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import { FaCamera } from 'react-icons/fa';
import Vector from '../../assets/images/Vector.png';
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { HiOutlineKey } from 'react-icons/hi';
import Logo from '../../assets/images/logo-removebg.png';
// add user icon
import { FaUser } from 'react-icons/fa';

const UserRegister = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: 'user'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordStrong, setIsPasswordStrong] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();

  const hanldeInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'password') {
      // Password validation regex pattern
      const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

      if (!passwordRegex.test(value)) {
        // Password does not meet the validation criteria
        setPasswordError('Password must contain at least one number, one letter, one symbol, and be at least 8 characters long.');
        setIsPasswordStrong(false);
      } else {
        // Clear password error if password is valid
        setPasswordError('');
        setIsPasswordStrong(true);
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewUrl(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    // yaha pr width me  change kiya ha
    <div className='container mx-auto mb-10 rounded-xl mt-10 sm:w-[80%] lg:w-[60%] xl:w-[600px]  text-center py-16 sm:py-8 md:py-12 bg-signUpBgColor'
      style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)' }}
    >
      <div className="flex flex-col justify-center items-center">
        {/* Right side for registration form */}
        {/* <div className=' bg-btnColor -mt-16 lg:-mt-[55px]  sm:w-[80%] lg:w-[50%] xl:w-[600px] overflow-hidden rounded-t-lg'>
          <img src={Vector} alt="vector" className="sm:w-[80%] lg:w-[60%] xl:w-[400px] rounded-t-lg" />
        </div> */}
         <div className='w-full md:w-1/2 h-full  flex flex-col justify-center'>
        <img src={Logo} alt="logo" className="" />
      </div>

        <div className="sm:w-[50%] items-center ">
          <div>
            <h2 className=" text-3xl  md:text-3xl font-extrabold  mb-4">REGISTER</h2>
          </div>
          <div>
            <h2 className='text-2xl md:text-xl'>Create your new account</h2>
          </div>

          <form onSubmit={handleSubmit} className='p-6 w-full sm:w-[90%]'>
            <div className='flex flex-col gap-3 justify-center items-center mb-5'>
              {selectedFile && (
                <figure className='w-28 h-28 rounded-full border-2 border-solid border-white flex items-center justify-center'>
                  <img src={previewUrl} className='w-full h-full rounded-full' alt='' />
                </figure>
              )}
              <div className='relative w-[150px] md:w-[200px] h-[40px] mx-auto'>
                <input
                  type='file'
                  onChange={handleFileInputChange}
                  name='photo'
                  id='customFile'
                  accept='.png, .jpg'
                  className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                />
                <label
                  htmlFor='customFile'
                  className='absolute top-0 left-0 w-full h-full flex items-center px-2 text-sm leading-4 overflow-hidden  bg-white text-headingColor font-semibold rounded-lg truncate cursor-pointer z-0'
                >
                  <>
                    <FaCamera className='mr-2' style={{ width: '30px', height: '30px' }} />
                    Upload Photo
                  </>
                </label>
              </div>
            </div>


             <div className='relative'>
            <input
              type='text'
              value={formData.name}
              name='name'
              onChange={hanldeInputChange}
              className='border block border-gray-300 p-2 mb-4 w-full pl-10 sm:w-[300px] lg:w-[300px] rounded-lg'
              placeholder='Full Name'
              required
            /> 
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" />
              </div>

             </div>

            <div className="relative">
              <input
                type='email'
                value={formData.email}
                onChange={hanldeInputChange}
                name='email'
                className='border block  border-gray-300 p-2 pl-10 mb-4 w-full sm:w-[300px] lg:w-[300px] rounded-lg'
                placeholder='your email'
                required
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineMail className="h-5 w-5 text-gray-400" />
              </div>
            </div>


            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                name='password'
                onChange={hanldeInputChange}
                className='border block border-gray-300 p-2 pl-10 mb-4 w-full sm:w-[300px] lg:w-[300px] rounded-lg'
                placeholder='your password'
                required
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <HiOutlineKey className="h-5 w-5 text-gray-400" />
              </div>
              <div className="absolute inset-y-0 right-0 pl-6 flex items-center">
                {showPassword ? (
                  <HiOutlineEyeOff
                    className="h-5 w-5 text-gray-400  cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <HiOutlineEye
                    className="h-5 w-5 text-gray-400  cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
            
            {passwordError && (
              <div className="text-red-500 text-sm mt-1 ml-2">
                {passwordError}
              </div>
            )}
            {isPasswordStrong && !passwordError && (
              <div className="text-green-500 text-sm mt-1 ml-2">
                Password is strong
              </div>
            )}
            <div className='flex gap-2 mb-5 items-center justify-between'>
              <label className=' font-semibold text-[15px] leading-7'>
                Gender:
                <select
                  name='gender'
                  value={formData.gender}
                  onChange={hanldeInputChange}
                  required
                  className='text-textColor border border-gray-300 leading- rounded-lg px-4 py-3 focus:outline-none w-full sm:w-[300px] lg:w-[300px]'

                >
                  <option value=''>Select</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='other'>Other</option>
                </select>
              </label>
            </div>

            <div className='mt-7'>
              <button
                disabled={loading && true}
                type='submit'
                className='bg-btnColor  font-[600] text-white py-2 px-3 items-center w-full  sm:w-[300px] lg:w-[300px] rounded-[50px]'
              >
                {loading ? <HashLoader size={35} color='#fff' /> : 'Register'}
              </button>
            </div>

            <span className='mt-5 whitespace-nowrap '>
              Already have an account?{' '}
              <span className='underline'>
                <Link to='/login'>Login</Link>
              </span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;


