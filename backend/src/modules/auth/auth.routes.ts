// signin and signup

import { Router } from "express";
import { loginHandler, registerHandler } from "./auth.controller";
import { validate } from "../../middlewares/validate";
import { loginSchema, registerSchema } from "./auth.schema";

const authRouter = Router();

authRouter.post("/sign-up", validate(registerSchema), registerHandler);
authRouter.post("/sign-in", validate(loginSchema), loginHandler);

export default authRouter;