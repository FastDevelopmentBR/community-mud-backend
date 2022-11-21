import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

import { Room } from '../../rooms/entities/room.entity';

export default class RoomSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository = dataSource.getRepository(Room);

        // Limpando o repositório antes de inserir dados para evitar duplicatas
        repository.clear();

        // Para definir os dados que serão inseridos no seeder
        // await repository.insert([
        //     {
        //         hash: 'ASFDSfdse12',
        //         title: 'Caleb',
        //         description: 'Barrows',
        //     }
        // ]);

        // Utilizando Factory com o Faker
        const userFactory = await factoryManager.get(Room);
        
        // Para salvar um única entidade com dados fakes
        // await userFactory.save(); 
        
        // Para salvar múltiplas entidades com dados fakes
        await userFactory.saveMany(5); 
    }
}