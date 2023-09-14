import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  controllers: [TagController],
  exports: [TagService],
  imports: [MikroOrmModule.forFeature({ entities: [Tag] })],
  providers: [TagService],
})
export class TagModule {}
