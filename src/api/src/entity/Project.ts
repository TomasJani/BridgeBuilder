import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Work} from "./Work";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    created: string;

    @ManyToOne(() => User, user => user.ownProjects)
    owner: User;

    @ManyToMany(() => User, user => user.invitedToProjects)
    invitedUsers: User[];

    @OneToMany(() => Work, work => work.project)
    works: Work[];
}
