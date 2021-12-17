import { Permission } from "./../entities/Permission";
import { getRepository } from "typeorm";

type PermissionUpdateRequest = {
  id: string;
  description: string;
};

export class UpdatePermissionService {
  async execute({ id, description }: PermissionUpdateRequest) {
    const repo = getRepository(Permission);
    const permission = await repo.findOne(id);

    if (!permission) {
      return Error("Permission does not exists!");
    }

    permission.description = description ? description : permission.description;

    await repo.save(permission);

    return permission;
  }
}
