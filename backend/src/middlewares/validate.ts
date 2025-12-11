import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export function validate<T extends ZodSchema>(schema: T) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                msg: "Invalid Data",
                errors: result.error.message
            });
        }

        req.body = result.data;
        next();
    };
}
