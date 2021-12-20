import { Scheduling } from "../entities/Scheduling";
import { getRepository } from "typeorm";

type SchedulingRequest = {
  date: Date;
  employee_id: string;
  customer_id: string;
  service_id: string;
};

export class CreateSchedulingService {
  async execute({
    date,
    employee_id,
    customer_id,
    service_id,
  }: SchedulingRequest): Promise<Scheduling | Error> {
    const repo = getRepository(Scheduling);

    const scheduling = repo.create({
      date,
      employee_id,
      customer_id,
      service_id,
    });

    await repo.save(scheduling);

    return scheduling;
  }
}
