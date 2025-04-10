import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  id: number;

  @IsString()
  name: string;
}
