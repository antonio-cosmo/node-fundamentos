import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigration1674744216732 implements MigrationInterface {
    name = 'firstMigration1674744216732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "driver_licenses" character varying NOT NULL, "isAdmin" boolean NOT NULL, "avatar_file" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specifications" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_621aabf71e640ab86f0e8b62a37" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "daily_rate" integer NOT NULL, "available" boolean NOT NULL DEFAULT true, "license_plate" character varying NOT NULL, "fine_amount" integer NOT NULL, "brand" character varying NOT NULL, "category_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "UQ_97deb66a03be534e7c02d9add0a" UNIQUE ("license_plate"), CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "car_images" ("id" uuid NOT NULL, "car_id" uuid NOT NULL, "path" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_f7870496c0b0f5a8894cab2bde3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specification_car" ("car_id" uuid NOT NULL, "specification_id" uuid NOT NULL, CONSTRAINT "PK_8cf10871de24f1323f1f90b10c6" PRIMARY KEY ("car_id", "specification_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_89aa707746f6fa1a7bf846f14c" ON "specification_car" ("car_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_1d3aa7c44d04b81077efa7bb3b" ON "specification_car" ("specification_id") `);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_9b6410d2f4eabb985524faae074" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "car_images" ADD CONSTRAINT "FK_b656953875307b25131f0d9af94" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specification_car" ADD CONSTRAINT "FK_89aa707746f6fa1a7bf846f14c0" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "specification_car" ADD CONSTRAINT "FK_1d3aa7c44d04b81077efa7bb3b7" FOREIGN KEY ("specification_id") REFERENCES "specifications"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specification_car" DROP CONSTRAINT "FK_1d3aa7c44d04b81077efa7bb3b7"`);
        await queryRunner.query(`ALTER TABLE "specification_car" DROP CONSTRAINT "FK_89aa707746f6fa1a7bf846f14c0"`);
        await queryRunner.query(`ALTER TABLE "car_images" DROP CONSTRAINT "FK_b656953875307b25131f0d9af94"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_9b6410d2f4eabb985524faae074"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1d3aa7c44d04b81077efa7bb3b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_89aa707746f6fa1a7bf846f14c"`);
        await queryRunner.query(`DROP TABLE "specification_car"`);
        await queryRunner.query(`DROP TABLE "car_images"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TABLE "specifications"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
