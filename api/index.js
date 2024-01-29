import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log('Connected to database');
    }).catch(() => {
    console.log('Connection failed');
});

const app = express();

app.listen(3008, () => {
    console.log('Server is running on port 3008');
});