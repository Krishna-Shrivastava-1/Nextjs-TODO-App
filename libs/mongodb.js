import mongoose from "mongoose";

const connectmongodb =async ()=>{
    try {
    await    mongoose.connect(process.env.MONGOURL)
        console.log("connected to database")
    } catch (error) {
        console.log(error)
    }
}
export default connectmongodb;