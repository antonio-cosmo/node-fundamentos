import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1669859836310 implements MigrationInterface {
    name = 'CreateTableUser1669859836310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "driver_licenses" character varying NOT NULL, "isAdmin" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
