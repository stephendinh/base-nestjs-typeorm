import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1701836349875 implements MigrationInterface {
  name = 'CreateUsersTable1701836349875';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``,
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createdOn\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updatedOn\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`first_name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`last_name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`phone\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_8e1f623798118e629b46a9e629\` (\`phone\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`street\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`state_name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`city\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`driver_license\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_30c7f29fbeaba9a7fa9d1ab7bb\` (\`driver_license\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP INDEX \`IDX_30c7f29fbeaba9a7fa9d1ab7bb\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP COLUMN \`driver_license\``,
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`city\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`state_name\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`street\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP INDEX \`IDX_8e1f623798118e629b46a9e629\``,
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`phone\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\``,
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`last_name\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`first_name\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`updatedOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`createdOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`username\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\` (\`email\`)`,
    );
  }
}
