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

    @ManyToOne(()  => User, user => user.ownProjects)
    owner: User;

    @ManyToMany(()  => User, user => user.invitedToProjects)
    invitedUsers: User[];

    @OneToMany(()  => Work, work => work.project)
    works: Work[];

    @OneToMany(()  => Change, change => change.project)
    changes: Change[];
}
