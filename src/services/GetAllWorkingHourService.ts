import { getRepository } from "typeorm";
import { WorkingHour } from "../entities/WorkingHour";

export class GetAllWorkingHoursService {
  async execute() {
    const repo = getRepository(WorkingHour);
    const workingHour = await repo.find();

    return workingHour;
  }
}
