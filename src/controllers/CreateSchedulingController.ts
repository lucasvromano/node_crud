import { CreateSchedulingService } from "./../services/CreateSchedulingService";
import { Request, Response } from "express";

export class CreateSchedulingController {
  async handle(request: Request, response: Response) {
    const { date, employee_id, customer_id, service_id } = request.body;
    const service = new CreateSchedulingService();
    const result = await service.execute({
      date,
      employee_id,
      customer_id,
      service_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
