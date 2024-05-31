import express from 'express';
import { newUser } from '../controllers/user.js';

const app = express();

app.get('/', newUser);

export default app;