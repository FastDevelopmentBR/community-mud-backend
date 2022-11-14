import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 36,
        generated: "uuid"
    })
    hash: string;

    @Column({
        length: 250
    })
    title: string;

    @Column({
        type: 'text',
        nullable: true
    })
    description: string;
}