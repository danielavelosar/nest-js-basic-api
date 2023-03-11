import { Controller, Get, Param, Query, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
   @Get()
   getProducts(
      @Query('query') query: any,
      @Query('limit') limit = 100,
      @Query('offset') offset = 10,
   ): string {
      return ` mi producto ${query} y mi limite es ${limit} y mi offset es ${offset}`;
   }

   @Get('filter')
   getProductFilter(): string {
      return ` soy un filtro`;
   }

   @Get(':productId') //stores/1 //no hace falta poner el /stores
   getProduct(@Param() params: any) {
      return
      { message: ` mi producto ${params.productId}`
      
   }

   @Get(':productId/info')
   getInfoProduct(@Param('productId') productId: any) {
      return {
         message: ` la info de mi producto ${productId}`,
      };
   }

   @Post() //casi siempre retorna un json con un post
   createProduct(): any {
      return {
         message: 'product created',
         body: {
            id: 1,
            name: 'product 1',
            price: 100,
         },
      };
   }
}
