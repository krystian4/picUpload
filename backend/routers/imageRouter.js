import express from 'express';
import mongoose from 'mongoose';
import Image from '../models/imageModel.js';
import uploadFileMiddleWare from '../middleware/upload.js';



const imageRouter = express.Router();

imageRouter.post('/upload', async(req, res)=>{
    //console.log(req.body);
    //console.log(req.files);

    try {

        await uploadFileMiddleWare(req, res);
        console.log(req.body.description);
        console.log(JSON.parse(req.body.user));

        //console.log(req);
        console.log(req.file);

        if (req.file == undefined) {
          return res.status(400).send({ message: "Please upload a file!" });
        }
    
        const user = JSON.parse(req.body.user);
        // console.log(mongoose.Types.ObjectId(user._id));
        // console.log(req.body.description);
        // console.log("./assets/uploads/" + req.file.originalname);
        const image = new Image({
                '_userId': mongoose.Types.ObjectId(user._id),
                'description': req.body.description,
                'imageURL' : "./assets/uploads/" + req.file.originalname,
        })
        await image.save();


        res.status(200).send({
          message: "Uploaded the file successfully: " + req.file.originalname,
        });
      } catch (err) {
          console.log(err);
        res.status(500).send({
          message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
      }
      

})

export default imageRouter;