import { CreateUserService } from "./../services/CreateUserService";
import { Request, Response } from "express";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, password, permission_id } = request.body;
    const service = new CreateUserService();
    const result = await service.execute({ name, password, permission_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
