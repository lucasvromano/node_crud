import { CreateServiceService } from "./../services/CreateServiceService";
import { Request, Response } from "express";

export class CreateServiceController {
  async handle(request: Request, response: Response) {
    const { description, value, time } = request.body;
    const service = new CreateServiceService();
    const result = await service.execute({ description, value, time });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
