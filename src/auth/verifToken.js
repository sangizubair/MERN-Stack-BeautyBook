
import jwt from 'jsonwebtoken';
import User from "../models/users.models.js";
import { Salon } from '../models/salon.models.js';

export const authenticate = async(req, res, next)=>{
    
          //logic here
          const authToken=req.headers.authorization 

          // check if token exist or not
          if (!authToken || !authToken.startsWith('Bearer ')) {
              return res.status(401).json({
                message:"authorization denied..",
                success:false
              })
          }

          try {
           // console.log(authToken);
           
              next();
          } catch (error) {
            return res.status(401).json({
                message:"invalid token",
                success:false
            })
          }
     }

  

     // restrict path for user
     export const restrict = roles => async(req,res,next)=>{
         // get the user id
            const userId= req.params.id;
         try {
            const user = await User.findById(userId);
    
            //Check if user exists
            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                    success: false,
                });
            }
    
            // Check if the user's role is included in the allowed roles
            if (!roles.includes(user.role)) {
                return res.status(401).json({
                    message: "You are not authorized",
                    success: false,
                }); 
            }
    
            next();
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Error during authorization",
                success: false,
            });
        }
     }

     // restrict path for salon
     export const restrictsalon = roles => async(req,res,next)=>{
         
        // get the user id
           const salonId= req.params.id;
        try {
           const salon = await Salon.findById(salonId);
   
           //Check if user exists
           if (!salon) {
               return res.status(404).json({
                   message: "Salon not found",
                   success: false,
               });
           }
   
           // Check if the salom's role is included in the allowed roles
           if (!roles.includes(salon.role)) {
               return res.status(401).json({
                   message: "You are not authorized",
                   success: false,
               }); 
           }
   
           next();
       } catch (error) {
           console.error(error);
           res.status(500).json({
               message: "Error during authorization",
               success: false,
           });
       }
    }
