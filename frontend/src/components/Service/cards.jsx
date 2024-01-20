import React from 'react'
import Imag1 from '../../assets/images/service1.png';
import Imag2 from '../../assets/images/service2.png';
import Imag3 from '../../assets/images/service3.png';
import Imag4 from '../../assets/images/service4.png';
import Imag5 from '../../assets/images/service5.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const cards = () => {
  return (
   <>
     <section>
        <div className='container bg-cardBgColor'>
          <div className='lg:w[470px] mx-auto'>
            <h2 className='heading text-center '>
              Providing the best beauty servives
            </h2>
            <p className='text__para  text-center'>Read thousands of professional articles</p>
          </div>
          <div className='flex flex-wrap items-center justify-center flex-col md:flex-row gap-5 lg:gap[30-px] mt-[20px] lg:mt-[55px]'>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">

              <div className='py-[20px] px-3 mb-3 bg-white shadow-md '>
                <div className='flex items-center justify-center '>
                  <img src={Imag1} alt="service" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-center text-headingColor font[700]  '>
                    Hair
                  </h2>
                  <Link to={'/salon'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>

                </div>
              </div>
              
              {/* card2 */}
              <div className='py-[30px] px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center '>
                  <img src={Imag2} alt="service" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-center text-headingColor font[700]  '>
                  Barber
                  </h2>
                
                    
                  <Link to={'/salon'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>

              </div>
   
     {/* card3 */}
     <div className='py-[30px] px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center '>
                  <img src={Imag3} alt="service" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-center text-headingColor font[700]  '>
                  Lashes & Brows
                  </h2>
                  <Link to={'/salon'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
              </div>

              {/* card4 */}
     <div className='py-[30px] px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center '>
                  <img src={Imag4} alt="service" />
                </div>
                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-center text-headingColor font[700]  '>
                  Nails
                  </h2>
                
                    
                  <Link to={'/salon'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                 </div>
               </div>

                 {/* card5 */}
     <div className='py-[30px] px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center '>
                  <img src={Imag5} alt="service" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-center text-headingColor font[700]  '>
                  Skin
                  </h2>
                    
                  <Link to={'/salon'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>

                </div>
              </div>

                         {/* card6 */}
     <div className='py-[30px] px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center '>
                  <img src={Imag5} alt="service" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-center text-headingColor font[700]  '>
                  Skin
                  </h2>
                  <Link to={'/salon'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
              </div>
           {/* card7 */}
           <div className='py-[30px] px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center '>
                  <img src={Imag5} alt="service" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-center text-headingColor font[700]  '>
                  Skin
                  </h2>
                  <Link to={'/salon'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>

                </div>
              </div>

                         {/* card8 */}
     <div className='py-[30px] px-5 mb-3 bg-white shadow-md'>
                <div className='flex items-center justify-center '>
                  <img src={Imag5} alt="service" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-center text-headingColor font[700]  '>
                  Skin
                  </h2>
                
                    
                  <Link to={'/salon'} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
   </>
    
  )
}
export default cards
