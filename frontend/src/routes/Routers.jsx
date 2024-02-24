
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
import Aboutus from '../pages/AboutUs/aboutus.jsx';
import Contactus from '../pages/ContactUs/contactus.jsx';
import Privacypolicy from '../pages/PrivacyPolicy/privacypolicy.jsx';
import Faq from '../pages/Faqs/faq.jsx';
import Blog from '../pages/Blog/blog.jsx';
import TermService from '../pages/TermsService/termservices.jsx';
import Teams from '../pages/Team/teams.jsx';

const Routers = () => {
  return (  
     // Routes and Route
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/privacypolicy' element={<Privacypolicy/>}/>
      <Route path='/termservices' element={<TermService/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/salon' element={<Salon/>}/>
      <Route path='/teams' element={<Teams/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/salonDetail/:id' element={<SalonDetail/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route path='/services' element={<Services/>}/>
      <Route path='/booking/:id/service/:serviceId' element={ <ProtectedRoute allowedRoles={['user' , 'salon']} > <Booking/></ProtectedRoute> }/>
      {/* <Route path='//dashboard/user-account/bookings/:bookingId' element={<ViewDetails/>}/> */}
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