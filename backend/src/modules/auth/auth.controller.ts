// sign in and sign up and me
import { Request, Response } from "express";
import { loginInUser, registerUser } from "./auth.service";

export async function loginHandler(req: Request, res: Response) {
    const data = req.body;

    try {
        const token: string = await loginInUser(data);
        return res.status(200).json({
            token
        });
    } catch (error) {
        res.status(500).json({
            msg: "Internal Error",
            errorMsg: error
        });
    }
}

export async function registerHandler(req: Request, res: Response) {
    const data = req.body;

    try {
        await registerUser({ email: data.email, password: data.password });

        return res.status(200).json({
            msg: "User Created",
        });
    } catch (error) {
        res.status(500).json({
            msg: "Interal Error",
            errorMsg: error
        });
    }
}
