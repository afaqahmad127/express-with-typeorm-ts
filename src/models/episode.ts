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
import { File } from './file';

@Entity()
export class Episode {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@OneToMany(() => Stream, (stream) => stream.episode)
	streams: [];

	@ManyToOne(() => Season, (season) => season.episodes)
	season: Season;

	@ManyToOne(() => File, (file) => file.episodes)
	file: File;

	@DeleteDateColumn()
	deleted_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@CreateDateColumn()
	created_at: Date;
}
