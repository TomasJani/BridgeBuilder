import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Work } from "./Work";
import { User } from "./User";
import {Project} from "./Project";

@Entity()
export class Change {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.changes)
    author: User;

    @ManyToOne(() => Work, work => work.changes)
    work: Work;

    @ManyToOne(() => Project, project => project.changes)
    project: Project;

    @Column()
    name: string;

    @Column()
    content: string;

    @Column()
    created: string;
}
