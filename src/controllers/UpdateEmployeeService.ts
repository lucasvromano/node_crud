import { UpdateEmployeeService } from "./../services/UpdateEmployeeService";
import { Request, Response } from "express";

export class UpdateEmployeeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { first_name, last_name, photo, salary, working_hour_id, user_id } =
      request.body;
    const service = new UpdateEmployeeService();
    const result = await service.execute({
      id,
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
