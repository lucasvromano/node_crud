import { getRepository } from "typeorm";
import { Service } from "../entities/Service";

export class DeleteServiceService {
  async execute(id: string) {
    const repo = getRepository(Service);

    if (!(await repo.findOne(id))) {
      return Error("Service does not exists!");
    }

    await repo.delete(id);
  }
}
