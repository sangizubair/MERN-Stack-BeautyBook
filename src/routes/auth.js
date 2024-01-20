// auth routes for users
import express from 'express';
import { registerUser , loginUser , registerSalon , loginSalon , bookSalonService } from '../controllers/authController.js';

const router= express.Router();  // auth routes here

// our routes here to login and register

router.post('/register', registerUser),
router.post('/login', loginUser);
router.post('/salonregister',registerSalon), // for salon only
router.post('/salonlogin',loginSalon);   // for salon only
router.post('/book',bookSalonService);   // for salon only


export default router
