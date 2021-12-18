import { DeleteServiceService } from "./../services/DeleteServiceService";
import { Request, Response } from "express";

export class DeleteServiceController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteServiceService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}
