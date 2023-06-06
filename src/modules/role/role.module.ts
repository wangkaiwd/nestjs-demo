import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleRepository } from './role.repository';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [RoleController],
  providers: [RoleService, RoleRepository],
  // exports: [RoleRepository],
})
export class RoleModule {}
