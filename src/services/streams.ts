import { getRepository } from 'typeorm';
import { myDataSource } from '../config/db';
import { User } from '../models/user';
import { userService } from './user';
import { Stream } from '../models/stream';

const model = myDataSource.getRepository(Stream);
export const streamService = {
	async getAll() {
		try {
			return await model.find();
		} catch (err: any) {
			throw new Error(err?.message || 'Error while getting all users');
		}
	},
	async getById(id: number) {
		return await model.findOne({ where: { id } });
	},
	async create(data: User & Stream) {
		const streamUser = await userService.getUserById(data.id);
		return await model.save({
			...data,
			user: streamUser!,
		});
	},
	async update(id: number, user: User) {
		return await model.update(id, user);
	},
	async delete(id: number) {
		return await model.delete(id);
	},
};
