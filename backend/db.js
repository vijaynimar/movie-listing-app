import { connect } from "mongoose";
const connection =async function () {
    try{
        await connect("mongodb+srv://vijaynimar8:JyHfjQXVcIikb6gP@cluster0.qsn44bj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("connected to mongoDb");
    }catch(err){
        console.log("error in mongo db connection");
    }
}
export default connection