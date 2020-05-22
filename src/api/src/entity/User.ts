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

    @ManyToMany(type => Project, project => project.users)
    @JoinTable()
    projects: Project[];

    // TODO: Uncomment after Work entity is implemented
    // @ManyToMany(type => Work, work => work.users)
    // @JoinTable()
    // works: Work[]

    // TODO: Uncomment after Commit entity is implemented
    // @OneToMany(type => Commit, commit => commit.user)
    // commits: Commit[]
}
