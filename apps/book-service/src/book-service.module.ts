import { Module } from '@nestjs/common';
import { BookServiceController } from './book-service.controller';
import { BookServiceService } from './book-service.service';
import { BookModule } from './book/book.module';

@Module({
  imports: [BookModule],
  controllers: [BookServiceController],
  providers: [BookServiceService],
})
export class BookServiceModule {}
