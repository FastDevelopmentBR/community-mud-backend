import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export default () => {
    var databaseOptions: MysqlConnectionOptions = {
        type: "mysql",
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT) || 3306,
        username: process.env.DATABASE_USERNAME || 'root',
        password: process.env.DATABASE_PASSWORD,
        synchronize: (process.env.DATABASE_SYNC == "true") ? true : false || false
    }

    return {
        database: databaseOptions
    }
};