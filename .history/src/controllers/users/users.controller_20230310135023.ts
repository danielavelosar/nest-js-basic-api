import { Controller, Get, Param, Post, Body } from '@nestjs/common';

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

   @Post() //casi siempre retorna un json con un post
   createUser(@Body() payload: any): any {
      return {
         message: 'product created',
         payload,
         body: {
            name: 'string',
            description: 'string',
            price: 'number',
         },
      };
   }
}
