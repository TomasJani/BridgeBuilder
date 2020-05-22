import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Work } from "./Work";
import { User } from "./User";

@Entity()
export class Change {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.changes)
    author: User;

    @ManyToOne(type => Work, work => work.changes)
    work: Work;

    // @ManyToOne(type => Project, project => project.changes)
    // project: Project;

    @Column()
    name: string;

    @Column()
    content: string;

    @Column()
    created: string;
}
