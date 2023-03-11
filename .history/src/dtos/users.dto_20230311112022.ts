import { IsString, IsNotEmpty } from 'class-validator'; //IsNotUrl me va a servir para validar que el url no sea un url

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
