import { Controller, Get } from '@nestjs/common';
import { UsersServiceService } from './users-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersServiceController {
  constructor(private readonly service: UsersServiceService) {}
}
