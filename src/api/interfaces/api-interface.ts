import { ApiResult } from "../types";


export interface IApiRepository{
    create(ip?: string): Promise<ApiResult>
    findKeyApi(apiKey: string): Promise<ApiResult>
}