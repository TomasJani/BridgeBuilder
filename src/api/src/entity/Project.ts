import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne} from "typeorm";
import {User} from "./User";
import {Work} from "./Work";
import {Change} from "./Change";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    created: string;

    @ManyToOne(type => User, user => user.ownProjects)
    owner: User;

    @ManyToMany(type => User, user => user.invitedToProjects)
    invitedUsers: User[];

    @OneToMany(type => Work, work => work.project)
    works: Work[];

    @OneToMany(type => Change, change => change.project)
    changes: Change[];
}
