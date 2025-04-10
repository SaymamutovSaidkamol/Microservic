import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const users = [
  { id: 1, name: 'Alex', age: 18 },
  { id: 2, name: 'Joni', age: 19 },
  { id: 3, name: 'Jon', age: 20 },
  { id: 4, name: 'Karl', age: 21 },
];
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    users.push(createUserDto);

    return {
      message: 'New user has been added',
      data: users,
    };
  }

  findAll() {
    return {
      data: users,
    };
  }

  findOne(id: number) {
    let check = users.find((p) => p.id == id);

    return { data: check };
  }

  update(id: number, data: UpdateUserDto) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      return { message: 'User not found' };
    }

    users[index] = { ...users[index], ...data };
    return {
      message: `User with id ${id} has been updated`,
      data: users[index],
    };
  }

  remove(id: number) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      return { message: 'User not found' };
    }

    const removedUser = users.splice(index, 1);
    return {
      message: `User with id ${id} has been removed`,
      data: removedUser[0],
    };
  }
}
