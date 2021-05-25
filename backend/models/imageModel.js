import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    username:{type:String, required:true},
    description:{type:String, required:true},
    imageName:{type:String, required:true, unique:true},
},{
    timestamps:true
})

const Image = mongoose.model("Image", imageSchema);
export default Image;