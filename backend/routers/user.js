import { Router } from "express";
import { signInUser } from "../controller/user.js";
import { checkPassword } from "../middleware/checkPassword.js";
import { login } from "../controller/user.js";
const userRouter=Router()
userRouter.get("/",(req,res)=>{
    res.send("healt check")
})

userRouter.post("/signIn",checkPassword,signInUser)
userRouter.post("/login",login)
export {userRouter}