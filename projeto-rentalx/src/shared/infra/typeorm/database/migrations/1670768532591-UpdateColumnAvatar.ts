import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateColumnAvatar1670768532591 implements MigrationInterface {
    name = 'UpdateColumnAvatar1670768532591'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "avarta_url" TO "avatar_file"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT '2022-12-10 19:29:37.77935'`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "avatar_file" TO "avarta_url"`);
    }

}
