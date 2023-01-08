import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { randomUUID } from "crypto";
import { Repository } from "typeorm";
import { UsersDto } from "./users.dto";
import { UsersEntity } from "./users.entity";

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(UsersEntity)
        private userEntity: Repository<UsersEntity>,
    ){}

    async getAllUsers(): Promise<UsersEntity[]>{
        return await this.userEntity.find();
    }

    async getUserById(id: string): Promise<UsersEntity>{
        return await this.userEntity.findOneBy({ id });
    }

    async createUser(user: UsersDto): Promise<UsersEntity>{
        return this.userEntity.save(user)
    }

    async updateUser(id: string, user: UsersDto): Promise<UsersEntity>{
        await this.userEntity.update(id, user);
        return this.userEntity.findOneBy({ id });
    }

    async removeUser(id: string): Promise<void>{
        await this.userEntity.delete(id);
    }

}