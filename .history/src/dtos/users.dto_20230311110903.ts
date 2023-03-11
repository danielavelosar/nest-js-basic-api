import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class User {
   @IsNotEmpty()
   @IsString()
   readonly id: number;
   @IsNotEmpty()
   @IsString()
   readonly name: string;
}
