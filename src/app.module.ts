import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RoomsModule } from './rooms/rooms.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.development', '.env.production'],
            isGlobal: true,
            load: [databaseConfig]
        }),
        RoomsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
