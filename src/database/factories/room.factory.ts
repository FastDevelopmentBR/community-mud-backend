import { setSeederFactory } from 'typeorm-extension';
import { Room } from '../../rooms/entities/room.entity';

export default setSeederFactory(Room, (faker) => {
    const room = new Room();
    room.hash = faker.random.alpha(12);
    room.title = faker.lorem.words(5);
    room.description = faker.lorem.paragraph();

    return room;
})