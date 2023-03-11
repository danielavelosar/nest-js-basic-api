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

   @Post() //casi siempre retorna un json con un post
   createStore(@Body() payload: any): any {
      return {
         message: 'store created',
         payload,
         body: {
            name: 'string',
            description: 'string',
            price: 'number',
         },
      };
   }

   @Put(':storeId')
   updateStore(@Param('storeId') storeId: any, @Body() payload: any) {
      return {
         message: `la tienda ${storeId} fue actualizada`,
         payload,
      };
   }

   @Delete(':storeId')
   deleteStore(@Param('storeId') storeId: any) {
      return {
         message: `la tienda ${storeId} fue eliminada`,
      };
   }
}
