import express from 'express'
import { updateUser , deleteleUser , getSingleUser , getAllleUser, getUserProfile , getMyAppointments } from '../controllers/userController.js'
import { authenticate , restrict } from '../auth/verifToken.js';

const router= express.Router();
// only for user and admin
router.get('/:id', authenticate, restrict(["user"]) ,getSingleUser);
router.get('/', authenticate, restrict(["admin"]) , getAllleUser);
router.put('/:id', authenticate, restrict(["user"]) ,updateUser);
router.delete('/:id', authenticate, restrict(["user"]) ,deleteleUser);
router.get('/profile/:id', authenticate, restrict(["user"]) ,getUserProfile);
router.get('/appointments/my-appointments' , authenticate , restrict(["user"]) , getMyAppointments )

// router.get('/profile/me', authenticate, restrict(["user"]) ,getUserProfile);

export default router;