import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'typeorm',
	synchronize: true,
	logging: true,
	entities: ['src/models/*.ts'],
	subscribers: [],
	migrations: [],
});
