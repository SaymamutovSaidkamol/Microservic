import { Controller } from '@nestjs/common';
import { UsersServiceService } from './users-service.service';

@Controller()
export class UsersServiceController {
  constructor(private readonly service: UsersServiceService) {}
}
