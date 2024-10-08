import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateApiController } from './controllers/create-api.controller';
import { CreateApiKeyService } from './services/create-api-key.service';
import { Api } from './entities/api.entity';
import { ApiKeyRepository } from './repository/api-key.repository';
import { VerifyKeyApiService } from './services/verify-api.service';
import { ApiAuthGuard } from './guards/api-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ReadApiKeyService } from './services/read-api-key.service';
import { ReadApiController } from './controllers/read-api.controller';

@Module({
  controllers: [
    ApiController, 
    CreateApiController,
    ReadApiController
  ],
  providers: [
    ApiService,
    VerifyKeyApiService,
    CreateApiKeyService,
    ApiKeyRepository,
    ReadApiKeyService,
    ApiAuthGuard,
    JwtService,
    {
      provide: 'IApiRepository',
      useExisting: ApiKeyRepository
    },
  ],
  imports: [TypeOrmModule.forFeature([Api])],
})
export class ApiModule {}
