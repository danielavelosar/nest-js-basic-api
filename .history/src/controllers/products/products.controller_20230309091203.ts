import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
   @Get()
   getStores(
      @Query('query') query: any,
      @Query('limit') limit = 100,
      @Query('offset') offset = 10,
   ): string {
      return ` mi producto ${query} y mi limite es ${limit} y mi offset es ${offset}`;
   }

   @Get(':storeId') //stores/1 //no hace falta poner el /stores
   getStore(@Param() params: any): string {
      return ` mi tienda ${params.storeId}`;
   }

   @Get(':storeId/info')
   getInfoStore(@Param('storeId') storeId: any): string {
      return ` la info de mi tienda ${storeId}`;
   }
}
