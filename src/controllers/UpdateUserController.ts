import { UpdateUserService } from "./../services/UpdateUserService";
import { Request, Response } from "express";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, password, permission_id } = request.body;
    const service = new UpdateUserService();
    const result = await service.execute({ id, name, password, permission_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
