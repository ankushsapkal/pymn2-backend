import express from 'express';
import  {createUser ,getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);

export default router;
