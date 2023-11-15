import jwt from "jsonwebtoken";
import { app } from "../configs";
import UserRepository from "../repositories/user";
class AuthServices {
  async login(email: string, password: string) {
    const user = await UserRepository.findOne({ email, password });
   
    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Create JWT
    const token = jwt.sign({user}, app.jwt.secret);
    const response = {
      email: user.email,
      name: user.name,
      accessToken: user.email ? token : undefined,
    };

    return response;
  }
}

export default new AuthServices();
