import { CreateWorkingHourService } from "./../services/CreateWorkingHourService";
import { Request, Response } from "express";

export class CreateWorkingHourController {
  async handle(request: Request, response: Response) {
    const { first_start_date, first_end_date, last_start_date, last_end_date } =
      request.body;
    const service = new CreateWorkingHourService();
    const result = await service.execute({
      first_start_date,
      first_end_date,
      last_start_date,
      last_end_date,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
