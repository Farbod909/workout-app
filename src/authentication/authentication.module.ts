import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UsersModule } from 'src/users/users.module';
import { RedisModule } from 'src/redis/redis.module';
import { SessionService } from './session.service';

@Module({
  imports: [UsersModule, RedisModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, SessionService],
  exports: [AuthenticationService, SessionService],
})
export class AuthenticationModule {}
