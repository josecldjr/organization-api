import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../helpers/http-error";
import { verifyJwt } from "../helpers/jwt";

interface TokenPayload {
    userId: string;
    email: string;
}

export function authenticateJWT(req: Request, res: Response, next: NextFunction): void {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        throw new UnauthorizedError('Authentication failed: Token is missing')
    }

    const decoded = verifyJwt(token);

    // @ts-ignore
    req.token = decoded;

    if (!decoded) {
        throw new UnauthorizedError("Authentication failed: Invalid or expired token")
    }

    next();
}
