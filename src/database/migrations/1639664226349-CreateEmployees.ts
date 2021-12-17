import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmployees1639664226349 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "employees",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "first_name",
            type: "varchar",
          },
          {
            name: "last_name",
            type: "varchar",
          },
          {
            name: "photo",
            type: "varchar",
          },
          {
            name: "salary",
            type: "numeric",
          },
          {
            name: "working_hour_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "fk_employees_working_hour",
            columnNames: ["working_hour_id"],
            referencedTableName: "working_hours",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employees");
  }
}
