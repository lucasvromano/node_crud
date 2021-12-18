import { CreateCustomerService } from "./../services/CreateCustomerService";
import { Request, Response } from "express";

export class CreateCustomerController {
  async handle(request: Request, response: Response) {
    const { first_name, last_name, photo, user_id } = request.body;
    const service = new CreateCustomerService();
    const result = await service.execute({
      first_name,
      last_name,
      photo,
      user_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
