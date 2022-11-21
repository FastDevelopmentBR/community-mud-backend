import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { Room } from './entities/room.entity';

import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoomsService {

    constructor(
        @InjectRepository(Room)
        private roomRepository: Repository<Room>,
    ) { }

    create(createRoomDto: CreateRoomDto) {
        return 'This action adds a new room';
    }

    findAll(): Promise<Room[]> {
        return this.roomRepository.find();
    }

    findOne(id: number) {
        return this.roomRepository.findOneBy({ id });
    }

    update(id: number, updateRoomDto: UpdateRoomDto) {
        return `This action updates a #${id} room`;
    }

    remove(id: number) {
        return `This action removes a #${id} room`;
    }
}
