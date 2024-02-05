import express from 'express';
import { verifyToken } from '../utils/VerifyUser.js';
import { create, getposts, deletePost, updatePost } from '../controllers/PostController.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getpost', getposts);
router.delete('/deletepost/:postId/:userId', verifyToken, deletePost);
router.put('/updatepost/:postId/:userId', verifyToken, updatePost);

export default router;