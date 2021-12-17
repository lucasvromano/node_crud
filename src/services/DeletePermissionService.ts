import { getRepository } from "typeorm";
import { Permission } from "../entities/Permission";

export class DeletePermissionService {
  async execute(id: string) {
    const repo = getRepository(Permission);

    if (!(await repo.findOne(id))) {
      return Error("Permission does not exists!");
    }

    await repo.delete(id);
  }
}
