import zod from "zod";

export const loginSchema = zod.object({
    email: zod.email().nonempty(),
    password: zod.string().min(8)
});

export const registerSchema = zod.object({
    email: zod.email().nonempty(),
    password: zod.string().min(8)
});

export type LoginInput = zod.infer<typeof loginSchema>;
export type RegisterInput = zod.infer<typeof registerSchema>;