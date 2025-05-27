import  argon2 from "argon2"
import { user } from "../models/user.js"
import jwt from "jsonwebtoken"
export const signInUser=async (req,res)=>{
    const {username,email,password}=req.body
    if(!username && !email && !password){
        res.status(401).json({message:"required all fields"})
    }
    try{
        const userExist=await user.findOne({email:email})
        if(userExist){
            return res.status(404).json({message:"user already exists"})
        }
        const hashedPassword=await argon2.hash(password)
        let newUser=new user({
            username:username,
            email:email,
            password:hashedPassword
        })
        await newUser.save()
        res.status(201).json({message:"user created sucessfully"})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"error in signIn user"})
    }
}


export const login=async(req,res)=>{
    const {email,password}=req.body
    try{
        const userExist=await user.findOne({email:email})
        if(!userExist){
            return res.status(404).json({message:"user not exist"})
        }
        const passwordMatch=await argon2.verify(userExist.password,password)
        if(passwordMatch){
            const token=jwt.sign({username:userExist.username,email:userExist.email},"vijaynimar",{expiresIn:"2days"})
            res.status(200).json({token:token})
        }
    }catch(err){
        return res.status(500).json({message:"error in login"})
    }
}