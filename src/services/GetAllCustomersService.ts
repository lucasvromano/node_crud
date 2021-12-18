import { Customer } from "./../entities/Customer";
import { getRepository } from "typeorm";

export class GetAllCustomersService {
  async execute() {
    const repo = getRepository(Customer);
    const customer = await repo.find();

    return customer;
  }
}
