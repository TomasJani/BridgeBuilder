import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { Change } from "./Change";
import { Work } from "./Work";
import {Project} from "./Project";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Work, work => work.author)
    works: Work[];

    @OneToMany(type => Change, change => change.author)
    changes: Change[];

    @Column()
    username: string;

    @Column()
    image: string;

    @Column()
    created: Date;

    @OneToMany(type => Project, project => project.owner)
    own_projects: Project[];

    @ManyToMany(type => Project, project => project.invited_users)
    @JoinTable()
    invited_to_projects: Project[];

    // TODO: Uncomment after Work entity is implemented
    // @ManyToMany(type => Work, work => work.users)
    // @JoinTable()
    // works: Work[]

    // TODO: Uncomment after Change entity is implemented
    // @OneToMany(type => Change, change => change.user)
    // changes: Change[]
}
