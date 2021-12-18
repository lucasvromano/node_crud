import { getRepository } from "typeorm";
import { Customer } from "../entities/Customer";

export class DeleteCustomerService {
  async execute(id: string) {
    const repo = getRepository(Customer);

    if (!(await repo.findOne(id))) {
      return Error("Customer does not exists!");
    }

    await repo.delete(id);
  }
}
