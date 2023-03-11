import {
   Controller,
   Get,
   Param,
   Post,
   Body,
   Put,
   Delete,
   ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
   constructor(private usersService: UsersService) {} //inyectamos el servicio no se si con readonly o no

   @Get()
   getAllUsers() {
      // return {
      //    message: ` Aquí estarían todos los usuarios`,
      // };
      return this.usersService.findAllUsers();
   }

   @Get(':userId') //users/1 //no hace falta poner el /users
   getUser(@Param('userId', ParseIntPipe) userId: number) {
      // return {
      //    message: ` mi usuario ${userId}`,
      // };
      return this.usersService.findOneUser(userId);
   }

   @Post() //casi siempre retorna un json con un post
   createUser(@Body() payload: any): any {
      // return {
      //    message: 'user created',
      //    payload,
      //    body: {
      //       name: 'string',
      //       description: 'string',
      //       price: 'number',
      //    },
      // };
      return this.usersService.createUser(payload);
   }

   @Put(':userId')
   updateUser(
      @Param('userId', ParseIntPipe) userId: number, //ParseIntPipe es para que el id sea un numero
      @Body() payload: any,
   ) {
      // return {
      //    message: `el usuario ${userId} fue actualizado`,
      //    payload,
      // };
      return this.usersService.updateUser(userId, payload);
   }

   @Delete(':userId', ParseIntPipe)
   deleteUser(@Param('userId') userId: number) {
      // return {
      //    message: `el usuario ${userId} fue eliminado`,
      // };
      return this.usersService.deleteUser(userId);
   }
}
