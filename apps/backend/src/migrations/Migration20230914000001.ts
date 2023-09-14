import { Migration } from '@mikro-orm/migrations';

export class Migration20230914000001 extends Migration {
  async up(): Promise<void> {
    // Insert data into the new table
    this.addSql(
      'insert into `article_authors` (`article_id`, `author_id`) select `id`, `author_id` from `article`;',
    );

    // Drop the foreign key constraint
    this.addSql('alter table `article` drop foreign key `article_author_id_foreign`;');

    // Drop the old column
    this.addSql('alter table `article` drop column `author_id`;');
  }

  async down(): Promise<void> {
    // Add the old column back
    this.addSql('alter table `article` add column `author_id` int unsigned not null;');

    // Move the data back to the old column
    this.addSql(
      'update `article` set `author_id` = (select `author_id` from `article_authors` where `article_id` = `article`.`id`);',
    );

    // Delete the data from the new table
    this.addSql('delete from `article_authors` where `article_id` in (select `id` from `article`);');

    // Recreate the foreign key constraint if necessary
    this.addSql('alter table `article` add constraint `article_author_id_foreign` foreign key (`author_id`) references `user` (`id`) on update cascade;');
  }
}
