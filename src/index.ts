import { Request, Response } from 'express';
import { app } from './config';
import { streamRoutes, userRoutes } from './routes';

app.get('/', (req: Request, res: Response) => {
	res.send('Welcome to Express & TypeScript Server');
});
app.use('/user', userRoutes);
app.use('/streams', streamRoutes);
