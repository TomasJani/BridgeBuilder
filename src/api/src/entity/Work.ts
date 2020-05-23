import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Change } from "./Change";
import { User } from "./User";
import {Project} from "./Project";

@Entity()
export class Work {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()  => User, user => user.works)
    author: User;

    @ManyToOne(()  => Project, project => project.works)
    project: Project;

    @OneToMany(()  => Change, change => change.work)
    changes: Change[];

    @Column()
    name: string;

    @Column()
    content: string;

    @Column()
    created: string;
}
