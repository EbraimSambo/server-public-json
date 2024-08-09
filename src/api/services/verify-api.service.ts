import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Api } from "../entities/api.entity";
import { Repository } from "typeorm";

@Injectable()
export class VerifyKeyApiService {
    constructor(
        @InjectRepository(Api)
        private apiRepo:  Repository<Api>,
    ) {}


    async veryFyKeyApi(apiKey: string){
        return await this.apiRepo.findOneOrFail({where:{apiKey}})
    }
}