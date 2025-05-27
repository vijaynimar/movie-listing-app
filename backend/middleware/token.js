import jwt from "jsonwebtoken"
export const tokenVerify=async(req,res,next)=>{
    const token=req.headers.authorization
    try{
        const decodedToken=jwt.verify(token,"vijaynimar")
        if(!decodedToken){
            return res.status(403).json({message:"user not verified"})
        }
        req.body._id=decodedToken._id
        req.body.username=decodedToken.username
        req.body.email=decodedToken.email 
        next()
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal server error in token verification"})
    }
}

