import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BeforeInsert,
	DeleteDateColumn,
	UpdateDateColumn,
	CreateDateColumn,
	OneToMany,
	ManyToOne,
} from 'typeorm';
import { Stream } from './stream';
import { Episode } from './episode';

@Entity()
export class Season {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@ManyToOne(() => Season, (season) => season.episodes)
	episodes: Episode[];

	@DeleteDateColumn()
	deleted_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@CreateDateColumn()
	created_at: Date;
}
