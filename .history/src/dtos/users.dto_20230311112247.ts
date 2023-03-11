import { IsString, IsNotEmpty, IsPositive } from 'class-validator'; //IsNotUrl me va a servir para validar que el url no sea un url

export class CreateUserDTO {
   @IsNotEmpty()
   @IsPositive()
   id: number;
   @IsString()
   readonly name: string;
}

export class UpdateUserDTO {
   @IsPositive()
   readonly id?: number; // ? means optional
   @IsString()
   readonly name?: string;
}
