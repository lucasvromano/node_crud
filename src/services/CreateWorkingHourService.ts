import { WorkingHour } from "./../entities/WorkingHour";
import { getRepository } from "typeorm";

type WorkingHourRequest = {
  first_start_date: Date;
  first_end_date: Date;
  last_start_date: Date;
  last_end_date: Date;
};

export class CreateWorkingHourService {
  async execute({
    first_start_date,
    first_end_date,
    last_start_date,
    last_end_date,
  }: WorkingHourRequest): Promise<WorkingHour | Error> {
    const repo = getRepository(WorkingHour);

    const workingHour = repo.create({
      first_start_date,
      first_end_date,
      last_start_date,
      last_end_date,
    });

    await repo.save(workingHour);

    return workingHour;
  }
}
