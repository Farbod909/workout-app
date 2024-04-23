import { Module } from '@nestjs/common';
import { redisClientFactory } from './redis.factory';
import { RedisRepository } from './redis.repository';

@Module({
  providers: [redisClientFactory, RedisRepository],
  exports: [RedisRepository],
})
export class RedisModule {}
