import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

console.log(__dirname + '/**/*.entity{.ts,.js}');

const options: DataSourceOptions & SeederOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'communitymud',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}'
    ],

    // #TODO: Remover synchronize true em produção para não perder 
    // informações no banco de dados a cada alteração de model?
    synchronize: true,

    seeds: ['src/database/seeds/**/*{.ts,.js}'],
    factories: ['src/database/factories/**/*{.ts,.js}']
}

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource(options);
            return dataSource.initialize();
        },
    },
];