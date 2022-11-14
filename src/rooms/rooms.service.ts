import { Injectable, Inject } from '@nestjs/common';

import { Repository } from 'typeorm';
import { Room } from './entities/room.entity';

import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
    constructor(
        @Inject('ROOMS_REPOSITORY')
        private roomsRepository: Repository<Room>,
    ) { }

    create(createRoomDto: CreateRoomDto) {
        return 'This action adds a new room';
    }

    async findAll(): Promise<Room[]> {
        return this.roomsRepository.find();
    }

    findOne(id: number) {
        return `This action returns a #${id} room`;
    }

    update(id: number, updateRoomDto: UpdateRoomDto) {
        return `This action updates a #${id} room`;
    }

    remove(id: number) {
        return `This action removes a #${id} room`;
    }
}
