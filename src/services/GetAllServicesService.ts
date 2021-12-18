import { getRepository } from "typeorm";
import { Service } from "../entities/Service";

export class GetAllServicesService {
  async execute() {
    const repo = getRepository(Service);
    const services = await repo.find();

    return services;
  }
}
