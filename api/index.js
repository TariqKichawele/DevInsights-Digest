import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import AuthRoute from './routes/AuthRoute.js';

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log('Connected to database');
    }).catch(() => {
    console.log('Connection failed');
});

const app = express();
app.use(express.json());

app.listen(3008, () => {
    console.log('Server is running on port 3008');
});

app.use('/api/user', UserRoute);
app.use('/api/auth', AuthRoute);    