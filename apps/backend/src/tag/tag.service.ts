import { Injectable } from '@nestjs/common';
import { EntityRepository, EntityManager } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Tag } from './tag.entity';
import { ITagsRO } from './tag.interface';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: EntityRepository<Tag>,
    private readonly em: EntityManager,
  ) {}

  async findAll(): Promise<ITagsRO> {
    const tags = await this.tagRepository.findAll();
    return { tags: tags.map((tag) => tag.tag) };
  }

  async createTagsIfNotExist(tags: string[]): Promise<void> {
    for (const tag of tags) {
      let tagRecord = await this.tagRepository.findOne({ tag: tag });
      if (!tagRecord) {
        tagRecord = this.tagRepository.create({ tag: tag });
        await this.em.persistAndFlush(tagRecord);
      }
    }
  }
}
