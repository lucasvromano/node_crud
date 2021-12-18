import { Customer } from "./../entities/Customer";
import { getRepository } from "typeorm";

type CustomerUpdateRequest = {
  id: string;
  first_name: string;
  last_name: string;
  photo: string;
  user_id: string;
};

export class UpdateCustomerService {
  async execute({
    id,
    first_name,
    last_name,
    photo,
    user_id,
  }: CustomerUpdateRequest) {
    const repo = getRepository(Customer);
    const customer = await repo.findOne(id);

    if (!customer) {
      return Error("Customer does not exists!");
    }

    customer.first_name = first_name ? first_name : customer.first_name;
    customer.last_name = last_name ? last_name : customer.last_name;
    customer.photo = photo ? photo : customer.photo;
    customer.user_id = user_id ? user_id : customer.user_id;

    await repo.save(customer);

    return customer;
  }
}
