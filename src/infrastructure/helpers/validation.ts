import { z, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validatePayload =
    (schemas: { body?: ZodSchema; query?: ZodSchema }) =>
        (req: Request, res: Response, next: NextFunction): void => {
            try {
                // Valida o `body` se um schema foi fornecido
                if (schemas.body) {
                    req.body = schemas.body.parse(req.body);
                }

                // Valida a `query` se um schema foi fornecido
                if (schemas.query) {
                    req.query = schemas.query.parse(req.query);
                }

                next(); // Continua para o próximo middleware ou controlador
            } catch (err) {
                if (err instanceof z.ZodError) {
                    // Retorna a resposta e encerra o middleware
                    res.status(400).json({
                        error: err.errors.map((e) => ({ field: e.path, message: e.message })),
                    });
                    return; // Garante que não continue após enviar a resposta
                }

                next(err); // Passa outros erros para o próximo middleware
            }
        };
