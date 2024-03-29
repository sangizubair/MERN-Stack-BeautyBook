// App.js
import React from 'react';
import Carousel from '../../components/Carousel/carousel.jsx';
import ServiceCards from '../../components/Service/cards.jsx';
import SalonList from '../../components/Salon/SalonList.jsx';
import Allsalon from '../../components/Salon/Allsalon.jsx';
// import useGeolocation from '../../components/Location/useGeolocation.jsx';
import LocationCard from '../../components/Location/locationCard.jsx';
import { authContext } from '../../context/AuthContext.jsx';
import { useContext } from 'react';
import B1 from '../../assets/images/b1.svg';
import B2 from '../../assets/images/b2.svg';

//  hero sction //
const Home = () => {
   // const location = useGeolocation();
   const { role } = useContext(authContext);
   return (
      <>
         {/* <LocationCard /> */}
         <Carousel />
         {role === 'salon' ? <SalonList /> : <Allsalon />}
         <ServiceCards />
         <section className='container'>
            <div>
               <div className='flex justify-center text-center p-4'>
                  <h2 className='heading text-2xl md:text-3xl lg:text-4xl xl:text-4xl'>BeautyBook</h2>
               </div>
               <div className='flex justify-center text-center p-4'>
                  <p className='text-base md:text-lg lg:text-xl xl:text-xl'>
                     BeautyBook is a free beauty scheduling app and makes appointments easy to find and book within seconds.
                     <br /> No more phone tag. Book anytime, from anywhere, 24/7.
                  </p>
               </div>
               <div className='flex justify-center text-center p-4'>
                  <p className='text-base md:text-lg lg:text-xl xl:text-xl'>
                     BeautyBook is a gateway to a revolutionized beauty experience. We're changing the game,
                     <br /> making beauty bookings convenient, transparent, and accessible.
                  </p>
               </div>
            </div>
         </section>

         <section className="container justify-center items-center">
            <div className="flex flex-col items-center">
               <div className="lg:flex justify-center items-center">
                  <div className="flex justify-center mt-8 lg:mt-0 mb-5 lg:mr-5">
                     <img
                        src={B1}
                        style={{ width: '300px', height: '300px' }}
                        className="w-40 h-40 lg:w-48 lg:h-48"
                        alt=""
                     />
                  </div>
                  <div className="lg:w-[400px] text-center lg:text-left">
                     <div className="text-headingColor font-extrabold text-lg">Appointments done better</div>
                     <p className="text-justify py-3">
                        Looking for your next appointment with a best salon, hair stylist,
                        massage therapist or nail artist? Need appointment booking for a
                        triming, an eyebrow wax, or a deep massage?
                     </p>
                     <p className='text-justify py-3'>
                        BeautyBook is a free beauty scheduling app and makes appointments easy to find and book within seconds. Book
                        anytime, from anywhere, 24/7.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="container justify-center items-center">
            <div className="flex flex-col items-center">
               <div className="lg:flex justify-center items-center gap-5">
                  <div className="flex justify-center mt-5 lg:mt-0 lg:order-last">
                     <img
                        src={B2}
                        style={{ width: '300px', height: '300px' }}
                        className="w-40 h-40 lg:w-48 lg:h-48"
                        alt=""
                     />
                  </div>
                  <div className="lg:w-[400px] text-center lg:text-left lg:order-first">
                     <div className="text-headingColor font-extrabold text-lg">Book with the best, near you</div>
                     <p className='text-justify py-2'>
                        Take a scroll around the block to see top health and beauty
                        businesses on Booksy’s marketplace.
                     </p>
                     <p className='text-justify py-2'>
                        <p className='text-justify py-3'>
                           Check out their vibe from their business profile and hear what other
                           people are saying with verified reviews. You can even look through
                           their portfolio of work.
                        </p>
                     </p>
                     <p className='text-justify py-2'>
                        Save time and leave the stress to someone else. With Booksy, setting
                        up your next beauty appointment is free and easy.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>

   );
};

export default Home;
