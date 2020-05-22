import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne} from "typeorm";
import {User} from "./User";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    created: Date;

    @ManyToOne(type => User, work => work.own_projects)
    owner: User;

    @ManyToMany(type => User, user => user.invited_to_projects)
    invited_users: User[];

    // TODO: Uncomment after Work entity is implemented
    // @OneToMany(type => Work, work => work.project)
    // works: Work[];
}
