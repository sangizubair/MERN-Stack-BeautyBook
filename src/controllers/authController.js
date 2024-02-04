// all the auth controllers are here
import User from "../models/users.models.js"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Salon } from "../models/salon.models.js";
import { Booking } from "../models/booking.models.js";
import { Service } from "../models/salon.models.js";


// generateToken function
const generateToken = user=>{
     return  jwt.sign({id:user._id , role:user.role},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:'15d',
     });
}
   
// register controller
export const registerUser = async (req, res) => {
    try {
        const { name, email, password, gender, photo ,  } = req.body

        let user = null
        user = await User.findOne({ email })

        // check if user alreadyexist

        if (user) {
            return res.status(400).json({
                message: 'User already exist'
            })
        }

        //  hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            password: hashPassword,
            photo,
            gender,
            role: req.body.role || 'user', // Check if user role is undefined and provide a default value
        })

        await user.save();
        res.status(200).json({
            success: true,
            message: 'User created successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: 'user doesnt created',
            success: false
        })
    }
}

 

// login controller
export const loginUser = async (req, res) => {
    try {
       
        const {email}= req.body;

         let user= await User.findOne({email});
          
         // check if the  user exit or not 
         if (!user) { // agar user register nahi ha
            return res.status(404).json({
                message:"user not found",
                success:false
            })
         }
         // compare the password
         const isPasswordMatch= await bcrypt.compare(req.body.password, user.password);
         if (!isPasswordMatch) {
            return res.status(404).json({
                message:"user's password not matched..",
                success:false
            })
         }

         // get token
         const token= generateToken(user);
         const {password, appointments, ...rest}= user._doc
         // Check if user role is undefined and provide a default value
         const userRole = rest.role || 'user';
        //console.log('Login Response:', { token, data: { ...rest } });
         res.status(200).json({
            status:true,
            message:"successfully login", token, data:{...rest, role:userRole}
         })

    } catch (error) {
        // error here
        res.status(500).json({
            message:"Invalid credentials",
            status:false
        })
    }
}

// logout controller for user

// export const logout = async(req,res) =>{
//     try {
//            // logic  here
           

//     } catch (error) {
//            // error here
//     }
// }


const generateTokenSalon = salon => {
    return jwt.sign({ id: salon._id, role: salon.role }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15d',
    });

}

// register controller for salon
export const registerSalon = async (req, res) => {
    const { ownerName, salonName, email, password, gender, photo, coverImage , phone, cnicNo, experience,
        bio,
        location,
        address,
        services, workingHours } = req.body;
    try {

        let salon = null
        salon = await Salon.findOne({ email })

        // check if user alreadyexist

        if (salon) {
            return res.status(400).json({
                message: 'Salon already exist'
            })
        }

        //  hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        salon = new Salon({
            ownerName,
            salonName,
            email,
            password: hashPassword,
            gender,
            role: req.body.role || 'salon', // Check if salon role is undefined and provide a default value
            phone,
            cnicNo,
            photo,
            coverImage,
            experience,
            bio,
            location,
            address,
            services,
            workingHours,
        })

        await salon.save();
        res.status(200).json({
            success: true,
            message: 'Salon created successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: 'salon doesnt created',
            success: false

        })
        console.log(error);
    }

}



// login controller for salon
export const loginSalon = async (req, res) => {
    try {

        const { email } = req.body;

        let salon = await Salon.findOne({ email });

        // check if the  user exit or not 
        if (!salon) { // agar user register nahi ha
            return res.status(404).json({
                message: "salon not found",
                success: false
            })
        }
        // compare the password
        const isPasswordMatch = await bcrypt.compare(req.body.password, salon.password);
        if (!isPasswordMatch) {
            return res.status(404).json({
                message: "salon's password not matched..",
                success: false
            }
            )
        }

        // get token
        const token = generateTokenSalon(salon);
        const { password, appointments, ...rest } = salon._doc
        // Check if user role is undefined and provide a default value
        const salonRole = rest.role || 'salon';
        //console.log('Login Response:', { token, data: { ...rest } });
        res.status(200).json({
            status: true,
            message: "successfully login", token, data: { ...rest, role: salonRole }
        })

    } catch (error) {
        // error here
        res.status(500).json({
            message: "Invalid credentials",
            status: false
        })
        console.log(error);
    }
}

