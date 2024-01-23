import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../../config';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import MyBookings from './MyBookings'; // bookings component
import Profile from './Profile';  // profile component
import { Link } from 'react-router-dom';

 // user account component
const SalonAccount = () => {
  const { token, salon } = useContext(authContext);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate= useNavigate();
  const { dispatch }= useContext(authContext)


   const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/salon');
   }

   // tab state
  const [tab, setTab] = useState('bookings');

   // this is get user profile api call here 

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // salon ki id ki based pr profile fetch krwani hai
        const response = await fetch(`${BASE_URL}/salons/profile/${salon._id}`, {
          method:'get',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const userData = await response.json();
        setUserProfile(userData.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
        setError('Something went wrong while fetching user profile.');
        setLoading(false);
      }
    };

    if (token && salon) {
      fetchUserProfile();
    }
  }, [token, salon]); // 

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userProfile && (
          <div className='grid md:grid-cols-3 gap-7'>
            <div className='md:col-span-1 md:px-[20px]'>
              <div className='bg-white p-4 rounded-md shadow-xl'>
                <div className='flex flex-col items-center'>
                  <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid mb-4'>
                    <img src={userProfile.photo} alt='' className='w-full h-full' />
                  </figure>
                  <div className='text-center'>
                    <h3 className='text-xl font-semibold'>{userProfile.ownerName}</h3>
                    <p className='text-gray-500'>{userProfile.email}</p>
                  </div>
                  <div className='mt-4 flex flex-col items-center gap-2'>
                    <button
                      onClick={() => setTab('bookings')}
                      className={`${
                        tab === 'bookings' && 'bg-btnColor text-white font-normal border-none'
                      } btn-style`}
                    >
                      <span className='mr-2'>📅</span> My Bookings
                    </button>
                    <button
                      onClick={() => setTab('setting')}
                      className={`${
                        tab === 'setting' && 'bg-btnColor text-white font-normal border-none'
                      } btn-style`}
                    >
                      <span className='mr-2'>📝</span> Edit Profile
                    </button>
                    <button
                      onClick={() => setTab('salon')}
                      className={`${
                        tab === 'salon' && 'bg-btnColor text-white font-normal border-none'
                      } btn-style`}
                    >
                      <span className='mr-2'>💇‍♀️</span> Apply for Salon
                    </button>
                    <button
                      onClick={handleLogout}
                      className='btn-style text-btnColor border border-red-300 hover:bg-btnColor hover:text-white w-full p-3 text-[16px] leading-7 rounded-md mt-4 flex items-center'
                    >
                      <span className='mr-2'>🚪</span> Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-2 md:px-[20px]'>
              {/* Right side content */}
              {tab === 'bookings' && <MyBookings />}
              {tab === 'setting' && <Profile userData={userProfile} />}
              
              {tab === 'salon' && <div><Link to='/salonRegister' > Apply for Salon 

             
              </Link>
              <div className='mt-6'>
                
               <a href="#" className='text-btnColor'>see video how to apply for salon</a>
              </div>
              </div>
                 
              }
            </div>
          </div>
        )}
      </div>
    </section>
  );
  
};

export default SalonAccount;
