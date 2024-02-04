import React from 'react'
import { IoIosPhonePortrait } from "react-icons/io";

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3  lg:p-5 rounded-md'>
      <div className=' flex flex-col items-start'>
        <p className='text__para mt-0  font-semibold text-headingColor '>
                ABOUT US      
        </p>
        <p className='text-[16px] text__para leading-7  mt-4 text-textColor'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, molestias?</p>
      </div>
           <hr />
      <div className='mt-[30px]'>
      <p className='text__para mt-0  font-semibold text-headingColor '>
            CONTACT & BUSINESS HOURS     
        </p>

        <div className='flex justify-stretch gap-2 mt-4 items-center'> 
        <p className=' text__para mt-0 text-headingColor'>
        <IoIosPhonePortrait  />  
        </p><span className='text-textColor'>923144684607</span>
           </div>
      </div>
        <hr />

      <div className='mt-[30px]'>
            <p className='text__para mt-0 font-semibold text-headingColor'>
              Availble Time Slots
            </p>
            <ul className='mt-3'>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Sunday 
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:00 PM
                    </p>
                </li> 
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Monday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:00 PM
                    </p>
                </li> 
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Tuesday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:00 PM
                    </p>
                </li> 
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Wednesday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:00 PM
                    </p>
                </li> 
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Thursday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:00 PM
                    </p>
                </li> 
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Friday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:00 PM
                    </p>
                </li> 
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Saturday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:00 PM
                    </p>
                </li> 
                 
            </ul>
      </div>
    </div>
  )
}

export default SidePanel