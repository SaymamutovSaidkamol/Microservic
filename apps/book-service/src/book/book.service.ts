import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

const book = [
  { id: 1, name: 'Harry Potr 1' },
  { id: 2, name: 'Harry Potr 2' },
  { id: 3, name: 'Harry Potr 3' },
  { id: 4, name: 'Harry Potr 4' },
];

@Injectable()
export class BookService {
  create(createBookDto: CreateBookDto) {
    book.push(createBookDto);

    return book;
  }

  findAll() {
    return {
      data: book,
    };
  }

  findOne(id: number) {
    let check = book.find((p) => p.id == id);

    return { data: check };
  }

  update(id: number, data: UpdateBookDto) {
    const index = book.findIndex((user) => user.id === id);
    if (index === -1) {
      return { message: 'User not found' };
    }

    book[index] = { ...book[index], ...data };
    return {
      message: `User with id ${id} has been updated`,
      data: book[index],
    };
  }

  remove(id: number) {
    const index = book.findIndex((user) => user.id === id);
    if (index === -1) {
      return { message: 'User not found' };
    }

    const removedUser = book.splice(index, 1);
    return {
      message: `User with id ${id} has been removed`,
      data: removedUser[0],
    };
  }
}
