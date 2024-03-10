// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import uploadImageToCloudinary from '../../utils/uploadCloudinary.js';
// import { BASE_URL } from '../../../config.js';
// import { toast } from 'react-toastify';
// import HashLoader from 'react-spinners/HashLoader';
// import { FaCamera } from 'react-icons/fa';

// const UserRegister = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     photo: selectedFile,
//     gender: '',
//     role: 'user'
//   });

//   const navigate = useNavigate();   

//   const hanldeInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileInputChange = async (event) => {
//     const file = event.target.files[0];
//     const data = await uploadImageToCloudinary(file);
//     setPreviewUrl(data.url);
//     setSelectedFile(data.url);
//     setFormData({ ...formData, photo: data.url });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch(`${BASE_URL}/auth/register`, {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       const { message } = await res.json();
//       if (!res.ok) {
//         throw new Error(message);
//       }
//       setLoading(false);
//       toast.success(message);
//       navigate('/login');
//     } catch (error) {
//       toast.error(error.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='container mx-auto mb-10 rounded-lg mt-10 sm:w-[90%] lg:w-[70%] xl:w-[50%] bg-btnColor text-center py-16 sm:py-8 md:py-12'>
//       <div className='flex w-300 h-40.135 flex-col justify-center flex-shrink-0'>
//         <h2 className='text-white text-center text-lg font-roboto text-35 font-extrabold'>
//           Create an Account
//         </h2>
//       </div>

//       <div className='p-6 mt-4 w-full sm:w-[90%] mx-auto'>
//         <p className='mb-6 text-white'>
//           To keep connected with us, please register with your personal info
//         </p>

//         <form onSubmit={handleSubmit} className='flex flex-col items-center'>
//           <div className='flex flex-col sm:flex-row gap-3 items-center mb-5'>
//             {selectedFile && (
//               <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-white flex items-center justify-center'>
//                 <img src={previewUrl} className='w-full rounded-full' alt='' />
//               </figure>
//             )}
//             <div className='relative w-[150px]  md:w-[200px] sm:w-[150px] h-[40px]'>
//               <input
//                 type='file'
//                 onChange={handleFileInputChange}
//                 name='photo'
//                 id='customFile'
//                 accept='.png, .jpg'
//                 className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
//               />
//               <label
//                 htmlFor='customFile'
//                 className='absolute top-0 left-0 w-full h-full flex items-center px-2 text-sm leading-4 overflow-hidden bg-white text-headingColor font-semibold rounded-lg truncate cursor-pointer z-0'
//               >
//                 <>
//                   <FaCamera className='mr-2' style={{ width: '30px', height: '30px' }} />
//                   Upload Photo
//                 </>
//               </label>
//             </div>
//           </div>
//           <input
//             type='text'
//             value={formData.name}
//             name='name'
//             onChange={hanldeInputChange}
//             className='border border-gray-300 p-2 mb-4 w-full sm:w-[300px] lg:w-[400px] rounded-lg'
//             placeholder='Full Name'
//           />
//           <input
//             type='email'
//             value={formData.email}
//             onChange={hanldeInputChange}
//             name='email'
//             className='border border-gray-300 p-2 mb-4 w-full sm:w-[300px] lg:w-[400px] rounded-lg'
//             placeholder='Enter your email'
//           />
//           <input
//             type='password'
//             value={formData.password}
//             name='password'
//             onChange={hanldeInputChange}
//             className='border border-gray-300 p-2 mb-4 w-full sm:w-[300px] lg:w-[400px] rounded-lg'
//             placeholder='Enter your password'
//           />
//           <div className='flex gap-2 mb-5 items-center justify-between'>
//             <label className='text-white font-semibold text-[15px] leading-7'>
//               Gender:
//               <select
//                 name='gender'
//                 value={formData.gender}
//                 onChange={hanldeInputChange}
//                 className='text-textColor leading-7 px-4 py-3 focus:outline-none'
//               >
//                 <option value=''>Select</option>
//                 <option value='male'>Male</option>
//                 <option value='female'>Female</option>
//                 <option value='other'>Other</option>
//               </select>
//             </label>
//           </div>

