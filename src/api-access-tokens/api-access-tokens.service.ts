import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiAccessToken } from './entities/api-access-token.entity';
import { CreateApiAccessTokenDto } from './dto';

@Injectable()
export class ApiAccessTokensService {
  constructor(
    @InjectRepository(ApiAccessToken)
    private readonly apiAccessTokenRepository: Repository<ApiAccessToken>,
  ) {}

  // Create a new API access token
  async create(createApiAccessTokenDto: CreateApiAccessTokenDto): Promise<ApiAccessToken> {
    // Convert DTO to Entity
    const apiAccessToken = this.apiAccessTokenRepository.create(createApiAccessTokenDto);
    return this.apiAccessTokenRepository.save(apiAccessToken);
  }

  // Get all API access tokens
  findAll() {
    return this.apiAccessTokenRepository.find();
  }

  // Get an API access token by ID
  findOne(id: string) {
    return this.apiAccessTokenRepository.findOne({ where: { id } });
  }
}
