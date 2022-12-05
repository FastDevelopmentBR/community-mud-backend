import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: {
            origin: [
                'http://localhost:4200',
                'http://api.communitymud.fastdevelopment.com.br',
                'https://api.communitymud.fastdevelopment.com.br'
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
        },
        logger: ['error', 'warn'],
    });
    await app.listen(3000);
}
bootstrap();
