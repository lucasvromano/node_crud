import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSchedulings1639664660787 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "schedulings",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "date",
            type: "timestamp",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "employee_id",
            type: "uuid",
          },
          {
            name: "customer_id",
            type: "uuid",
          },
          {
            name: "service_id",
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
            name: "fk_schedulings_employee",
            columnNames: ["employee_id"],
            referencedTableName: "employees",
            referencedColumnNames: ["id"],
          },
          {
            name: "fk_schedulings_customer",
            columnNames: ["customer_id"],
            referencedTableName: "customers",
            referencedColumnNames: ["id"],
          },
          {
            name: "fk_schedulings_scheduling",
            columnNames: ["service_id"],
            referencedTableName: "services",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("schedulings");
  }
}
