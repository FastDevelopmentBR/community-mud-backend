import { DataSource } from 'typeorm';
import { Room } from './entities/room.entity';

export const roomsProviders = [
    {
        provide: 'ROOMS_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Room),
        inject: ['DATA_SOURCE'],
    },
];