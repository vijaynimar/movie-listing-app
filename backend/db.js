import { connect } from "mongoose";
const connection =async function () {
    try{
        await connect("mongodb://127.0.0.1:27017/movieListening")
        console.log("connected to mongoDb");
    }catch(err){
        console.log("error in mongo db connection");
    }
}
export default connection