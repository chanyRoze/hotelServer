import mongoose from "mongoose";
import { type } from "os";
import { boolean } from "webidl-conversions";

/*const authorSchema = mongoose.Schema({

    firstName: String,
    lastName: String,
    address: String
    //כל מה שנבנה עם סכמה מקבל את ה_id באופן אוטומטי
})*/

export const roomSchema = mongoose.Schema({
    id: Number,
    num: Number,
    roomCategories: [String],
    description: String,
    price: Number,
    constructionDate: { type: Date, default: new Date() },
    numBads: Number,
    author: {
        firstName: String,
        lastName: String,
        phone: Number,
        isTaken: { type: Boolean, default: false }
    }
})
//שם טבלה לכתוב ביחיד הוא הופך לרבים בעצמו
export const roomModel = mongoose.model("room", roomSchema);
//export const authorModel=mongoose.model("author",authorSchema);