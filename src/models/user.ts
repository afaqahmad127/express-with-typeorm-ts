import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BeforeInsert,
	DeleteDateColumn,
	UpdateDateColumn,
	CreateDateColumn,
	OneToMany,
} from 'typeorm';
import { Stream } from './stream';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	first_name: string;

	@Column()
	last_name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@OneToMany(() => Stream, (stream) => stream.user)
	streams: Stream[];

	@DeleteDateColumn()
	deleted_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@CreateDateColumn()
	created_at: Date;
}
