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
import BeautyChar from '../../assets/images/beautyChar.png';
import BeautyChar2 from '../../assets/images/Char2.png';


//  hero sction //

const Home = () => {
   // const location = useGeolocation();
   const { role } = useContext(authContext);

   return (

      <>
         <LocationCard />
         <Carousel />

         {role === 'salon' ? <SalonList /> : <Allsalon />}

         <ServiceCards />



         <section className='container'>
            <div >
               <div>
                  <h2 className='flex justify-center heading text-center'>BeautyBook</h2>
               </div>
               <div className='flex justify-center text-center p-8'>
                  <p>BeautyBook is a free beauty scheduling app and makes appointments easy to find and book within seconds. <br /> No more phone tag. Book anytime, from anywhere, 24/7.
                  </p>
               </div>

               <div className='flex justify-center text-center'>
                  <p>
                     BeautyBook is a gateway to a revolutionized beauty experience. We're changing the game, <br /> making beauty bookings convenient, transparent, and accessible.
                  </p>
               </div>

            </div>
         </section>

         <section className='my-5'>
            <div className='container flex flex-col md:flex-row justify-center items-center gap-10'>
               <div className='md:w-1/2'>
                  <img src={BeautyChar} alt="Beauty Character" className="w-50" />
               </div>

               <div className='md:w-1/2'>
                  <div className='font-semibold text-2xl mb-6'>Appointments Done Better</div>
                  <div>
                     <p className='mb-4 text-lg'>
                        Looking for your next appointment with the best salon, hair stylist,
                        massage therapist, or nail artist? Need appointment booking for a
                        trimming, an eyebrow wax, or a deep massage?
                     </p>
                     <p className='mb-4 text-lg'>
                        BeautyBook is a free beauty scheduling app and makes appointments easy to find and book within seconds. Book
                        anytime, from anywhere, 24/7.
                     </p>
                     <p className='mb-4 text-lg font-semibold'>
                        Discover top salon in your area and book instantly with
                        BeautyBook.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className='my-5'>
            <div className='container flex flex-col md:flex-row justify-center items-center gap-10'>

               <div className='md:w-1/2'>
                  <div className='font-semibold text-2xl mb-6'>Book with the best, near you</div>
                  <div>
                     <p className='mb-4 text-lg'>
                        Take a scroll around the block to see top health and beauty
                        businesses on Booksy’s marketplace.
                     </p>
                     <p className='mb-4 text-lg'>
                        Check out their vibe from their business profile and hear what other
                        people are saying with verified reviews. You can even look through
                        their portfolio of work.
                     </p>
                     <p className='mb-4 text-lg '>
                        Save time and leave the stress to someone else. With Booksy, setting
                        up your next beauty appointment is free and easy.
                     </p>
                  </div>
               </div>
               <div className='md:w-1/2'>
                  <img src={BeautyChar2} alt="Beauty Character" className="w-50" />
               </div>
            </div>
         </section>
         {/* salon services profile feature */}

         {/* <section >
     <div className='container bg-cardBgColor '>
      
        <div className='xl:w-[400px] mx-auto'>
         <h2 className='heading text-center '>
            Our Beauty Salon
         </h2>
        </div>         */}
         {/* <Salonlist salons={salons} /> */}
         {/* </div>
       </section> */}

         {/* <div className='card'>
            <div className='card-header text-left '>
               <div>{location.loaded ? JSON.stringify(location): "location not here" }</div>
            </div>
       </div> */}

      </>

   );
};

export default Home;
