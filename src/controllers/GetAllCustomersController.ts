import { GetAllCustomersService } from "../services/GetAllCustomersService";
import { Request, Response } from "express";

export class GetAllCustomersController {
  async handle(request: Request, response: Response) {
    const service = new GetAllCustomersService();
    const customers = await service.execute();
    return response.json(customers);
  }
}
