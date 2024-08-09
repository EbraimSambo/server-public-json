import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { ApiResult } from "../types";
import { ReadApiKeyService } from "../services/read-api-key.service";


@Controller('api')
export class ReadApiController{

    constructor(
        private apiKeRead: ReadApiKeyService
    ){}

    @Get('all')
    async create(): Promise<ApiResult[]> {
        return await this.apiKeRead.findAll()
    }
}