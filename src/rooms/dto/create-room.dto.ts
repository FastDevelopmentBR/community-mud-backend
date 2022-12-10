import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;
}
