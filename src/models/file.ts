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
import { Season } from './season';
import { Episode } from './episode';

@Entity()
export class File {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	original_name: string;

	@Column()
	current_name: string;

	@Column()
	type: string;

	@Column()
	path: string;

	@Column()
	size: string;

	@OneToMany(() => Episode, (episode) => episode.file)
	episodes: Episode[];

	@DeleteDateColumn()
	deleted_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@CreateDateColumn()
	created_at: Date;
}
