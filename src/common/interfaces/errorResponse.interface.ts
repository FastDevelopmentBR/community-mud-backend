import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
    @ApiProperty({ description: 'código de status do erro' })
    statusCode: number;

    @ApiProperty({ description: 'mensagem de erro' })
    message: string;
}