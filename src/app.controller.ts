import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiAuthGuard } from './api/guards/api-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(ApiAuthGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
