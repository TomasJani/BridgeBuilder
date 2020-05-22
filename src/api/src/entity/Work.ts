import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Change } from "./Change";
import { User } from "./User";

@Entity()
export class Work {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.works)
    author: User;

    @OneToMany(type => Change, change => change.work)
    changes: Change[];

    @Column()
    name: string;

    @Column()
    content: string;

    @Column()
    created: string;
}
