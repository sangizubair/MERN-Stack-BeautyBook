import React, { useState } from 'react'
import UserImg from '../../assets/images/user-avatar.png'
import { formateDate } from '../../utils/FormateDate'
import {AiFillStar} from 'react-icons/ai';
import FeecbackForm from './FeecbackForm';

const Feedback = () => {
    const [showFeedbackForm, setShowFeedbackForm]= useState(false);

    return (
        <>
            <div className='mb-[50px]'>
                <h4 className='text-[20px] leading-[30px] text-headingColor mb-[30px]'>
                    All review (273)
                </h4>

                <div className='flex justify-between gap-10 mb-[30px]'>
                    <div className='flex gap-3'>
                        <figure className='w-10 h-10 rounded-full'><img src={UserImg} alt="" /></figure>
                        <div>
                            <h5>Ayesha</h5>
                            <p className=''>{formateDate('12-4-2023')}</p>
                            <p className='text__para mt-3 font-medium text-[15px]'>Good services, highly recommended</p>
                        </div>
                    </div>
                         <div className='flex gap-1'>
                     {[...Array(5).keys()].map((_,index)=> <AiFillStar key={index} color='#0067FF'/>)}
                         </div>
                </div>
            </div>
                      
                 
               {!showFeedbackForm && (<div className='text-center '>
                   <button className='btn bg-btnColor' onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
               </div>)}
               {
                showFeedbackForm && <FeecbackForm/>
               }
        </>
    )
}

export default Feedback