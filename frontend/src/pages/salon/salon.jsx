import React from 'react'
import SalonCard from '../../components/Salon/SalonCards'
import SalonCardsAll from '../../components/Salon/SalonCardsAll'
import { authContext } from '../../context/AuthContext.jsx';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const salon = () => {
  const { role } = useContext(authContext);
  return (
    
   <>
   {role === 'salon' ? <SalonCard />  : <SalonCardsAll /> }
    
   </>
  )
}

export default salon