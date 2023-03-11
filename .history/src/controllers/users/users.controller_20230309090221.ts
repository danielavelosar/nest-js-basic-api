import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
   @Get()
   getAllUsers(): string {
      return ` Aquí estarían todos los usuarios`;
   }

   @Get(':userId') //users/1 //no hace falta poner el /users
   getUser(@Param() params: any): string {
      return ` mi usuario ${params.userId}`;
   }
}
