import { Controller, Get, Param, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  getUser(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;

    // return this.usersService.getHello();
  }

  @Get()
  getusers(): string {
    return this.usersService.getHello();
  }
}
