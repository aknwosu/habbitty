import express from 'express';
// import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
// import { mikroOrmMiddleware } from './middlewares/mikroOrm.js';
import userRoutes from './api/routes/userRoutes.js';
const app = express();
// Middleware setup
// app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
// Mikro-ORM middleware
// app.use(mikroOrmMiddleware);
// Routes
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('Hello, TO World!');
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
export default app;
