import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import AuthRoute from './routes/AuthRoute.js';
import PostRoute from './routes/PostRoute.js';
import CommentRoute from './routes/CommentRoute.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database')
    })
    .catch(() => {
        console.log('Connection failed')
    });

app.use('/api/user', UserRoute);
app.use('/api/auth', AuthRoute);    
app.use('/api/post', PostRoute);
app.use('/api/comment', CommentRoute);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client' , 'dist', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})