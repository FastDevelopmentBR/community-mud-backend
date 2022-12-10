import { Controller, Get, Post, Res } from '@nestjs/common';

@Controller()
export class AppController {
    constructor() { }

    @Get()
    getHello(): string {
        return 'Esse é o backend de um servidor que utiliza o CommunityMUD, se quiser saber sobre o projeto acesse https://github.com/FastDevelopmentBR/community-mud-backend'
    }

    @Get('/favicon.ico')
    async getFavIcon(@Res() res: any): Promise<any> {
        res.sendFile('favicon.ico', { root: __dirname });
    }

    @Post('/login')
    login(): boolean {
        return true;
    }
}
