import { NestFactory } from '@nestjs/core';
import { BookServiceModule } from './book-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(BookServiceModule, {
      transport: Transport.TCP,
      options: {
        port: 3002
      }
    });
    await app.listen();
}
bootstrap();
