import { getRepository } from "typeorm";
import { Employee } from "../entities/Employee";

export class DeleteEmployeeService {
  async execute(id: string) {
    const repo = getRepository(Employee);

    if (!(await repo.findOne(id))) {
      return Error("Employee does not exists!");
    }

    await repo.delete(id);
  }
}
