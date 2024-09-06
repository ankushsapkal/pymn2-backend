import express from 'express';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/users', userRoutes);
app.use('/admin', adminRoutes);

export default app;
