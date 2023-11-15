import { Request, Response, NextFunction } from "express";
import { app } from "../configs";
class AccessMiddleware {
  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { app_id, app_key } = request.headers;

    if (!app_id || !app_key) {
      return response.status(401).json({
        error: "Unauthorized",
      });
    }

    if (app_id !== app.appId || app_key !== app.appKey) {
      return response.status(401).json({
        error: "Unauthorized",
      });
    }

    next();
  }
}

export default new AccessMiddleware();
