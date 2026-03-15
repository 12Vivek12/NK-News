import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
import articleRoutes from './routes/articleRoutes.js';
import authRoutes from './routes/authRoutes.js';
// Routes
app.use('/api/articles', articleRoutes);
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to NK News API' });
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
        },
    });
});
export default app;
//# sourceMappingURL=app.js.map