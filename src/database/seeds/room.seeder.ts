import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

import { Room } from '../../rooms/entities/room.entity';

export default class RoomSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository = dataSource.getRepository(Room);
        // await repository.insert([
        //     {
        //         hash: 'ASFDSfdse12',
        //         title: 'Caleb',
        //         description: 'Barrows',
        //     }
        // ]);

        // ---------------------------------------------------

        const userFactory = await factoryManager.get(Room);
        // save 1 factory generated entity, to the database
        // await userFactory.save();   

        // save 5 factory generated entities, to the database
        await userFactory.saveMany(5);
    }
}