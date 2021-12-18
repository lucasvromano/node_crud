import { UpdateServiceService } from "./../services/UpdateServiceService";
import { Request, Response } from "express";

export class UpdateServiceController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { description, value, time } = request.body;
    const service = new UpdateServiceService();
    const result = await service.execute({ id, description, value, time });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
