import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CreateApiKeyService } from "../services/create-api-key.service";
import { ApiResult } from "../types";


@Controller('api')
export class CreateApiController{

    constructor(
        private apiKeyCreate: CreateApiKeyService
    ){}

    @Post('create')
    async create(): Promise<ApiResult> {
        return this.apiKeyCreate.create()
    }
}