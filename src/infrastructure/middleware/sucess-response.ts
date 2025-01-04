import { Request, Response, NextFunction } from "express";

export function responseFilter(req: Request, res: Response, next: NextFunction) {
    const originalJson = res.json;

    res.json = function (body?: any) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
            body = {
                success: true,
                data: body,
            };
        } else {
            body = {
                success: false,
                data: body,
            };
        }

        return originalJson.call(this, body);
    };

    next();
}
