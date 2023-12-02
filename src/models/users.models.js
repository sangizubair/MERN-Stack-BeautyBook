// step 1 create user model

// userName // req
// email // unique , req
// password encryptetd // req
// avatar optional

import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema= new Schema({
    userName:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,

    },
    avatar:{
        type:String,
    },
    appointments:[{
        type:mongoose.Types.ObjectId,
        ref: "Booking",
        
    }],
    
    refreshToken:{
        type:String
    },
    

},  {timestamps:true}
)

// create object of the user 
export const User= mongoose.model("User", userSchema);


