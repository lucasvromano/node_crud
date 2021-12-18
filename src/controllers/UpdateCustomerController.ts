import { UpdateCustomerService } from "./../services/UpdateCustomerService";
import { Request, Response } from "express";

export class UpdateCustomerController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { first_name, last_name, photo, user_id } = request.body;
    const service = new UpdateCustomerService();
    const result = await service.execute({
      id,
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
