import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';
import * as express from 'express';
import * as path from "path";

import { GlobalExceptionFilter } from './common/filters/global-exception.filter';

import { AppModule } from './app.module';
import { RoomsModule } from './rooms/rooms.module';

const corsConfig = {
    origin: [
        process.env.GAME_URL
    ],
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

    // Swagger Configuration
    const swaggerDocumentBuilderConfig = new DocumentBuilder()
        .setTitle('CommunityMUD API')
        .setDescription('REST API para administração de objetos em servidores CommunityMUD.')
        .setVersion('1.0')
        .setExternalDoc("ER Diagram", "https://app.diagrams.net/#G1qKXAbUing9eQFY5bJQcWXYqltbXcc75q")
        .setContact("Pablo Pereira", "https://github.com/FastDevelopmentBR/community-mud-backend", "pablopereira27@gmail.com")
        .setLicense("GPL-3.0", "https://www.gnu.org/licenses/quick-guide-gplv3.html.en")
        .build();
    const swaggerDocument = SwaggerModule.createDocument(app, swaggerDocumentBuilderConfig, {
        include: [RoomsModule]
    });

    const swaggerCustomOptions: SwaggerCustomOptions = {
        customSiteTitle: 'CommunityMUD API',
        customfavIcon: './favicon.ico'
    }

    SwaggerModule.setup('api', app, swaggerDocument, swaggerCustomOptions);

    // Public Assets Folder Access
    app.use('/assets', express.static(path.join(__dirname, '/assets')));

    await app.listen(process.env.PORT, () => {
        console.log('|-----------------------------------------------------------|')
        console.log('|------------------- CommunityMUD Server -------------------|')
        console.log('|-----------------------------------------------------------|')
        console.log(`Server listening -> ${process.env.API_URL}`);
        console.log(`Swagger Documentation -> ${process.env.API_URL}/api`);
    });
}
bootstrap();
