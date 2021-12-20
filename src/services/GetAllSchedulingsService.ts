import { Scheduling } from "./../entities/Scheduling";
import { getRepository } from "typeorm";

export class GetAllSchedulingsService {
  async execute() {
    const repo = getRepository(Scheduling);
    const scheduling = await repo.find({
      relations: ["employee", "customer", "services"],
    });

    return scheduling;
  }
}
