import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';



@Injectable()
export class BookService {
  constructor(@Inject('BOOK_SERVICE') private client: ClientProxy) {}
  create(createBookDto: CreateBookDto) {
    return this.client.send('createBook', createBookDto);
  }

  findAll() {
    return this.client.send('findAllBook', {});
  }

  findOne(id: number) {
    return this.client.send('findOneBook', id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.client.send('updateBook', { id, ...updateBookDto });
  }

  remove(id: number) {
    return this.client.send('removeBook', id);
  }
}
