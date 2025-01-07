import mongoose from "mongoose";

const TopicModel = new mongoose.Schema({
    title:{
        type:String,
        unique: true
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})
export default mongoose.model('Topics',TopicModel)