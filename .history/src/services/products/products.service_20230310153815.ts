import { Injectable } from '@nestjs/common';
import { Product } from '../../interfaces/products/products.interface';

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
      return this.products.find((product) => product.id === id);
   }

   createProduct(newProduct: Product) {
      this.counter++;
      newProduct.id = this.counter;
      this.products.push(newProduct);
   }

   updateProduct(id: number, updatedProduct: Product) {
      const productIndex = this.products.findIndex(
         (product) => product.id === id,
      );
      this.products[productIndex] = {
         ...this.products[productIndex],
         ...updatedProduct,
      };
   }

   deleteProduct(id: number) {
      const productIndex = this.products.findIndex(
         (product) => product.id === id,
      );
      this.products.splice(productIndex, 1);
   }
}
