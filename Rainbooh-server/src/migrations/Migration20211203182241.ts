import { Migration } from '@mikro-orm/migrations';

export class Migration20211203182241 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `user` add unique `user_id_unique`(`id`);');
  }

}
