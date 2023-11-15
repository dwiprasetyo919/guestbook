
import { Request, Response, NextFunction } from "express";
import { app } from "../configs";
import jwt from "jsonwebtoken";
class TokenMiddleware {
  public async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
        const token = request.header('Authorization')?.split(' ')[1];
        jwt.verify(token, app.jwt.secret, (err, user) => {
            if (err) {
                return response.status(401).json({
                    error: "Unauthorized Token",
                });
                
            }
            next();
        });
    }
}

export default new TokenMiddleware();


