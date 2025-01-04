import { z, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validatePayload =
    (schemas: { body?: ZodSchema; query?: ZodSchema }) =>
        (req: Request, res: Response, next: NextFunction): void => {
            try {
                if (schemas.body) {
                    req.body = schemas.body.parse({ ...req.body, ...req.params });
                }

                if (schemas.query) {
                    req.query = schemas.query.parse({ ...req.query, ...req.params });
                }

                next();
            } catch (err) {
                if (err instanceof z.ZodError) {
                    res.status(400).json({
                        error: err.errors.map((e) => ({ field: e.path, message: e.message })),
                    });
                    return;
                }

                next(err);
            }
        };
