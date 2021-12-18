import { getRepository } from "typeorm";
import { WorkingHour } from "../entities/WorkingHour";

export class DeleteWorkingHourService {
  async execute(id: string) {
    const repo = getRepository(WorkingHour);

    if (!(await repo.findOne(id))) {
      return Error("Working Hour does not exists!");
    }

    await repo.delete(id);
  }
}
