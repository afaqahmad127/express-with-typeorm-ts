import express from 'express';
import { streamService } from '../services';
const streamRoutes = express.Router();

streamRoutes
	.route('/')
	.get(async (req, res) => {
		try {
			const data = await streamService.getAll();
			res.status(200).json({ data });
		} catch (err: any) {
			res.status(500).json({ message: err?.message });
		}
	})
	.post(async (req, res) => {
		try {
			const data = await streamService.create(req.body);
			res.status(201).json({ data });
		} catch (err: any) {
			res.status(500).json({ message: err?.message });
		}
	});

export { streamRoutes };
