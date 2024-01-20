import mongoose from "mongoose";
import { Schema } from "mongoose";


const serviceSchema = new Schema({
    name: {
        type: String,
       // required: true,
    },

    serviceDescription: {
        type: String,
       // required: true,
    },
    price: {
        type: Number,
       // required: true,
    },
    timeSlots: [{
        // day: {
        //     type: String,
        //     enum: ['', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        //   //  required: true,
        // },
        startTime: {
            type: String,
          //  required: true,
        },
        // endTime: {
        //     type: String,
        //   //  required: true,
        // },
    }],
});
  


 
// schema for salon
const salonSchema = new Schema({
    ownerName: {
        type: String,
        required: true,
    },
    salonName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    cnicNo: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true,
    },
    role: {
        type: String,
        enum: ["salon", "admin"],
        default: "salon",
    },
    phone: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
    },
   
    // coeve images array of iamges
    coverImage: [{
        type: String,
    }],
    experience: {
        type: String, // Assuming experience is a string, change to the appropriate type
    },
    bio: {
        type: String,
        maxLength: 50,
    },
    location: {
        type: String,
    },
    address: {
        type: String,
    },

    services: [serviceSchema],
    
    workingHours: [{
        day: {
            type: String,
            enum: ['', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          //  required: true,
        },
       
          // 
        dayOnOff: {
            type: Boolean,
            enum: ['', 'on', 'off'],
          //  required: true,
        },
        
        
        startTime: {
            type: String,
          //  required: true,
        },
        endTime: {
            type: String,
          //  required: true,
        },
    }],

    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: "Review",
    }],
    averageRating: {
        type: Number,
        default: 0,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
    isApproved: {
        type: String,
        enum: ['pending', 'approved', 'canceled'],
        default: 'pending',
    },
    appointments: [{
        type: mongoose.Types.ObjectId,
        ref: "Booking",
    }],
});

export const Salon = mongoose.model("Salon", salonSchema);
