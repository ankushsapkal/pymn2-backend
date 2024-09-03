import express from 'express';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/admin', adminRoutes);

export default app;
