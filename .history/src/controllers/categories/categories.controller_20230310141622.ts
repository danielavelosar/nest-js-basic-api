import {
   Controller,
   Get,
   Param,
   Post,
   Body,
   Put,
   Delete,
} from '@nestjs/common';

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

   @Post() //casi siempre retorna un json con un post
   createCategory(@Body() payload: any): any {
      return {
         message: 'category created',
         payload,
         body: {
            name: 'string',
            description: 'string',
         },
      };
   }

   @Put(':categoryId')
   updatecategory(@Param('categoryId') categoryId: any, @Body() payload: any) {
      return {
         message: `la categoria ${categoryId} fue actualizada`,
         payload,
      };
   }

   @Delete(':categoryId')
   deleteCategory(@Param('categoryId') categoryId: any) {
      return {
         message: `la categoria ${categoryId} fue eliminada`,
      };
   }
}
