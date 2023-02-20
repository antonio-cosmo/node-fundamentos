import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableRentals1674858753907 implements MigrationInterface {
    name = 'createTableRentals1674858753907'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rentals" ("id" uuid NOT NULL, "car_id" uuid NOT NULL, "user_id" uuid NOT NULL, "start_date" TIMESTAMP NOT NULL DEFAULT 'now()', "end_date" TIMESTAMP NOT NULL, "expected_return_date" TIMESTAMP NOT NULL, "total" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2b10d04c95a8bfe85b506ba52ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "car_images" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "rentals" ADD CONSTRAINT "FK_243d136cb7fd3e65b4630fe6bf9" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rentals" ADD CONSTRAINT "FK_b13ac8580bd6a011f47a476fbad" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rentals" DROP CONSTRAINT "FK_b13ac8580bd6a011f47a476fbad"`);
        await queryRunner.query(`ALTER TABLE "rentals" DROP CONSTRAINT "FK_243d136cb7fd3e65b4630fe6bf9"`);
        await queryRunner.query(`ALTER TABLE "car_images" ALTER COLUMN "created_at" SET DEFAULT '2023-01-26 14:44:09.535602'`);
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "created_at" SET DEFAULT '2023-01-26 14:44:09.535602'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "createdAt" SET DEFAULT '2023-01-26 14:44:09.535602'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "createdAt" SET DEFAULT '2023-01-26 14:44:09.535602'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT '2023-01-26 14:44:09.535602'`);
        await queryRunner.query(`DROP TABLE "rentals"`);
    }

}
