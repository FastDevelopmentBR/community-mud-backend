import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    constructor() { }

    @Get()
    getHello(): string {
        return 'Esse é o backend de um servidor que utiliza o CommunityMUD, se quiser saber sobre o projeto acesse https://github.com/FastDevelopmentBR/community-mud-backend'
    }

}
