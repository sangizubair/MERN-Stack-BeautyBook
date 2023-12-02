import { Schema } from "mongoose";
import mongoose from "mongoose";

const salonSchema= new Schema({

    ownerName:{
        type: String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
       type:String,
       required:true
    },

    // profile update 
    phone:{
        type:Number
    },
    // uplaod on cloudinary 
    photo:{
        type:String
    },
    price:{
        type:String
    },
    experince:{
        type:Array
    },
    bio:{
       type:String,
       maxLength:50
    },
    about:{
        type:String
    },
    timeSlot:{
        type:Number,
        default:0
    },
    reviews:[{
        type:mongoose.Types.ObjectId, 
        ref:"Review"
    }],
    averageRating:{
        type:Number,
        default:0
    },

    totalRating:{
        type:Number,
        default:0
    },
    isApproved:{
        type:String,
        enum:['pending','approved','canceled'],
        default:'pending'
    },

    appointments:[{
        type:mongoose.Types.ObjectId,
        ref: "Booking",
        
    }]
});

// creating salon object schema 
export const Salon= mongoose.model("Salon",salonSchema)