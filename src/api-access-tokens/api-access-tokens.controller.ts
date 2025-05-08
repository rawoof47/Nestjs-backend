import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiAccessTokensService } from './api-access-tokens.service';
import { CreateApiAccessTokenDto } from './dto/index';

@Controller('api-access-tokens')
export class ApiAccessTokensController {
  constructor(private readonly apiAccessTokensService: ApiAccessTokensService) {}

  @Post()
  create(@Body() createApiAccessTokenDto: CreateApiAccessTokenDto) {
    return this.apiAccessTokensService.create(createApiAccessTokenDto);
  }

  @Get()
  findAll() {
    return this.apiAccessTokensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiAccessTokensService.findOne(id);
  }
}
