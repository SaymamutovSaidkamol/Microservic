import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}
  create(createUserDto: CreateUserDto) {
    return this.client.send('createUser', createUserDto);
  }

  findAll() {
    return this.client.send('findAllUsers', {});
  }

  findOne(id: number) {
    return this.client.send('findOneUser', id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.client.send('updateUser', { id, ...updateUserDto });
  }

  remove(id: number) {
    return this.client.send('removeUser', id);

  }
}
