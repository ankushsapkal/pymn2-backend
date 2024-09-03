// routes/adminRoutes.js
import express from 'express';
import { adminLogin, getAllUsers } from '../controllers/adminController.js';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', adminLogin);

router.get('/users', verifyToken, getAllUsers);

export default router;
