import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { VerifyKeyApiService } from '../services/verify-api.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class ApiAuthGuard implements CanActivate {

  constructor(
    private verifyService: VerifyKeyApiService,
    private jwtService: JwtService
  ) { }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    
    const request = context.switchToHttp().getRequest();

    const token = this.extractKeyApiHeader(request);

    if (!token) throw new UnauthorizedException();

    const verifyApiKey = await this.verifyService.veryFyKeyApi(token)

    if (!verifyApiKey) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.decode(verifyApiKey.apiKey);

      request['user'] = payload;

    } catch {
      throw new UnauthorizedException();
    }

    return true;

  }


  extractKeyApiHeader = (request: Request) => {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

}

