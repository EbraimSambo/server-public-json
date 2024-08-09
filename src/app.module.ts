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
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: 'root',
      password: '',
      synchronize: true,
      entities: [Api],
      database: "api"
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
