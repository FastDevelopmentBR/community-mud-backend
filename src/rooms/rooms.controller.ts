import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, HttpException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ErrorResponse } from 'src/common/interfaces/errorResponse.interface';

import { RoomsService } from './rooms.service';

import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Controller('rooms')
@ApiTags('rooms')
@ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
@ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse })
export class RoomsController {
    constructor(private readonly roomsService: RoomsService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Adiciona uma sala' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Created', type: Room })
    @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden', type: ErrorResponse })
    create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
        return this.roomsService.create(createRoomDto)
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Obtém a lista de salas' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: Room, isArray: true })
    findAll() {
        return this.roomsService.findAll()
    }

    @Get(':hash')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Obtém uma sala' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: Room })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found', type: ErrorResponse })
    findOne(@Param('hash') hash: string) {
        return this.roomsService.findOne(hash)
            .then(data => {
                if (!data) throw new HttpException('Não foi encontrada a sala mecionada.', HttpStatus.NOT_FOUND);
                return data
            })
    }

    @Patch(':hash')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Atualiza uma sala' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: Room })
    @ApiResponse({ status: HttpStatus.NOT_MODIFIED, description: 'Not Modified', type: ErrorResponse })
    update(@Param('hash') hash: string, @Body() updateRoomDto: UpdateRoomDto) {
        return this.roomsService.update(hash, updateRoomDto);
    }

    @Delete(':hash')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Remove uma sala' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Ok' })
    remove(@Param('hash') hash: string) {
        return this.roomsService.remove(hash);
    }
}
