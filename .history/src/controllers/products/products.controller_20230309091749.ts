import { Controller, Get, Param, Query } from '@nestjs/common';

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
   getProduct(@Param() params: any): string {
      return ` mi producto ${params.productId}`;
   }

   @Get(':productId/info')
   getInfoProduct(@Param('productId') productId: any): string {
      return ` la info de mi producto ${productId}`;
   }
}
