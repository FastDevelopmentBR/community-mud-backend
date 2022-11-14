import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
            const options: DataSourceOptions & SeederOptions = {
                type: 'mysql',
                host: configService.get('database.host'),
                port: configService.get('database.port'),
                username: configService.get('database.username'),
                password: configService.get('database.password'),
                database: 'communitymud',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}'
                ],

                // #TODO: Ativar synchronize apenas para gerar seeds no primeiro start do servidor.
                synchronize: false,

                seeds: ['src/database/seeds/*{.ts,.js}'],
                factories: ['src/database/factories/*{.ts,.js}']
            }

            const dataSource = await new DataSource(options).initialize();
            if (options.synchronize) runSeeders(dataSource)
            return dataSource;
        },
    },
];