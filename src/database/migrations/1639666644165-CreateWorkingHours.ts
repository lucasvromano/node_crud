import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateWorkingHours1639666644165 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "working_hours",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "first_start_date",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "first_end_date",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "last_start_date",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "last_end_date",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("working_hours");
  }
}
