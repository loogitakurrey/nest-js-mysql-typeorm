import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersDto } from "./users.dto";
import { UsersEntity } from "./users.entity";
import { UsersService } from "./users.service";

@Controller('user')
export class UsersController{
    constructor(
        private usersService: UsersService
    ){}

    @Get()
    async getAllUsers(): Promise<UsersEntity[]>{
        return await this.usersService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<UsersEntity>{
        return await this.usersService.getUserById(id);
    }

    @Post()
    async createUser(@Body() users: UsersDto): Promise<UsersEntity>{
        return await this.usersService.createUser(users);
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() users: UsersDto
    ): Promise<UsersEntity>{
        return await this.usersService.updateUser(id, users);
    }

    @Delete(':id')
    async deleteUser(
        @Param('id') id: string,
    ): Promise<void>{
        return await this.usersService.removeUser(id);
    }
}
