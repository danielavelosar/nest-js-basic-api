import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
   @IsNotEmpty()
   id: number;
   @IsString()
   readonly name: string;
}

export class UpdateUserDTO {
   readonly id?: number; // ? means optional
   @IsString()
   readonly name?: string;
}
