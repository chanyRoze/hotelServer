import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import { connectToDB } from "./config/DB.js"
import logToFile from "./middlleware/logToFile.js"
import roomRouter from "./routers/room.js"
import invitationRouter from "./routers/invitation.js"
import userRouter from "./routers/user.js"

dotenv.config()
connectToDB()
const app = express()

app.use(cors())
app.use(express.json())
app.use(logToFile)

app.use("/api/rooms", roomRouter)
app.use("/api/user", userRouter)
app.use("/api/invitation",invitationRouter)

app.listen(8080, () => {
    console.log("app is listening on port 8080")
})