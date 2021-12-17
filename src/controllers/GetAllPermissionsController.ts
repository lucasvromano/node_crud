import { GetAllPermissionsService } from './../services/GetAllPermissionsService';
import { Request, Response } from "express";

export class GetAllPermissionsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllPermissionsService();
    const permissions = await service.execute();
    return response.json(permissions);
  }
}
