import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.js';
import { errorMiddleware } from './middleware/error.js';

dotenv.config({
  path: './.env',
});

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use('/', userRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});