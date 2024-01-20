// step 1 create user model

// userName // req
// email // unique , req
// password encryptetd // req
// avatar optional
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true,

    },
    photo: {
        type: String,
    },
    gender: {
        type: String, enum: ["male", "female", "other"]
    },

    appointments: [{
        type: mongoose.Types.ObjectId,
        ref: "Booking",
        
    }],
    
    role: {
        type: String,
        enum: ["user", "admin" , ],
        default: "user", // Set a default role for new users
    },
}, { timestamps: true }
)

// create object of the user 
export default mongoose.model("User", userSchema);


