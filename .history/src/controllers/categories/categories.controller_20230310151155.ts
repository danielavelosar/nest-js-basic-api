import {
   Controller,
   Get,
   Param,
   Post,
   Body,
   Put,
   Delete,
} from '@nestjs/common';
import { CategoriesService } from '../../services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
   constructor(private categoriesService: CategoriesService) {} //inyectamos el servicio no se si con readonly o no

   @Get(':categoryId/stores/:storeId')
   getCategories(
      @Param('categoryId') categoryId: any,
      @Param('storeId') storeId: any,
   ) {
      return {
         message: ` la info de mi tienda ${storeId} que es parte de la categoria ${categoryId}`,
      };
      //TODO: implementar el servicio
   }

   @Post() //casi siempre retorna un json con un post
   createCategory(@Body() payload: any): any {
      // return {
      //    message: 'category created',
      //    payload,
      //    body: {
      //       name: 'string',
      //       description: 'string',
      //    },
      // };
      return this.categoriesService.createCategory(payload);
   }

   @Put(':categoryId')
   updatecategory(@Param('categoryId') categoryId: any, @Body() payload: any) {
      // return {
      //    message: `la categoria ${categoryId} fue actualizada`,
      //    payload,
      // };
      return this.categoriesService.updateCategory(categoryId, payload);
   }

   @Delete(':categoryId')
   deleteCategory(@Param('categoryId') categoryId: any) {
      // return {
      //    message: `la categoria ${categoryId} fue eliminada`,
      // };
      return this.categoriesService.deleteCategory(categoryId);
   }
}
