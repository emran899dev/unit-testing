import express from 'express';
import dotenv from 'dotenv';
import congigureAllRoutes from './routes/index';

dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());
congigureAllRoutes(app);
export default app;
