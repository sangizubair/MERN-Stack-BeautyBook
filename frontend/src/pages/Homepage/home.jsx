// App.js
import React from 'react';
import Carousel from '../../components/Carousel/carousel.jsx';
import ServiceCards from '../../components/Service/cards.jsx';
import SalonList from '../../components/Salon/SalonList.jsx';
// import useGeolocation from '../../components/Location/useGeolocation.jsx';
import LocationCard from '../../components/Location/locationCard.jsx';


//  hero sction //

const Home = () => {
// const location = useGeolocation();

  return (

    <>
       <LocationCard/>
      <Carousel />
      <ServiceCards/>

      {/* salon services profile feature */}

    <section >
     <div className='container bg-cardBgColor '>
      
        <div className='xl:w-[400px] mx-auto'>
         <h2 className='heading text-center '>
            Our Beauty Salon
         </h2>
        </div>        
        <SalonList/>
        {/* <Salonlist salons={salons} /> */}
     </div>
       </section>

       {/* <div className='card'>
            <div className='card-header text-left '>
               <div>{location.loaded ? JSON.stringify(location): "location not here" }</div>
            </div>
       </div> */}
      
    </>

  );
};

export default Home;
