import { Migration } from '@mikro-orm/migrations';

export class Migration20230914000000 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table `article_authors` (`article_id` int unsigned not null, `author_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;',
    );
    this.addSql('alter table `article_authors` add index `article_authors_article_id_index`(`article_id`);');
    this.addSql('alter table `article_authors` add index `article_authors_author_id_index`(`author_id`);');
    this.addSql('alter table `article_authors` add primary key `article_authors_pkey`(`article_id`, `author_id`);');

    this.addSql(
      'alter table `article_authors` add constraint `article_authors_article_id_foreign` foreign key (`article_id`) references `article` (`id`) on update cascade on delete cascade;',
    );
    this.addSql(
      'alter table `article_authors` add constraint `article_authors_author_id_foreign` foreign key (`author_id`) references `user` (`id`) on update cascade on delete cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table `article_authors`;');
  }
}
