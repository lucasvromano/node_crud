import { User } from "./../entities/User";
import { getRepository } from "typeorm";

type UserRequest = {
  name: string;
  password: string;
  permission_id: string;
};

export class CreateUserService {
  async execute({ name, password, permission_id }: UserRequest): Promise<User | Error> {
    const repo = getRepository(User);

    if (await repo.findOne({ name })) {
      return new Error("User already exists");
    }

    const user = repo.create({
      name,
      password,
      permission_id,
    });

    await repo.save(user);

    return user;
  }
}
