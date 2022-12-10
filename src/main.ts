import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as path from "path";

import { GlobalExceptionFilter } from './common/filters/global-exception.filter';

import { AppModule } from './app.module';

const corsConfig = {
    origin: [process.env.API_URL],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: [
        'Accept',
        'Content-Type',
        'Authorization',
    ]
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: corsConfig,
        logger: ['error', 'warn'],
    });

    app.useGlobalFilters(new GlobalExceptionFilter())

    // Public Assets Folder Access
    app.use('/assets', express.static(path.join(__dirname, '/assets')));

    await app.listen(process.env.PORT, () => {
        console.log('|-----------------------------------------------------------|')
        console.log('|------------------- CommunityMUD Server -------------------|')
        console.log('|-----------------------------------------------------------|')
        console.log(`Server listening -> ${process.env.API_URL}`);
    });
}
bootstrap();
