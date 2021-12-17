import { DeletePermissionService } from "./../services/DeletePermissionService";
import { Request, Response } from "express";

export class DeletePermissionController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeletePermissionService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}
