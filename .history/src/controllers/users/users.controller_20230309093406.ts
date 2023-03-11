import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
   @Get()
   getAllUsers() {
      return {
         message: ` Aquí estarían todos los usuarios`,
      };
   }

   @Get(':userId') //users/1 //no hace falta poner el /users
   getUser(@Param('userId') userId: number) {
      return {
         message: ` mi usuario ${userId}`,
      };
   }
}
