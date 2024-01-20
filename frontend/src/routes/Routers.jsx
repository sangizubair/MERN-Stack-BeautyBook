
import React from 'react';
import Home from '../pages/Homepage/home.jsx';
// import Register from '../pages/Register/register.jsx';
import Login from '../pages/Login/login.jsx';
import SalonLogin from '../pages/Login/salonLogin.jsx';
// import Login from '../pages/login.jsx';
import Salon from '../pages/salon/salon.jsx';
import SalonDetail from '../pages/salon/salonDetails.jsx';
import Services from '../pages/services.jsx';
import UserRegister from '../pages/Register/userRegister.jsx';
import SalonRegister from '../pages/Register/salonRegister.jsx';
import MyAccount from '../Dashboard/user-account/MyAccount.jsx';
import SalonAccount from '../Dashboard/salon-account/SalonAccount.jsx';
import {Routes,Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx';
import Booking from '../components/Booking/booking.jsx';

const Routers = () => {
  return (  
     // Routes and Route
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/salon' element={<Salon/>}/>
      <Route path='/salonDetail/:id//service/:id' element={<SalonDetail/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route path='/services' element={<Services/>}/>
      <Route path='/booking/:id' element={ <ProtectedRoute allowedRoles={['user' , 'salon']} > <Booking/></ProtectedRoute> }/>
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/salonLogin' element={<SalonLogin/>}/>
      <Route path="/salonRegister" element={<SalonRegister/>}/>
      <Route path="/userRegister" element={<UserRegister/>} />
      <Route path="/user/profile/:id" element={<ProtectedRoute allowedRoles={['user']}><MyAccount/></ProtectedRoute>} />
      <Route path="/salon/profile/:id" element={<ProtectedRoute allowedRoles={['salon']}><SalonAccount/></ProtectedRoute>} />
     </Routes>
  )
}

export default Routers