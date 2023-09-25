import express from 'express';
import { userService } from '../services';
const userRoutes = express.Router();

userRoutes
	.route('/')
	.get(async (req, res) => {
		try {
			const data = await userService.getAllUsers();
			res.status(200).json({ data });
		} catch (err: any) {
			res.status(500).json({ message: err?.message });
		}
	})
	.post(async (req, res) => {
		try {
			const data = await userService.createUser(req.body);
			res.status(201).json({ data });
		} catch (err: any) {
			res.status(500).json({ message: err?.message });
		}
	});

export { userRoutes };
