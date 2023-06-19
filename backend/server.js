import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';



dotenv.config();
connectDb();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/users', userRoutes);

//middlewares: 
app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})