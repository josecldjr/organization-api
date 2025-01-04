import { Request, Response, NextFunction } from "express"
import { HttpError } from "../helpers/http-error";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
      data: err.data || null,
    });
    return
  }

  res.status(500).json({
    status: 500,
    message: "Internal Server Error",
    data: err.message || null,
  });
}
