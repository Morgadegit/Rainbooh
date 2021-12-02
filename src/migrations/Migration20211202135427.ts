import { Migration } from '@mikro-orm/migrations';

export class Migration20211202135427 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `campaign` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `company_name` varchar(255) not null, `start_date` datetime not null, `end_date` datetime not null) default character set utf8mb4 engine = InnoDB;');
  }

}
