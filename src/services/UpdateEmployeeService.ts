import { getRepository } from "typeorm";
import { Employee } from "../entities/Employee";

type EmployeeUpdateRequest = {
  id: string;
  first_name: string;
  last_name: string;
  photo: string;
  salary: number;
  working_hour_id: string;
  user_id: string;
};

export class UpdateEmployeeService {
  async execute({
    id,
    first_name,
    last_name,
    photo,
    salary,
    working_hour_id,
    user_id,
  }: EmployeeUpdateRequest) {
    const repo = getRepository(Employee);
    const employee = await repo.findOne(id);

    if (!employee) {
      return Error("Employee does not exists!");
    }

    employee.first_name = first_name ? first_name : employee.first_name;
    employee.last_name = last_name ? last_name : employee.last_name;
    employee.photo = photo ? photo : employee.photo;
    employee.salary = salary ? salary : employee.salary;
    employee.working_hour_id = working_hour_id ? working_hour_id : employee.working_hour_id;
    employee.user_id = user_id ? user_id : employee.user_id;

    await repo.save(employee);

    return employee;
  }
}
