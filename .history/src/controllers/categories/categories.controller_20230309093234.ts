import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
   @Get(':categoryId/stores/:storeId')
   getCategories(
      @Param('categoryId') categoryId: any,
      @Param('storeId') storeId: any,
   ) {
      return {
         message: ` la info de mi tienda ${storeId} que es parte de la categoria ${categoryId}`,
      };
   }
}
