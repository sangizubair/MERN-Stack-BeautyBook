import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
// import uploadAvatar from '../../assets/images/Ellipse 1.png';
// import camera from '../../assets/images/Group 22.png';
import { useState } from 'react';
import uploadImageToCloudinary from '../../utils/uploadCloudinary.js';
import { BASE_URL } from '../../../config.js';
import { toast }  from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader'


const userRegister = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading,setLoading]=useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '', 
    role:'user'
  });

  const navigate= useNavigate();
  const hanldeInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // function for image upload in cloudinary
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    // upliad image into cloudinary
    const data= await uploadImageToCloudinary(file) 
    console.log(data);
    setPreviewUrl(data.url);
    setSelectedFile(data.url);
    setFormData({...formData,photo:data.url});
  };

  const handleSubmit = async (event) => {
    // console.log("Form Data:", formData);
    event.preventDefault();
    setLoading(true);

    try {
      const res= await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      })
      const {message}= await res.json()
      if (!res.ok) {
         throw new Error(message) 
      }
      setLoading(false);
      // taost message
      toast.success(message)
      navigate('/login')

    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    
    }
     // Log the form data

     // agar submit pr click kre to post method chle or user register hojye 

   
  };

  return (
    <>
      <div className='container mx-auto rounded-lg mt-16 sm:w-[800px] lg:w-[1000px] xl:w-[1200px] bg-btnColor text-center py-8'>
        <div className='flex w-363 h-40.135 flex-col justify-center flex-shrink-0'>
          <h2 className='text-white text-center font-roboto text-35 font-bold'>
            Create an Account
          </h2>
        </div>

        <div className='p-6 mt-4 w-full sm:w-[600px] mx-auto'>
          <p className='mb-6 text-white'>
            To keep connected with us, please register with your personal info
          </p>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center'
          >
            <div className='flex flex-col sm:flex-row gap-3 items-center mb-5'>
          { selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-white flex items-center justify-center'>
            <img
              src={previewUrl}
              className='w-full rounded-full'
              alt=''
            />
          </figure>}
              <div className='relative w-full sm:w-[130px] h-[40px]'>
                <input
                  type='file'
                  onChange={handleFileInputChange} // its imagehandle 
                  name='photo'
                  id='customFile'
                  accept='.png, .jpg'
                  className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                />
                <label
                  htmlFor='customFile'
                  className='absolute top-0 left-0 w-full h-full flex items-center px-2 text-sm leading-4 overflow-hidden bg-white text-headingColor font-semibold rounded-lg truncate cursor-pointer z-0'

                >
                  Upload Photo
                </label>
              </div>

            </div>
            <input
              type='text'
              value={formData.name}
              name='name'
              onChange={hanldeInputChange}
              className='border border-gray-300 p-2 mb-4 w-full sm:w-[300px] lg:w-[400px] rounded-lg'
              placeholder='Full Name'
            />
            <input
              type='email'
              value={formData.email}
              onChange={hanldeInputChange}
              name='email'
              className='border border-gray-300 p-2 mb-4 w-full sm:w-[300px] lg:w-[400px] rounded-lg'
              placeholder='Enter your email'
            />
            <input
              type='password'
              value={formData.password}
              name='password'
              onChange={hanldeInputChange}
              className='border border-gray-300 p-2 mb-4 w-full sm:w-[300px] lg:w-[400px] rounded-lg'
              placeholder='Enter your password'
            />
            <div className='flex gap-2 mb-5 items-center justify-between'>
              {/* <label className='text-white font-semibold text-[15px] leading-7'>
                Are you a:
                <select
                  name='role'
                  value={formData.role}
                  onChange={hanldeInputChange}
                  className='text-textColor leading-7 px-4 py-3 focus:outline-none'
                >
                  <option value='user'>User</option>
                  <option value='salonOwner'>SalonOwner</option>
                </select>
              </label> */}
              <label className='text-white font-semibold text-[15px] leading-7'>
                Gender:
                <select
                  name='gender'
                  value={formData.gender}
                  onChange={hanldeInputChange}
                  className='text-textColor leading-7 px-4 py-3 focus:outline-none'
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
                className='bg-white font-[600] text-btnColor py-2 px-4 sm:w-[200px] rounded-[50px]'
              >
               {loading ? <HashLoader size={35} color='#fff'/> : 'Register'}
              </button>
            </div>

            <div className='mt-2'>
              <p className='text-white'>
                Already have an account?{' '}
                <Link to='/login' className='text-black-400 underline'>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default userRegister;
