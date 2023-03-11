import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
   @Get()
   getAllUsers(
      @Param('categoryId') categoryId: any,
      @Param('storeId') storeId: any,
   ): string {
      return ` la info de mi tienda ${storeId} que es parte de la categoria ${categoryId}`;
   }
}
