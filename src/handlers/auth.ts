import { Request, Response } from "express";
import AuthServices from "../services/auth";

class AuthHandler {
  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      return res.send(await AuthServices.login(username, password));
    } catch (error) {
      return res
        .send({
          code: 400,
          error: error.message,
        })
        .status(500);
    }
  }
}

export default new AuthHandler();
