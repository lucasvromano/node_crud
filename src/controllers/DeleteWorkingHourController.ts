import { DeleteWorkingHourService } from "./../services/DeleteWorkingHourService";
import { Request, Response } from "express";

export class DeleteWorkingHourController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteWorkingHourService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}
