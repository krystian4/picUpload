import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/picUpload',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
});
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('Server is readyyy');
});

//routers
app.use('/api/users', userRouter);

app.listen(5000, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});

