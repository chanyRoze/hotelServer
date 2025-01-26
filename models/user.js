import mongoose from "mongoose";
import { type } from "os";

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' },
    fine: { type: Number, default: 0 }


})

export const userModel = mongoose.model("user", userSchema);