//           <div className='mt-7'>
//             <button
//               disabled={loading && true}
//               type='submit'
//               className='bg-white font-[600] text-btnColor py-2 px-4 sm:w-[200px] rounded-[50px]'
//             >
//               {loading ? <HashLoader size={35} color='#fff' /> : 'Register'}
//             </button>
//           </div>

//           <div className='mt-2'>
//             <p className='text-white'>
//               Already have an account?{' '}
//               <Link to='/login' className='text-black-400 underline'>
//                 Login
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserRegister;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../../utils/uploadCloudinary.js';
import { BASE_URL } from '../../../config.js';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import { FaCamera } from 'react-icons/fa';

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

  const navigate = useNavigate();   

  const hanldeInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
    <div className='container mx-auto mb-10 rounded-lg mt-10 sm:w-[90%] lg:w-[80%] xl:w-[50%] bg-btnColor text-center py-16 sm:py-8 md:py-12'>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        {/* Left side for login option */}
        <div className="sm:w-[50%] sm:h-96 mr-4 mb-4 sm:mb-0 bg-white p-4 flex flex-col justify-center items-center ">
          <h2 className='text-btnColor text-3xl font-extrabold '>
            Welcome Back!
          </h2>
          <p className='text-btnColor mt-2'>To keep connected with us please login with your personal info</p>
          <button className="bg-btnColor mt-4 w-full sm:w-[300px] lg:w-full text-white px-4 py-2 rounded-full font-bold text-sm md:text-base">
            <Link to='/login' className='text-black-400 '>
              Login
            </Link>
          </button>
        </div>
        {/* Right side for registration form */}
        <div className="sm:w-[50%] ml-4 mt-2">
          <h2 className='text-white text-center  font-roboto text-2xl font-extrabold mb-4'>
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className='p-8 w-full sm:w-[90%]'>
            <div className='flex flex-col gap-3 items-center mb-5'>
              {selectedFile && (
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-white flex items-center justify-center'>
                  <img src={previewUrl} className='w-full rounded-full' alt='' />
                </figure>
              )}
              <div className='relative w-[150px] md:w-[200px] h-[40px]'>
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
                  className='absolute top-0 left-0 w-full h-full flex items-center px-2 text-sm leading-4 overflow-hidden bg-white text-headingColor font-semibold rounded-lg truncate cursor-pointer z-0'
                >
                  <>
                    <FaCamera className='mr-2' style={{ width: '30px', height: '30px' }} />
                    Upload Photo
                  </>
                </label>
              </div>
            </div>
            <input
              type='text'
              value={formData.name}
              name='name'
              onChange={hanldeInputChange}
              className='border border-gray-300 p-2 mb-4 w-full sm:w-[300px] lg:w-[250px] rounded-lg'
              placeholder='Full Name'
              required
            />
            <input
              type='email'
              value={formData.email}
              onChange={hanldeInputChange}
              name='email'
              className='border border-gray-300 p-2 mb-4 w-full sm:w-[300px] lg:w-[250px] rounded-lg'
              placeholder='Enter your email'
              required
            />
            <input
              type='password'
              value={formData.password}
              name='password'
              onChange={hanldeInputChange}
              className='border border-gray-300 p-2 mb-4 w-full sm:w-[300px] lg:w-[250px] rounded-lg'
              placeholder='Enter your password'
              required
            />
            <div className='flex gap-2 mb-5 items-center justify-between'>
              <label className='text-white font-semibold text-[15px] leading-7'>
                Gender:
                <select
                  name='gender'
                  value={formData.gender}
                  onChange={hanldeInputChange}  
                  required
                  className='text-textColor leading- rounded-lg px-4 py-3 focus:outline-none w-full sm:w-[300px] lg:w-[250px]'

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
                className='bg-white font-[600] text-btnColor py-2 px-3 items-center w-full  sm:w-[300px] lg:w-[250px] rounded-[50px]'
              >
                {loading ? <HashLoader size={35} color='#fff' /> : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;


