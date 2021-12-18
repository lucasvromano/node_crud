import { Customer } from "../entities/Customer";
import { getRepository } from "typeorm";

type CustomerRequest = {
  first_name: string;
  last_name: string;
  photo: string;
  user_id: string;
};

export class CreateCustomerService {
  async execute({
    first_name,
    last_name,
    photo,
    user_id,
  }: CustomerRequest): Promise<Customer | Error> {
    const repo = getRepository(Customer);

    if (await repo.findOne({ first_name, last_name, photo, user_id })) {
      return new Error("Customer already exists");
    }

    const customer = repo.create({
      first_name,
      last_name,
      photo,
      user_id,
    });

    await repo.save(customer);

    return customer;
  }
}
