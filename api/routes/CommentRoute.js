import express from 'express';
import { createComment, getPostComments } from '../controllers/CommentController.js';
import { verifyToken } from '../utils/VerifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);

export default router;