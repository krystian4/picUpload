import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    _userId:{type:mongoose.ObjectId, required:true},
    description:{type:String, required:true, unique:true},
    imageURL:{type:String, required:true},
},{
    timestamps:true
})

const Image = mongoose.model("Image", imageSchema);
export default Image;