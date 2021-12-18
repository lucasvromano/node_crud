import { GetAllServicesService } from "./../services/GetAllServicesService";
import { Request, Response } from "express";

export class GetAllServicesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllServicesService();
    const services = await service.execute();
    return response.json(services);
  }
}
