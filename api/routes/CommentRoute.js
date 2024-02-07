import express from 'express';
import { 
    createComment, 
    getPostComments, 
    likeComment, 
    editComment, 
    deleteComment, 
    getComments 
} from '../controllers/CommentController.js';
import { verifyToken } from '../utils/VerifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editcomment/:commentId', verifyToken, editComment);
router.delete('/deletecomment/:commentId', verifyToken, deleteComment)
router.get('/getcomments', verifyToken, getComments);

export default router;