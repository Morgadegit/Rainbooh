"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211202135538 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211202135538 extends migrations_1.Migration {
    async up() {
        this.addSql('create table `campaign` (`id` int unsigned not null auto_increment primary key, `company_name` varchar(255) not null, `desc` text not null, `start_date` datetime not null, `end_date` datetime not null, `updated_at` datetime not null, `created_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
    }
}
exports.Migration20211202135538 = Migration20211202135538;
//# sourceMappingURL=Migration20211202135538.js.map