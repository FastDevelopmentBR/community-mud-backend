import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Room } from './entities/room.entity';

import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {

    constructor(
        @InjectRepository(Room)
        private roomRepository: Repository<Room>,
    ) { }

    create(createRoomDto: CreateRoomDto): Promise<Room> {
        return this.roomRepository.save(createRoomDto)
    }

    findAll(): Promise<Room[]> {
        return this.roomRepository.find();
    }

    findOne(hash: string): Promise<Room> {
        return this.roomRepository.findOneBy({ hash });
    }

    update(hash: string, updateRoomDto: UpdateRoomDto): Promise<any> {
        return this.roomRepository.update({ hash }, updateRoomDto);
    }

    remove(hash: string): Promise<any> {
        return this.roomRepository.delete({ hash });
    }
}
