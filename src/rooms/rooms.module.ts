import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { roomsProviders } from './rooms.providers';
import { RoomsService } from './rooms.service';

import { RoomsController } from './rooms.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [RoomsController],
    providers: [
        ...roomsProviders,
        RoomsService
    ]
})
export class RoomsModule { }
