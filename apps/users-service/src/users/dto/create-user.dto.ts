import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    id: number

    @IsString()
    name: string

    @IsString()
    age: number
}
