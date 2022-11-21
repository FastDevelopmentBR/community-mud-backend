require('dotenv').config()
import { setDataSource } from 'typeorm-extension';
import { DataSource, DataSourceOptions } from 'typeorm';

const options: DataSourceOptions = {
    type: "mysql",
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(String(process.env.DATABASE_PORT)) || 3306,
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_PASSWORD,
    database: "communitymud",
    entities: ["src/**/entities/*.entity{.ts,.js}"]
};

const dataSource = new DataSource(options);
setDataSource(dataSource);