// create booking controller
export const bookSalonService = async (req, res) => {
    try {
      const { salonId,salonName, userId, services, appointmentDate, timeSlot ,  paymentProofImg } = req.body;
  
      // Check if the salon exists
      const salon = await Salon.findById(salonId);
      if (!salon) {
        return res.status(404).json({
          message: 'Salon not found',
          success: false,
        });
      }
  
      // Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
          success: false,
        });
      }
   
  
      // Create a new booking object
      const booking = new Booking({
        salon: salonId,
        user: userId,
        salonName,
        services,
        appointmentDate,
        timeSlot,
        paymentProofImg ,
        status: 'pending',
        isPaid: false, // Modify this based on your business logic
      });
  
      // Save the booking
      await booking.save();
      //console.log('Booking created:', booking);

      // Add the booking to the user's appointments array
        user.appointments.push(booking);
        await user.save();

        // Add the booking to the salon's appointments array
        salon.appointments.push(booking);
        await salon.save();

      res.status(200).json({
        message: 'Booking created successfully',
        success: true,
        data: booking,
      });
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({
        message: 'Failed to create booking',
        success: false,
      });
    }
  };
 
  // get booking of specific salon 
  export const getSalonBookings = async (req, res) => {
    try {
      const { salonId } = req.params; // url se salon id aygi
  
      // Check if the salon exists
      const salon = await Salon.findById(salonId);
      if (!salon) {
        return res.status(404).json({
          message: 'Salon not found',
          success: false,
        });
      }
  
      // Get the salon's bookings
      const bookings = await Booking.find({ salon: salonId });
      console.log("bookings",bookings)
  
      res.status(200).json({
        message: 'Salon bookings found',
        success: true,
        data: bookings,
      }
      
      );
    } catch (error) {
      console.error('Error getting salon bookings:', error);
      res.status(500).json({
        message: 'Failed to get salon bookings',
        success: false,
      });
    }
  };
       

  // delete booking controller

// in this user can delete his/her booking option controller
export const deleteBooking = async (req, res) => {
    try {
      const { bookingId } = req.params; // booking id
      const {salonId} = req.params; // params se salon id aygi 
      const { userId } = req.body;  // user id 
  
      // Check if the booking exists
      const booking = await Booking.findById(bookingId);
      if (!booking) {
        return res.status(404).json({
          message: 'Booking not found',
          success: false,
        });
      }
  
      // Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
          success: false,
        });
      }
  
      // Check if the booking belongs to the user
      if (booking.user.toString() !== userId) {
        return res.status(401).json({
          message: 'You are not authorized to delete this booking',
          success: false,
        });
      }
  

      // Delete the booking
      await Booking.findByIdAndDelete(bookingId)
      await booking.save()
  
      // Remove the booking from the user's appointments array
       user.appointments = user.appointments.filter(
        (appointment) => appointment.toString() !== bookingId
      );
      await user.save();
  
      // Remove the booking from the salon's appointments array
      const salon = await Salon.findById(booking.salon);
      salon.appointments = salon.appointments.filter(
        (appointment) => appointment.toString() !== bookingId
      );
      await salon.save();

      res.status(200).json({
        message: 'Booking deleted successfully',
        success: true,
      });
    } catch (error) {
      console.error('Error deleting booking:', error);
      res.status(500).json({
        message: 'Failed to delete booking',
        success: false,
      });
    }
  };

// update booking controller as approved 
export const updateBookingStatus = async (req, res) => {
  try {
    const { bookingId } = req.body; // booking id
     const { salonId } = req.params; // body se salon id aygi
    //  const { userId } = req.body; // user id
    // Check if the booking exists
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({
        message: 'Booking not found',
        success: false,
      });
    }

   
     // Check if the user exists
     const salon = await Salon.findById(salonId);
     if (!salon) {
       return res.status(404).json({
         message: 'User not found',
         success: false,
       });
     }

     if (booking.salon.toString() !== salonId) {
      return res.status(401).json({
        message: 'You are not authorized to update the status of this booking',
        success: false,
      });

    }
      // Update the booking status to 'approved'
     booking.status = 'approved';

    // Save the updated booking
      await booking.save();
       
      res.status(200).json({
        message: 'Booking status updated to approved',
        success: true,
        data: booking,
      });
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({
      message: 'Failed to update booking status',
      success: false,
    });
  }
};

// update booking controller as cancelled 
export const updateBookingStatusCancel = async (req, res) => {
  try {
    const { bookingId } = req.params; // booking id
     const { salonId } = req.params; // params se salon id aygi
     const { userId } = req.body; // user id
    // Check if the booking exists
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({
        message: 'Booking not found',
        success: false,
      });
    }

   
     // Check if the user exists
     const salon = await Salon.findById(salonId);
     if (!salon) {
       return res.status(404).json({
         message: 'User not found',
         success: false,
       });
     }

     if (booking.salon.toString() !== salonId) {
      return res.status(401).json({
        message: 'You are not authorized to update the status of this booking',
        success: false,
      });
    }
      // Update the booking status to 'approved'
   booking.status = 'canceled';

    // Save the updated booking
  await booking.save();
      // Update the status in the user's appointments array
    // const userAppointmentIndex = user.appointments.findIndex(
    //   (appointment) => appointment._id.toString() === bookingId
    // );

    // if (userAppointmentIndex !== -1) {
    //   user.appointments[userAppointmentIndex].status = 'approved';
    //   await user.save();
    // }

       
      res.status(200).json({
        message: 'Booking status updated to approved',
        success: true,
        data: booking,
      });
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({
      message: 'Failed to update booking status',
      success: false,
    });
  }
};




  

    

  