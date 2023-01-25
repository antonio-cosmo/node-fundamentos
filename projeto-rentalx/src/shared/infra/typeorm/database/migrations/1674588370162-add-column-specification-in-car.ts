import { MigrationInterface, QueryRunner } from "typeorm";

export class addColumnSpecificationInCar1674588370162 implements MigrationInterface {
    name = 'addColumnSpecificationInCar1674588370162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "specification_car" ("car_id" uuid NOT NULL, "specification" uuid NOT NULL, CONSTRAINT "PK_ff5dc154567186ecfff1f32e0b0" PRIMARY KEY ("car_id", "specification"))`);
        await queryRunner.query(`CREATE INDEX "IDX_89aa707746f6fa1a7bf846f14c" ON "specification_car" ("car_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_0d645fed6ad969fe91c13878d2" ON "specification_car" ("specification") `);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "specification_car" ADD CONSTRAINT "FK_89aa707746f6fa1a7bf846f14c0" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "specification_car" ADD CONSTRAINT "FK_0d645fed6ad969fe91c13878d2c" FOREIGN KEY ("specification") REFERENCES "specifications"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specification_car" DROP CONSTRAINT "FK_0d645fed6ad969fe91c13878d2c"`);
        await queryRunner.query(`ALTER TABLE "specification_car" DROP CONSTRAINT "FK_89aa707746f6fa1a7bf846f14c0"`);
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "created_at" SET DEFAULT '2023-01-23 22:25:09.79333'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "createdAt" SET DEFAULT '2023-01-23 22:25:09.79333'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "createdAt" SET DEFAULT '2023-01-23 22:25:09.79333'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT '2023-01-23 22:25:09.79333'`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0d645fed6ad969fe91c13878d2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_89aa707746f6fa1a7bf846f14c"`);
        await queryRunner.query(`DROP TABLE "specification_car"`);
    }

}
