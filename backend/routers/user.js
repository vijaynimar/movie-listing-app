import { Router } from "express";
import { signInUser } from "../controller/user.js";
import { checkPassword } from "../middleware/checkPassword.js";
import { login } from "../controller/user.js";
import { tokenVerify } from "../middleware/token.js";
import { addMovie ,allMovies} from "../controller/movies.js";
const userRouter=Router()
userRouter.get("/",(req,res)=>{
    res.send("healt check")
})

userRouter.post("/signIn",checkPassword,signInUser)
userRouter.post("/login",tokenVerify,login)
userRouter.use(tokenVerify)
userRouter.post("/addMovie",addMovie)
userRouter.get("/allMovies",allMovies)
export {userRouter}