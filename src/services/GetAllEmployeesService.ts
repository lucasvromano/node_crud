import { Employee } from './../entities/Employee';
import { getRepository } from "typeorm";

export class GetAllEmployeesService {
  async execute() {
    const repo = getRepository(Employee);
    const employees = await repo.find();

    return employees;
  }
}
