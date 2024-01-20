import User from "../models/users.models.js"
// controller for find the users , singleuser , updateuser , deleteuser
import { Booking } from "../models/booking.models.js";
import { Salon } from "../models/salon.models.js";

export const updateUser= async(req,res)=>{
    const id=req.params.id

    try {
        // logic
        const updatedUser =  await User.findByIdAndUpdate(id, {$set:req.body},{new:true});
        res.status(200).json({
            message:"user updated successfully..",
            success:true,
            data:updatedUser
        })
    } catch (error) {
           // error
           res.status(500).json({
            message:"failed to updated",
            success:false,
        })
    }
}

// delete the user
export const deleteleUser = async(req,res)=>{
    const id= req.params.id

    try {
        const user= await User.findByIdAndDelete(id,);
        res.status(200).json({
            message:"user deleted..",
            success:true,
        })
    } catch (error) {
        res.status(500).json({
            message:"failed to deleted",
            success:false,
        })
    }
}

// getsingle user
export const getSingleUser = async(req,res)=>{
    const id= req.params.id

    try {
        const user= await User.findById(id,);
        res.status(200).json({
            message:"user found",
            success:true,
            data:user
        })
    } catch (error) {
        res.status(500).json({
            message:"user not found",
            success:false,
        })
    }
}

// getAllsingle user
export const getAllleUser = async(req,res)=>{
    const id= req.params.id

    try {
        const users= await User.find({}).select('-password'); // dont show thne password
        res.status(200).json({
            message:"users found",
            success:true,
            data:users
        })
    } catch (error) {
        res.status(500).json({
            message:"users not found",
            success:false,
        })
    }
}

 // get userprofile controller
  
export const getUserProfile = async(req,res)=>{
      
     const id=req.params.id; // yaha se id aayegi
     //console.log("api se arahi ha",id);

     try {
        const user= await User.findById(id); // dont show thne password

        if (!user) {
            res.status(404).json({
                message:"user not found",
                success:false,
            })
            
        }
        const {password, ...rest}=user._doc
        res.status(200).json({
            message:"profile found",
            success:true,
            data:{...rest}
        })
          

     } catch (error) {
          
        res.status(500).json({
            message:"something went wrong",
            success:false,
        })
     }
     
    }


    // get myappointments controller    

    export const getMyAppointments = async(req,res)=>{
        const booking= await Booking.find({user:req.user.id})

        const salonIds= booking.map((book)=>book.salon.id)

        const salons= await Salon.find({_id:{$in:salonIds}}).select('-password');

        res.status(200).json({
            success:'true',
            message:'appointments are getting ', data:salons
        })
    }


    