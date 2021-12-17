import { CreatePermissionService } from "./../services/CreatePermissionService";
import { Request, Response } from "express";

export class CreatePermissionController {
  async handle(request: Request, response: Response) {
    const { description } = request.body;
    const service = new CreatePermissionService();
    const result = await service.execute({ description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
