import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { GlobalExceptionFilter } from 'src/global.exception.filter';

@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomsService: RoomsService) { }

    @Post()
    @UseFilters(new GlobalExceptionFilter())
    create(@Body() createRoomDto: CreateRoomDto) {
        return this.roomsService.create(createRoomDto)
    }

    @Get()
    findAll() {
        return this.roomsService.findAll();
    }

    @Get(':hash')
    findOne(@Param('hash') hash: string) {
        return this.roomsService.findOne(hash);
    }

    @Patch(':hash')
    update(@Param('hash') hash: string, @Body() updateRoomDto: UpdateRoomDto) {
        return this.roomsService.update(hash, updateRoomDto);
    }

    @Delete(':hash')
    remove(@Param('hash') hash: string) {
        return this.roomsService.remove(hash);
    }
}
