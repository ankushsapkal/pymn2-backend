import express from 'express';
import { createUser, getAllUsers, registerUserValidators } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUserValidators, createUser);
router.get('/', getAllUsers);

export default router;
