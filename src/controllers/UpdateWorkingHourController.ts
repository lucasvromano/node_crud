import { UpdateWorkingHourService } from "./../services/UpdateWorkingHourService";
import { Request, Response } from "express";

export class UpdateWorkingHourController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { first_start_date, first_end_date, last_start_date, last_end_date } = request.body;
    const service = new UpdateWorkingHourService();
    const result = await service.execute({
      id,
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
