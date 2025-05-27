import express from "express"
import connection from "./db.js"
import cors from "cors"
import { userRouter } from "./routers/user.js"
const app=express()
const PORT=2000
app.use(express.json())
app.use(cors())
app.use(userRouter)
connection()
app.listen(PORT,()=>{
    console.log("server started at port",PORT);
})