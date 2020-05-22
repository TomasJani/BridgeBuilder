import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import {User} from "./User";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    created: Date;

    @ManyToMany(type => User, user => user.projects)
    users: User[];

    // TODO: Uncomment after Work entity is implemented
    // @OneToMany(type => Work, work => work.project)
    // works: Work[];
}
