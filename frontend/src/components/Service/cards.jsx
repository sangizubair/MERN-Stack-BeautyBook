import React from 'react';
import Bodytreat from '../../assets/images/Back massage.jpg';
import Whitening from '../../assets/images/Normal face.jpg';
import Face from '../../assets/images/whitening.jpg';
import Hair from '../../assets/images/Trim.jpg';
import Nail from '../../assets/images/nail paint.jpg';
import Wax from '../../assets/images/Back.jpg';
import Handsfeet from '../../assets/images/hand.jpg';
import Threading from '../../assets/images/Threading.jpg';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Cards = () => {
  return (
    <section className='container justify-center items-center p-6'>
      <div className='container bg-cardBgColor'>
        <div className='lg:w-[400px] mx-auto'>
          <h2 className=' text-center text-xl sm:text-sm xl:text-3xl font-extrabold  p-4  '>
            The Services You Get
          </h2>
        </div>
        <div className='grid justify-items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 sm:gap-12  p-1'>

          {/* Cards */}
          <Card image={Bodytreat} title="Bodytreatment" tabname={'Body%20Treatments'} />
          <Card image={Whitening} title="Whitening" tabname={'Whitening%20Treatments'} />
          <Card image={Face} title="Facial Services" tabname={'Facial%20services'}/>
          <Card image={Hair} title="Hair Services" tabname={'Hair%20Services'} />
          <Card image={Nail} title="Nails Services" tabname={'Nail%20Treatments'}/>
          <Card image={Wax} title="Wax Services"  tabname={'Waxing%20services'} />
          <Card image={Handsfeet} title="Hands & Feet" tabname={'Hand%20and%20feet%20services'}/>
          <Card image={Threading} title="Threading" tabname={'Threading%20services'}/>
        </div>
      </div>
    </section>
  )
}

const Card = ({ image, title , tabname }) => {
  return (
    <Link to={`/services/${tabname}`}>
    
    <div className='flex-none w-44 -m-6  p-3 '> {/* Adjust width to fit all cards in a single row */}
      <div className='py-4 px-3 bg-white shadow-lg'>
        <div className='flex items-center justify-center'>
          <figure className='w-full h-32 overflow-hidden'> {/* Adjust height of the image */}
            <img src={image} alt="service" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className='mt-4'>
          <h2 className='text-lg leading-6 text-center text-headingColor font-semibold'>
            {title}
          </h2>
         
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Cards;
