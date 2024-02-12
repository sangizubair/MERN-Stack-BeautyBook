// auth routes for users
import express from 'express';
import { registerUser , loginUser , registerSalon , loginSalon , bookSalonService  , deleteBooking , updateBookingStatus , getSalonBookings , updateBookingStatusCancel } from '../controllers/authController.js';

const router= express.Router();  // auth routes here

// our routes here to login and register

router.post('/register', registerUser),
router.post('/login', loginUser);
router.post('/salonregister',registerSalon), // for salon only
router.post('/salonlogin',loginSalon);   // for salon only
router.post('/book',bookSalonService);   // for user only
router.delete('/deletebooking/:bookingId', deleteBooking); // for salon only 
router.put('/updatebooking/:salonId', updateBookingStatus); // for salon only
router.put('/updatebookingcancel/:salonId', updateBookingStatusCancel); // for salon only
router.get('/salonbookings/:salonId', getSalonBookings); // for salon only 
export default router 
