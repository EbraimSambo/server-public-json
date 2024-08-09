import { Inject, Injectable } from "@nestjs/common";
import { ApiResult } from "../types";
import { IApiRepository } from "../interfaces/api-interface";


@Injectable()
export class ReadApiKeyService{

    constructor(
        @Inject('IApiRepository')
        private apiRepo: IApiRepository,
    ){}

    async findAll(): Promise<ApiResult[]> {
        return await this.apiRepo.findAllKeyApi()
    }
    
}