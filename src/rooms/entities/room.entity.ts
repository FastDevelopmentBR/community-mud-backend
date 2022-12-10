import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class Room {
    @ApiPropertyOptional({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiPropertyOptional({ example: 'b56250a9-33c7-42d1-a58f-1bec26d9b1f0' })
    @Column({
        length: 36,
        generated: "uuid"
    })
    hash: string;

    @ApiProperty({ example: 'Praça Central - Fonte' })
    @Column({
        length: 250
    })
    title: string;

    @ApiProperty({ example: 'Uma enorme fonte jorra água no meio da praça, sua estonteante beleza parece ter transformado essa praça anteriormente mórbida em belo local para confraternizações. A praça não é tão grande, você consegue ver grandes portões abertos em todas as direções (Norte, Sul, Leste, Oeste). É possível ver uma enorme igreja no portão norte.' })
    @Column({
        type: 'text'
    })
    description: string;
}