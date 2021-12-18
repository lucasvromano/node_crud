import { Service } from "./../entities/Service";
import { getRepository } from "typeorm";

type ServiceUpdateRequest = {
  id: string;
  description: string;
  value: number;
  time: Date;
};

export class UpdateServiceService {
  async execute({ id, description, value, time }: ServiceUpdateRequest) {
    const repo = getRepository(Service);
    const service = await repo.findOne(id);

    if (!service) {
      return Error("Service does not exists!");
    }

    service.description = description ? description : service.description;
    service.value = value ? value : service.value;
    service.time = time ? time : service.time;

    await repo.save(service);

    return service;
  }
}
