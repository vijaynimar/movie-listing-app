import { Schema,model } from "mongoose";
const userSchema=Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
const user=model("user",userSchema)
export {user}