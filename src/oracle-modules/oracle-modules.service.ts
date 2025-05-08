import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OracleModule } from './entities/oracle-module.entity';
import { CreateOracleModuleDto } from './dto';

@Injectable()
export class OracleModulesService {
  constructor(
    @InjectRepository(OracleModule)
    private readonly oracleModuleRepository: Repository<OracleModule>,
  ) {}

  create(dto: CreateOracleModuleDto) {
    const module = this.oracleModuleRepository.create(dto);
    return this.oracleModuleRepository.save(module);
  }

  findAll() {
    return this.oracleModuleRepository.find();
  }

  findOne(id: string) {
    return this.oracleModuleRepository.findOne({ where: { id } });
  }
}
