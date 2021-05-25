import express from 'express';
import mongoose from 'mongoose';
import Image from '../models/imageModel.js';
import uploadFileMiddleWare from '../middleware/upload.js';
import fs from 'fs';

//const fs = require('fs');
const imageRouter = express.Router();
const imagesStoragePath = '/assets/uploads/';
const baseUrl = "http://localhost:5000/";

imageRouter.post('/upload', async (req, res) => {
  try {
    await uploadFileMiddleWare(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    const user = JSON.parse(req.body.user);
    const image = new Image({
      'username': user.username,
      'description': req.body.description,
      'imageName': req.file.originalname,
    })
    await image.save();

    res.status(200).send({
      message: "Uploaded the file successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file! ${err}`,
    });
  }
})

imageRouter.get('/get-list', async (req, res) => {
  let imagesList = await Image.find().lean();
  imagesList = imagesList.map(image=>({...image, url : baseUrl + image.imageName}));
  res.status(200).send(imagesList);
})

export default imageRouter;