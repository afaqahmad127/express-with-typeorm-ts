import { getRepository } from 'typeorm';
import { myDataSource } from '../config/db';
import { User } from '../models/user';

const model = myDataSource.getRepository(User);
export const userService = {
	async getAllUsers() {
		try {
			return await model.find({
				relations: {
					streams: true,
				},
			});
		} catch (err: any) {
			throw new Error(err?.message || 'Error while getting all users');
		}
	},
	async getUserById(id: number) {
		return await model.findOne({ where: { id } });
	},
	async createUser(user: User) {
		return await model.save(user);
	},
	async updateUser(id: number, user: User) {
		return await model.update(id, user);
	},
	async deleteUser(id: number) {
		return await model.delete(id);
	},
};
