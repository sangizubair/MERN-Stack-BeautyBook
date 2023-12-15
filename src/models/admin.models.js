import { Schema } from "mongoose";
import mongoose from "mongoose";

const adminSchema = new Schema({
  // Admin details, if needed
  adminName: {
    type: String,
    required: true,
  },
  adminEmail: {
    type: String,
    required: true,
    unique: true,
  },
  adminPassword: {
    type: String,
    required: true,
  },

  // Tracking Users
  users: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],

  // Tracking Salons
  salons: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Salon",
    },
  ],

  // Other admin-related fields, if needed

}, { timestamps: true });

// Create Admin model
export const Admin = mongoose.model("Admin", adminSchema);
