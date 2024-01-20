import mongoose from "mongoose";
import { Schema } from "mongoose";

// schema for booking 
const bookingSchema= new Schema ({
    salon:{
        type:mongoose.Types.ObjectId,
        ref:"Salon",
        required:true
    },

    user:{
        // ref from User model object
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },

    services:[{
        // ref from service model object
        type:mongoose.Types.ObjectId,
        ref:"Service",
        required:true
    }],

     appointmentDate: { // date of appointment user can select any date if the date is available
        type: Date,
        // required: true,
      },

      timeSlot: { // time slot of the appointment
        type: String,
       // required: true,
      },

      status: {  // status of the booking
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
      },

      isPaid: { // 20 % of the total amount will be paid by the user
        type: Boolean,
        default: false,
      },
}
, {
    timestamps: true,
  }
);


export const Booking = mongoose.model("Booking", bookingSchema);