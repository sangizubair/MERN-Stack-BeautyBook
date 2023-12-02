// auth routes for users


import express from 'express';
import { register ,login } from '../controllers/authController.js';

const router= express.Router();

// our routes here to login and register

router.post('/register',register),
router.post('/login',login);

export default router
