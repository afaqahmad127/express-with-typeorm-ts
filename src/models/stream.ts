import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BeforeInsert,
	DeleteDateColumn,
	UpdateDateColumn,
	CreateDateColumn,
	ManyToOne,
} from 'typeorm';
import { User } from './user';
import { Episode } from './episode';

@Entity()
export class Stream {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	time: string;

	@ManyToOne(() => User, (user) => user.streams)
	user: User;

	@ManyToOne(() => Episode, (episode) => episode.streams)
	episode: Episode;

	@DeleteDateColumn()
	deleted_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@CreateDateColumn()
	created_at: Date;
}
