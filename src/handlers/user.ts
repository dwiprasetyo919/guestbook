import { NextFunction, Request, Response } from "express";
import UserServices from "../services/user";

class UserHandler {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, name } = req.body;
      return res.send(
        await UserServices.create(email, password, name)
      );
    } catch (error) {
      return res
        .send({
          code: 400,
          error: error.message,
        })
        .status(500);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      return res.send(await UserServices.update(id, name));
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

export default new UserHandler();
