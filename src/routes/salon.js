import express from 'express';
import { updatedSalon ,  getSingleSalon , getAllSalon , getSalonProfile , deleteSalon, getAllSalongeneral  } from '../controllers/salonController.js';
//import { deleteleUser } from '../controllers/userController.js';
import { authenticate , restrictsalon } from '../auth/verifToken.js';

const router= express.Router();  // auth routes here
// our routes here to login and register

router.put('/:id', authenticate,  restrictsalon(["salon"])  , updatedSalon  ); // for salon only
router.delete('/:id',  deleteSalon); // for salon only
router.get('/:id', authenticate,restrictsalon(["salon"]) , getSingleSalon); // for salon only
router.get('/:id/all',  restrictsalon(["salon"]) , getAllSalon); // for admin only can get all salon
router.get('/',  getAllSalongeneral); 
router.get('/profile/:id', authenticate, restrictsalon(["salon"]), getSalonProfile); // for salon only

export default router ;
