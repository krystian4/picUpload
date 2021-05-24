import express from 'express';
import data from '../data.js';
import User from '../models/UserModel.js';
import { generateToken } from '../utils.js';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

userRouter.get('/seed', async(req, res)=>{
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
})

userRouter.post('/signin', async(req, res) =>{
    const user = await User.findOne({username: req.body.username});
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid username or password!'});
})

userRouter.post('/signup', async(req, res) =>{
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      await user.save();
      res.send({message: "User created succesfully!"});
})

export default userRouter;