import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
   @Get()
   getAllUsers(): string {
      return ` Aquí estarían todos los usuarios`;
   }

   @Get(':userId') //users/1 //no hace falta poner el /users
   getUser(@Param(userId) userId: number): string {
      return ` mi usuario ${userId}`;
   }
}
