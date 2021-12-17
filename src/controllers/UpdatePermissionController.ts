import { UpdatePermissionService } from "./../services/UpdatePermissionService";
import { Request, Response } from "express";

export class UpdatePermissionController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { description } = request.body;
    const service = new UpdatePermissionService();
    const result = await service.execute({ id, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
