import UserRepository from "../repositories/user";
import { User } from "../models/user.entity";

class UserServices {
  async create(
    email: string,
    password: string,
    name: string
  ) {
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    return await UserRepository.create(user);
  }

  async update(email: string, name: string) {
    const user = new User();
    user.name = name;
    return await UserRepository.updateByEmail(email, user);
  }
}

export default new UserServices();
