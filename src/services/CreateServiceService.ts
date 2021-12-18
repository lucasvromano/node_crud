import { Service } from "./../entities/Service";
import { getRepository } from "typeorm";

type ServiceRequest = {
  description: string;
  value: number;
  time: Date;
};

export class CreateServiceService {
  async execute({
    description,
    value,
    time,
  }: ServiceRequest): Promise<Service | Error> {
    const repo = getRepository(Service);

    if (await repo.findOne({ description })) {
      return new Error("Service already exists");
    }

    const service = repo.create({ description, value, time });

    await repo.save(service);

    return service;
  }
}
