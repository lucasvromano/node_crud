import { User } from "./../entities/User";
import { getRepository } from "typeorm";

type UserRequest = {
  email: string;
  password: string;
};

export class CreateUserService {
  async execute({ email, password }: UserRequest): Promise<User | Error> {
    const repo = getRepository(User);

    if (await repo.findOne({ email })) {
      return new Error("User already exists");
    }

    const user = repo.create({
      email,
      password,
    });

    await repo.save(user);

    return user;
  }
}
