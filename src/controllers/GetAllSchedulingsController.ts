import { GetAllSchedulingsService } from './../services/GetAllSchedulingsService';
import { Request, Response } from "express";

export class GetAllSchedulingsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllSchedulingsService();
    const schedulings = await service.execute();
    return response.json(schedulings);
  }
}
