import { Migration } from '@mikro-orm/migrations';

export class Migration20211202135538 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `campaign` (`id` int unsigned not null auto_increment primary key, `company_name` varchar(255) not null, `desc` text not null, `start_date` datetime not null, `end_date` datetime not null, `updated_at` datetime not null, `created_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
  }

}
