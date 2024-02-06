import express from 'express';
import { createComment } from '../controllers/CommentController.js';
import { verifyToken }from '../utils/VerifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);

export default router;