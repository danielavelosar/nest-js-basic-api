import {
   Controller,
   Get,
   Param,
   Query,
   Post,
   Body,
   Put,
   Delete,
} from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
   constructor(private productsService: ProductsService) {} //inyectamos el servicio no se si con readonly o no

   @Get()
   getProducts(
      @Query('query') query: any,
      @Query('limit') limit = 100,
      @Query('offset') offset = 10,
   ) {
      // return {
      //    message: ` mi producto ${query} y mi limite es ${limit} y mi offset es ${offset}`,
      // };
      return this.productsService.findAllProducts();
      //TODO: implementar el servicio con query, limit y offset
   }

   @Get('filter')
   getProductFilter() {
      return {
         message: ` soy un filtro`,
      };
   }

   @Get(':productId') //stores/1 //no hace falta poner el /stores
   getProduct(@Param() params: any) {
      return {
         message: ` mi producto ${params.productId}`,
      };
   }

   @Get(':productId/info')
   getInfoProduct(@Param('productId') productId: any) {
      return {
         message: ` la info de mi producto ${productId}`,
      };
   }

   @Post() //casi siempre retorna un json con un post
   createProduct(@Body() payload: any): any {
      return {
         message: 'product created',
         payload,
         body: {
            name: 'string',
            description: 'string',
            price: 'number',
         },
      };
   }

   @Put(':productId')
   updateProduct(@Param('productId') productId: any, @Body() payload: any) {
      return {
         message: `el producto ${productId} fue actualizado`,
         payload,
      };
   }

   @Delete(':productId')
   deleteProduct(@Param('productId') productId: any) {
      return {
         message: `el producto ${productId} fue eliminado`,
      };
   }
}
