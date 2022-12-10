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

    await app.listen(process.env.PORT, () => {
        console.log('|-----------------------------------------------------------|')
        console.log('|------------------- CommunityMUD Server -------------------|')
        console.log('|-----------------------------------------------------------|')
        console.log(`Server listening -> ${process.env.API_URL}`);
    });
}
bootstrap();
