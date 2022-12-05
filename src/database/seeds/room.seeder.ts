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
        await repository.insert([
            {
                title: 'Praça Central - Fonte',
                description: `Uma enorme fonte jorra água no meio da praça, sua estonteante beleza parece ter transformado essa praça anteriormente mórbida em belo local para confraternizações. A praça não é tão grande, você consegue ver grandes portões abertos em todas as direções (Norte, Sul, Leste, Oeste). É possível ver uma enorme igreja no portão norte.`,
            },
            {
                title: 'Praça Central - Portão Norte',
                description: `Há uma enorme igreja de estilo gótico a frente, é possível ver daqui gárgulas amedrontadores...  Sinceramente, se eu fosse você eu acho que não iria lá.`,
            },
            {
                title: 'Entrada da Igreja',
                description: `De longe não é possível ter noção do quão grandiosa é essa igreja. Belas colunas, enegrecidas, provavelmente feitas de ardósia, gárgulas tão horrendos que fica difícil saber qual o mais grotesco. Dizem que os gárgulas existem para manter o mau a ficar do lado de fora... Eu não sei você, mas eu agradeço que a porta da igreja esteja fechada... Só ssim para manter você e sua curiosidade do lado de fora.`,
            },
            {
                title: 'Praça Central - Portão Oeste',
                description: `A avenida principal da cidade corta a praça de leste a oeste. Essa saída parece ser menos comercial, não é possível identificar muitas lojas olhando daqui.`,
            },
            {
                title: 'Praça Central - Portão Leste',
                description: `A avenida principal da cidade corta a praça de leste a oeste. Ah... essa multidão, esse cheiro...  uma mistura de ouro e sangue... Eu gosto desse cheiro, não sei você. Eu tentaria ganhar algum dinheiro com carteado e queda de braço, mas eu dúvido que você tenha a mesma sorte.`,
            },
            {
                title: 'Praça Central - Portão Sul',
                description: `Eu sinceramente acho que deveriam trancar esse portão, aqui só leva para sarjeta e perdição, passe livre para a escória da cidade. Trancar esse portão certamente diminuiria a criminalidade. Se eles querem vir a praça que dêem a volta por fora dele e utilizem outro portão.`,
            },
        ]);

        // Utilizando Factory com o Faker
        // const userFactory = await factoryManager.get(Room);

        // Para salvar um única entidade com dados fakes
        // await userFactory.save(); 

        // Para salvar múltiplas entidades com dados fakes
        // await userFactory.saveMany(5); 
    }
}