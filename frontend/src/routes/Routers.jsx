
import React from 'react';
import Home from '../pages/Homepage/home.jsx';
import Register from '../pages/Register/register.jsx';
import SignUp from '../pages/Register/signUp.jsx';
import Login from '../pages/login.jsx';
import Salon from '../pages/salon/salon.jsx';
import SalonDetail from '../pages/salon/salonDetails.jsx';
import Services from '../pages/services.jsx';
import UserRegister from '../pages/Register/userRegister.jsx';
import SalonRegister from '../pages/Register/salonRegister.jsx';
import {Routes,Route} from 'react-router-dom';

const Routers = () => {
  return (  
     // Routes and Route
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/salon' element={<Salon/>}/>
      <Route path='/salonDetail/:id' element={<SalonDetail/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/services' element={<Services/>}/>
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="/register/salon" element={<SalonRegister/>}/>
      <Route path="/signup/user" element={<UserRegister/>} />
     </Routes>
  )
}

export default Routers