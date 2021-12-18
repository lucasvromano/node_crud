import { GetAllWorkingHoursService } from "../services/GetAllWorkingHourService";
import { Request, Response } from "express";

export class GetAllWorkingHoursController {
  async handle(request: Request, response: Response) {
    const service = new GetAllWorkingHoursService();
    const workingHour = await service.execute();
    return response.json(workingHour);
  }
}
