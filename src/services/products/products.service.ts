import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../interfaces/products/products.interface';
import { CreateProductDTO, UpdateProductDTO } from '../../dtos/products.dto';

@Injectable()
export class ProductsService {
   private counter = 1;
   private products: Product[] = [
      {
         id: 1,
         name: 'product 1',
         description: 'description 1',
         price: 100,
         stock: 10,
         image: 'image 1',
      },
   ];

   findAllProducts() {
      return this.products;
   }

   findOneProduct(id: number) {
      if (!this.products.find((product) => product.id === id))
         throw new NotFoundException(`Product ${id} not found`);
      return this.products.find((product) => product.id === id);
   }

   createProduct(newProduct: CreateProductDTO) {
      this.counter++;
      newProduct.id = this.counter;
      this.products.push(newProduct);
      return this.products[this.products.length - 1];
   }

   updateProduct(id: number, updatedProduct: UpdateProductDTO) {
      const productIndex = this.products.findIndex(
         (product) => product.id === id,
      );
      if (!this.products[productIndex])
         throw new NotFoundException(`Product ${id} not found`);
      this.products[productIndex] = {
         ...this.products[productIndex],
         ...updatedProduct,
      };
      return this.products[productIndex];
   }

   deleteProduct(id: number) {
      const productIndex = this.products.findIndex(
         (product) => product.id === id,
      );
      if (!this.products[productIndex])
         throw new NotFoundException(`Product ${id} not found`);
      this.products.splice(productIndex, 1);
      return true;
   }
}
