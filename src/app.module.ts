import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from '@nestjs/config';
import generalConfig from './config/general.config';
import databaseConfig from './config/database.config';

import { AppController } from './app.controller';

import { RoomsModule } from './rooms/rooms.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [generalConfig, databaseConfig]
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('database.host'),
                port: configService.get('database.port'),
                username: configService.get('database.username'),
                password: configService.get('database.password'),
                database: 'communitymud',
                autoLoadEntities: true,
                synchronize: configService.get('database.synchronize'),
                
                // entities: ['src/**/*.entity{.ts,.js}'],
                seeds: ['src/database/seeds/*.seeder{.ts,.js}'],
                factories: ['src/database/factories/*.factory{.ts,.js}']
            })
        }),
        RoomsModule
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule { }
