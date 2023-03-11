import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDTO {
   id: number;
   @IsString()
   readonly name: string;
   @IsString()
   readonly description: string;
   @IsNumber()
   readonly price: number;
   @IsNumber()
   readonly stock: number;
   @IsUrl()
   readonly image: string;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}
