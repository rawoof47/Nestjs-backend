import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminUser } from './entities/admin-user.entity'; // Corrected import path
import { CreateAdminUserDto } from './dto/create-admin-user.dto'; // Assuming DTO is located in the dto folder

@Injectable()
export class AdminUsersService {
  constructor(
    @InjectRepository(AdminUser)
    private readonly adminUserRepository: Repository<AdminUser>,
  ) {}

  create(createAdminUserDto: CreateAdminUserDto) {
    const adminUser = this.adminUserRepository.create(createAdminUserDto);
    return this.adminUserRepository.save(adminUser);
  }

  findAll() {
    return this.adminUserRepository.find();
  }

  findOne(id: string) {
    return this.adminUserRepository.findOne({ where: { id } });
  }
}
