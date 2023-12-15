import React from 'react';
import StarRating from '../../components/Rating/rating.jsx';
const SalonCards = ({ salon }) => {
    // total rating is review actually 
    const { salonName, avgRating, totalRating, photo, loactoin, expereince, totalClients, type } = salon

    return (
        <>
            <div className='flex flex-col justify-items-center p-2 lg:p-3 '>
                <div>
                    <img src={photo} alt="" />
                </div>

                <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>
                    {salonName}
                </h2>

                <div className='flex place-items- gap-[6px]'>
                    <span className='flex items-center gap-2'>{avgRating}</span>
                    {<StarRating />} <span className='text-[14px] leading-6  lg:text-[16px] lg:leading-7 text-textColor font-[400]'>({totalRating})</span>
                </div>
                <div className='mt-2 lg:mt-3 flex items-center justify-between'>
                    {type}
                {/* <Link to={'/salon'} className='w-[20px] h-[20px]  rounded-full border border-solid border-[#181A1E] mt-[20px] mx-auto flex items-center justify-center group hover:bg-btnColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-4 h-4'/>
                  </Link> */}
                </div>
                
                
            </div>


        </>
    )
}

export default SalonCards