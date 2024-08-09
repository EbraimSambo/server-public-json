import { Inject, Injectable } from "@nestjs/common";
import { ApiResult } from "../types";
import { IApiRepository } from "../interfaces/api-interface";


@Injectable()
export class CreateApiKeyService{

    constructor(
        @Inject('IApiRepository')
        private apiRepo: IApiRepository,
    ){}

    async create(ip?: string | null): Promise<ApiResult> {
        return await this.apiRepo.create(ip)
    }
    
}