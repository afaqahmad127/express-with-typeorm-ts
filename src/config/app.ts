import 'reflect-metadata';
import { config } from 'dotenv';
config();
import express, { Application } from 'express';
import { appEnv } from './appEnv';
import { myDataSource } from './db';

const app: Application = express();
app.use(express.json());

myDataSource
	.initialize()
	.then(() => {
		app
			.listen(appEnv.port, () => {
				console.log(`Server is Fire at http://localhost:${appEnv.port}`);
			})
			.on('error', (err) => {
				console.error('Error in server: ', err);
			});
	})
	.catch((err) => {
		console.error('Error during Data Source initialization:', err);
	});

export { app };
