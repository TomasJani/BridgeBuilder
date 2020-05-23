import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { Change } from "./Change";
import { Work } from "./Work";
import {Project} from "./Project";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Work, work => work.author)
    works: Work[];

    @OneToMany(() => Change, change => change.author)
    changes: Change[];

    @Column()
    username: string;

    @Column()
    image: string;

    @Column()
    created: string;

    @OneToMany(() => Project, project => project.owner)
    ownProjects: Project[];

    @ManyToMany(()  => Project, project => project.invitedUsers)
    @JoinTable()
    invitedToProjects: Project[];
}
