"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211202180037 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211202180037 extends migrations_1.Migration {
    async up() {
        this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `username` text not null, `password` text not null, `updated_at` datetime not null, `created_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
        this.addSql('create table `campaign` (`id` int unsigned not null auto_increment primary key, `company_name` varchar(255) not null, `desc` text not null, `start_date` datetime not null, `end_date` datetime not null, `updated_at` datetime not null, `created_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
    }
}
exports.Migration20211202180037 = Migration20211202180037;
//# sourceMappingURL=Migration20211202180037.js.map