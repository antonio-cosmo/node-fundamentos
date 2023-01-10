import { MigrationInterface, QueryRunner } from "typeorm";

export class alterColunmAvailableCar1673308098544 implements MigrationInterface {
    name = 'alterColunmAvailableCar1673308098544'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "available" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "createdAt" SET DEFAULT '2023-01-09 00:21:00.711019'`);
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "created_at" SET DEFAULT '2023-01-09 00:21:00.711019'`);
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "available" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "createdAt" SET DEFAULT '2023-01-09 00:21:00.711019'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT '2023-01-09 00:21:00.711019'`);
    }

}
