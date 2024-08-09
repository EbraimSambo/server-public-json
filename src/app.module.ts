import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Api } from './api/entities/api.entity';
import { JwtService } from '@nestjs/jwt';
import { ApiAuthGuard } from './api/guards/api-auth.guard';
import { Repository } from 'typeorm';
import { VerifyKeyApiService } from './api/services/verify-api.service';
import { ApiKeyRepository } from './api/repository/api-key.repository';

@Module({
  imports: [
    ApiModule, 
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "dpg-cqr3hnbv2p9s73bdl120-a",
      port: 5432,
      username: 'public_json_user',
      password: '6SQEbygYnCGwH0dFI5dWbz8BD7AcMJPJ',
      synchronize: true,
      entities: [Api],
      database: "public_json"
    }),TypeOrmModule.forFeature([Api])
  ],
  controllers: [AppController],
    providers: [
      AppService, 
      JwtService,
      ApiAuthGuard,
      Repository,
      VerifyKeyApiService,
    ],
})

export class AppModule {}
