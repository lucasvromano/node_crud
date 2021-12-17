import { CreateUserService } from "./../services/CreateUserService";
import { Request, Response } from "express";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const service = new CreateUserService();
    const result = await service.execute({ email, password });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
