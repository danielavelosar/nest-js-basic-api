import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('stores')
export class StoresController {
   @Get()
   getStores(
      @Query('query') query: any,
      @Query('limit') limit = 100,
      @Query('offset') offset = 10,
   ) {
      return {
         message: ` mi tienda ${query} y mi limite es ${limit} y mi offset es ${offset}`,
      };
   }

   @Get(':storeId') //stores/1 //no hace falta poner el /stores
   getStore(@Param() params: any) {
      return {
         message: ` mi tienda ${params.storeId}`,
      };
   }

   @Get(':storeId/info')
   getInfoStore(@Param('storeId') storeId: any) {
      return {
         message: ` la info de mi tienda ${storeId}`,
      };
   }
}
