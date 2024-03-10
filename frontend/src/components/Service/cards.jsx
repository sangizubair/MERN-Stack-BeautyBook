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
          <h2 className='heading text-center text-3xl p-5'>
            The Services You Get
          </h2>
        </div>
        <div className='grid justify-items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 sm:gap-6 p-2 mt-4'>

          {/* Cards */}
          <Card image={Bodytreat} title="Bodytreatment" />
          <Card image={Whitening} title="Whitening" />
          <Card image={Face} title="Facial Services" />
          <Card image={Hair} title="Hair Services" />
          <Card image={Nail} title="Nails Services" />
          <Card image={Wax} title="Wax Services" />
          <Card image={Handsfeet} title="Hands & Feet" />
          <Card image={Threading} title="Threading" />
        </div>
      </div>
    </section>
  )
}

const Card = ({ image, title }) => {
  return (
    <div className='flex-none w-44 m-2 p-3 '> {/* Adjust width to fit all cards in a single row */}
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
          <Link to={'/services'} className='block w-10 h-10 mx-auto mt-4 flex rounded-full border border-solid border-[#181A1E] items-center justify-center group hover:bg-btnColor hover:border-none'>
            <BsArrowRight className='group-hover:text-white w-6 h-6' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cards;
