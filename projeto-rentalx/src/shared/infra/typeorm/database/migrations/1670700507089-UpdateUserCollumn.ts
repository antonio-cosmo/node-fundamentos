import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserCollumn1670700507089 implements MigrationInterface {
    name = 'UpdateUserCollumn1670700507089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "avarta_url" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT '2022-12-02 13:40:11.099778'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avarta_url"`);
    }

}
