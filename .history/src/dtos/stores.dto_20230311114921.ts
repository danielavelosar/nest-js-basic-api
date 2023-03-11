import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateStoreDTO {
   id: number;
   @IsString()
   readonly name: string;
   @IsString()
   readonly description: string;
}

export class UpdateStoreDTO extends PartialType(CreateStoreDTO) {}
