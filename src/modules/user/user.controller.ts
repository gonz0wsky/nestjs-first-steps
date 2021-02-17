import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async allUser() {
    return await this.userService.getUsers({ take: 10 });
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const parsed = parseInt(id);
    return await this.userService.getUser({ id: parsed });
  }

  @Post()
  async createUser(@Body() user: User) {
    return this.userService.createUser(user);
  }

  @Put()
  async updateUser(@Body() user: User) {
    return this.userService.updateUser(user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const parsed = parseInt(id);
    return await this.userService.deleteUser({ id: parsed });
  }
}
