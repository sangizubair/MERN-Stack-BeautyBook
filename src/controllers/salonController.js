// all the auth controllers are here for salon
import { Salon } from "../models/salon.models.js"
import { Booking } from "../models/booking.models.js";


// generateToken function

// controller for find the users , singleuser , updateuser , deleteuser

export const updatedSalon = async (req, res) => {
    const id = req.params.id;

    try {
        // logic
        const updatedSalon = await Salon.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({
            message: "user updated successfully..",
            success: true,
            data: updatedSalon
        })
    } catch (error) {
        // error
        res.status(500).json({
            message: "failed to updated",
            success: false,
        })
    }
}

// delete the user
export const deleteSalon = async (req, res) => {
    const id = req.params.id

    try {
        const salon = await Salon.findByIdAndDelete(id,);
        res.status(200).json({
            message: "salon deleted..",
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: "failed to deleted",
            success: false,
        })
    }
}

// getsingle user
export const getSingleSalon = async (req, res) => {
    const id = req.params.id

    try {
        const salon = await Salon.findById(id,);
        res.status(200).json({
            message: "user found",
            success: true,
            data: salon
        })
    } catch (error) {
        res.status(500).json({
            message: "user not found",
            success: false,
        })
    }
}

// getAllsingle user
export const getAllSalon = async (req, res) => {
    const id = req.params.id

    try {
       const salons = await Salon.find({ _id: { $ne: id } }).select('-password'); // dont show thne password
        res.status(200).json({
            message: "users found",
            success: true,
            data: salons
        })
    } catch (error) {
        res.status(500).json({
            message: "users not found",
            success: false,
        })
    }
}
  
export const getAllSalongeneral = async (req, res) => {
    const id = req.params.id

    try {
       const salons = await Salon.find().select('-password'); // dont show thne password
        res.status(200).json({
            message: "users found",
            success: true,
            data: salons
        })
    } catch (error) {
        res.status(500).json({
            message: "users not found",
            success: false,
        })
    }
}


// get userprofile controller

export const getSalonProfile = async (req, res) => {

    const id = req.params.id; // yaha se id aayegi
    //console.log("api se arahi ha",id);

    try {
        const salon = await Salon.findById(id); // dont show thne password

        if (!salon) {
            res.status(404).json({
                message: "salon not found",
                success: false,
            })

        }
        const { password, ...rest } = salon._doc
        const appointments= await Booking.find({salon:id})
        res.status(200).json({
            message: "profile found",
            success: true,
            data: { ...rest , appointments }
        })


    } catch (error) {

        res.status(500).json({
            message: "something went wrong",
            success: false,
        })
    }

}