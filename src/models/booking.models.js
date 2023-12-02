import { Schema } from "mongoose";
import mongoose from "mongoose";

// schema for booking 

const bookingSchema= new Schema ({

    // salon owner
    // user or customer 
    
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
    appointmentDate: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
      },

      isPaid: {
        type: Boolean,
        default: true,
      },

},  { timestamps: true }
);

export const Booking= mongoose.model("Booking",bookingSchema) 