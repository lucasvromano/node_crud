import { CreateEmployeeService } from "./../services/CreateEmployeeService";
import { Request, Response } from "express";

export class CreateEmployeeController {
  async handle(request: Request, response: Response) {
    const { first_name, last_name, photo, salary, working_hour_id, user_id } =
      request.body;
    const service = new CreateEmployeeService();
    const result = await service.execute({
      first_name,
      last_name,
      photo,
      salary,
      working_hour_id,
      user_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
