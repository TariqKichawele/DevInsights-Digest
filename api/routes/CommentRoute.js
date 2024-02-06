import express from 'express';
import { createComment, getPostComments, likeComment, editComment } from '../controllers/CommentController.js';
import { verifyToken } from '../utils/VerifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editcomment/:commentId', verifyToken, editComment);

export default router;