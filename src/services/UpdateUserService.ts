import { User } from "./../entities/User";
import { getRepository } from "typeorm";

type UserUpdateRequest = {
  id: string;
  name: string;
  password: string;
  permission_id: string;
};

export class UpdateUserService {
  async execute({ id, name, password, permission_id }: UserUpdateRequest) {
    const repo = getRepository(User);
    const user = await repo.findOne(id);

    if (!user) {
      return Error("User does not exists!");
    }

    user.name = name ? name : user.name;
    user.password = password ? password : user.password;
    user.permission_id = permission_id ? permission_id : user.permission_id;

    await repo.save(user);

    return user;
  }
}
