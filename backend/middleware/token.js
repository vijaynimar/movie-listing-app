import jwt from "jsonwebtoken"
export const tokenVerify=async(req,res,next)=>{
    const token=req.headers.authorization
    try{
        // console.log(token);
        const decodedToken=jwt.verify(token,"vijaynimar")
        if(!decodedToken){
            return res.status(403).json({message:"user not verified"})
        }
        req.user = {
        id: decodedToken._id,
        username: decodedToken.username,
        email: decodedToken.email
        };
        next();
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal server error in token verification"})
    }
}

