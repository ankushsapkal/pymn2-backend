import express from 'express';
import { adminLogin, refreshAccessToken } from '../controllers/adminController.js';
import verifyToken from '../middleware/authMiddleware.js';
import { getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', adminLogin);
router.post('/refresh-token', refreshAccessToken); 
router.get('/users', verifyToken, getAllUsers);

export default router;
