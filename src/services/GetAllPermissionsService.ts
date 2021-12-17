import { getRepository } from "typeorm";
import { Permission } from "../entities/Permission";

export class GetAllPermissionsService {
  async execute() {
    const repo = getRepository(Permission);
    const permissions = await repo.find();

    return permissions;
  }
}
