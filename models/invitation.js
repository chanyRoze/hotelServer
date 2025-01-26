import { Schema, model, Types } from "mongoose";
import { roomSchema } from "./room.js";

/*const userSmallSchema = mongoose.Schema({
    _id: { type: Types.ObjectId, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
})*/

const invitationSchema = Schema({
    //מזהה
    id: Number,
    //תאריך
    date: { type: Date, default: new Date() },
    // תאריך יעד
    deadline: Date,
    // כתובת
    address: String,
    // קוד לקוח מזמין
    userId: { type: Types.ObjectId, ref: "user" },
    // המוצרים המוזמנים
    rooms: { type:[roomSchema], required: true},
    // ההזמנה יצאה לדרך
    isOk: { type: Boolean, default: false },
    // מחיר למשלוח
    serviceFees: Number,
    //מחיר סופי
    finalPrice: Number

})

export const invitationModel = model("invitation", invitationSchema);