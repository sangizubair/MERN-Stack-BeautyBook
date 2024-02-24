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
    <>
      <section className='container justify-center items-center p-6'>
        <div className='container bg-cardBgColor'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center p-8 '>
              The Services You Get
            </h2>
            <p className='text__para text-center py-2'>Read thousands of professional articles</p>
          </div>
          <div className='flex items-center justify-center flex-col md:flex-row gap-3 lg:gap-30px mt-20px lg:mt-55px'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 lg:gap-30px mt-30px lg:mt-55px">
              {/* Card 1 */}
              <div className='py-20px px-3 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center  '>
                  <figure className='flex items-center justify-center w-20 h-20 rounded-full overflow-hidden'>
                    <img src={Bodytreat} alt="service" className="w-full h-full object-fill" />
                  </figure>
                </div>
                <div className='mt-30px'>
                  <h2 className='text-26px leading-9 text-center text-headingColor font-700'>
                    BodyTreatments
                  </h2>
                  <Link to={'/services'} className='w-44px h-44px rounded-full border border-solid border-[#181A1E] mt-30px mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                  </Link>
                </div>
              </div>
              {/* Card 2 */}
              <div className='py-30px px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center'>
                <figure className='flex items-center justify-center w-20 h-20 rounded-full overflow-hidden'>
                    <img src={Whitening} alt="service" className="w-full h-full object-fill" />
                  </figure>
                </div>
                <div className='mt-30px'>
                  <h2 className='text-26px leading-9 text-center text-headingColor font-700'>
                    Whitening
                  </h2>
                  <Link to={'/services'} className='w-44px h-44px rounded-full border border-solid border-[#181A1E] mt-30px mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                  </Link>
                </div>
              </div>
              {/* Card 3 */}
              <div className='py-30px px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center'>
                <figure className='flex items-center justify-center w-20 h-20 rounded-full overflow-hidden'>
                    <img src={Face} alt="service" className="w-full h-full object-fill" />
                  </figure>
                </div>
                <div className='mt-30px'>
                  <h2 className='text-26px leading-9 text-center text-headingColor font-700'>
                    Facialservices
                  </h2>
                  <Link to={'/services'} className='w-44px h-44px rounded-full border border-solid border-[#181A1E] mt-30px mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                  </Link>
                </div>
              </div>

              {/* Card 4 */}
              <div className='py-30px px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center'>
                <figure className='flex items-center justify-center w-20 h-20 rounded-full overflow-hidden'>
                    <img src={Hair} alt="service" className="w-full h-full object-fill" />
                  </figure>
                </div>
                <div className='mt-30px'>
                  <h2 className='text-26px leading-9 text-center text-headingColor font-700'>
                  Hair services
                  </h2>
                  <Link to={'/services'} className='w-44px h-44px rounded-full border border-solid border-[#181A1E] mt-30px mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                  </Link>
                </div>
              </div>
              {/* Card 5 */}
              <div className='py-30px px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center'>
                <figure className='flex items-center justify-center w-20 h-20 rounded-full overflow-hidden'>
                    <img src={Nail} alt="service" className="w-full h-full object-fill" />
                  </figure>
                </div>
                <div className='mt-30px'>
                  <h2 className='text-26px leading-9 text-center text-headingColor font-700'>
                   Nails services
                  </h2>
                  <Link to={'/services'} className='w-44px h-44px rounded-full border border-solid border-[#181A1E] mt-30px mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                  </Link>
                </div>
              </div>
              {/* Card 6 */}
              <div className='py-30px px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center'>
                <figure className='flex items-center justify-center w-20 h-20 rounded-full overflow-hidden'>
                    <img src={Wax} alt="service" className="w-full h-full object-fill" />
                  </figure>
                </div>
                <div className='mt-30px'>
                  <h2 className='text-26px leading-9 text-center text-headingColor font-700'>
                   Wax services
                  </h2>
                  <Link to={'/services'} className='w-44px h-44px rounded-full border border-solid border-[#181A1E] mt-30px mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                  </Link>
                </div>
              </div>
              {/* Card 7 */}
              <div className='py-30px px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center'>
                <figure className='flex items-center justify-center w-20 h-20 rounded-full overflow-hidden'>
                    <img src={Handsfeet} alt="service" className="w-full h-full object-fill" />
                  </figure>
                </div>
                <div className='mt-30px'>
                  <h2 className='text-26px leading-9 text-center text-headingColor font-700'>
                   Hands & Feet
                  </h2>
                  <Link to={'/services'} className='w-44px h-44px rounded-full border border-solid border-[#181A1E] mt-30px mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                  </Link>
                </div>
              </div>
              {/* Card 8 */}
              <div className='py-30px px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center'>
                <figure className='flex items-center justify-center w-20 h-20 rounded-full overflow-hidden'>
                    <img src={Threading} alt="service" className="w-full h-full object-fill" />
                  </figure>
                </div>
                <div className='mt-30px'>
                  <h2 className='text-26px leading-9 text-center text-headingColor font-700'>
                   Threading services
                  </h2>
                  <Link to={'/services'} className='w-44px h-44px rounded-full border border-solid border-[#181A1E] mt-30px mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                  </Link>
                </div>
              </div>
              {/* Add more cards here */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards;
