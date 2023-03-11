import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
   @Get('categories/:categoryId/stores/:storeId')
   getCategories(
      @Param('categoryId') categoryId: any,
      @Param('storeId') storeId: any,
   ): string {
      return ` la info de mi tienda ${storeId} que es parte de la categoria ${categoryId}`;
   }
}
