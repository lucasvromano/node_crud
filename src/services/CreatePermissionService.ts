import { Permission } from "./../entities/Permission";
import { getRepository } from "typeorm";

type PermissionRequest = {
  description: string;
};

export class CreatePermissionService {
  async execute({
    description,
  }: PermissionRequest): Promise<Permission | Error> {
    const repo = getRepository(Permission);

    if (await repo.findOne({ description })) {
      return new Error("Permission already exists");
    }

    const permission = repo.create({
      description,
    });

    await repo.save(permission);

    return permission;
  }
}
