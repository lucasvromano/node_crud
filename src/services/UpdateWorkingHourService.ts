import { WorkingHour } from "./../entities/WorkingHour";
import { getRepository } from "typeorm";

type WorkingHourUpdateRequest = {
  id: string;
  first_start_date: Date;
  first_end_date: Date;
  last_start_date: Date;
  last_end_date: Date;
};

export class UpdateWorkingHourService {
  async execute({
    id,
    first_start_date,
    first_end_date,
    last_start_date,
    last_end_date,
  }: WorkingHourUpdateRequest) {
    const repo = getRepository(WorkingHour);
    const workingHour = await repo.findOne(id);

    if (!workingHour) {
      return Error("Working Hour does not exists!");
    }

    workingHour.first_start_date = first_start_date ? first_start_date : workingHour.first_start_date;
    workingHour.first_end_date = first_end_date ? first_end_date : workingHour.first_end_date;
    workingHour.last_start_date = last_start_date ? last_start_date : workingHour.last_start_date;
    workingHour.last_end_date = last_end_date ? last_end_date : workingHour.last_end_date;

    await repo.save(workingHour);

    return workingHour;
  }
}
