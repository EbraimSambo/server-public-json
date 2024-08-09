import { Repository } from "typeorm";
import { ApiResult } from "../types";
import { Api } from "../entities/api.entity";
import { InjectRepository } from "@nestjs/typeorm";
import {v4 as uuid} from 'uuid'
import { IApiRepository } from "../interfaces/api-interface";


export class ApiKeyRepository implements IApiRepository{

    constructor(
        @InjectRepository(Api)
        private readonly typeOrm: Repository<Api>
    ){}

    async create(ip: string): Promise<ApiResult> {

        const ipReceptor = ip || null
        const expiration = 24 * 60 * 60
        return this.typeOrm.save({
            apiKey: uuid(),
            ip: ipReceptor,
           expiration: expiration 
        }) 
    }

    async findKeyApi(apiKey: string): Promise<ApiResult> {
        return this.typeOrm.findOneOrFail({where:{apiKey}})
    }

    async findAllKeyApi(): Promise<ApiResult[]> {
        return await this.typeOrm.find()
    }
}