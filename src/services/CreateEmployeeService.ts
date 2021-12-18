import { Employee } from "../entities/Employee";
import { getRepository } from "typeorm";

type EmployeeRequest = {
  first_name: string;
  last_name: string;
  photo: string;
  salary: number;
  working_hour_id: string;
  user_id: string;
};

export class CreateEmployeeService {
  async execute({
    first_name,
    last_name,
    photo,
    salary,
    working_hour_id,
    user_id,
  }: EmployeeRequest): Promise<Employee | Error> {
    const repo = getRepository(Employee);

    const employee = repo.create({
      first_name,
      last_name,
      photo,
      salary,
      working_hour_id,
      user_id,
    });

    await repo.save(employee);

    return employee;
  }
}
