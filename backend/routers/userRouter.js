import express from 'express';
import data from '../data.js'
import User from '../models/UserModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed', async(req, res)=>{
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
})

userRouter.post('/signin', async(req, res) =>{
    console.log(req.body);
    console.log('czesc');
    const user = await User.findOne({username: req.body.username});
    if(user){
        res.send({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user),
        });
        return;
    }
    res.status(401).send({message: 'Invalid username or password!'});
})

export default userRouter;