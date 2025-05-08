import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityLog } from './entities/activity-log.entity'; // Ensure this import is correct
import { CreateActivityLogDto } from './dto/create-activity-log.dto'; // Ensure DTO import

@Injectable()
export class ActivityLogsService {
  constructor(
    @InjectRepository(ActivityLog)
    private readonly activityLogRepository: Repository<ActivityLog>,
  ) {}

  // Create a new ActivityLog
  create(createActivityLogDto: CreateActivityLogDto) {
    // Map DTO to the Entity (ActivityLog)
    const activityLog = this.activityLogRepository.create(createActivityLogDto);
    return this.activityLogRepository.save(activityLog);
  }

  // Get all ActivityLogs
  findAll() {
    return this.activityLogRepository.find();
  }

  // Get an ActivityLog by ID
  findOne(id: string) {
    return this.activityLogRepository.findOne({ where: { id } });
  }
}
