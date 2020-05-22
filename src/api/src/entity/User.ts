import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Change } from "./Change";
import { Work } from "./Work";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Work, work => work.author)
    works: Work[];

    @OneToMany(type => Change, change => change.author)
    changes: Change[];

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
