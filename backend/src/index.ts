import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import * as dbConnection from "./db/mongoose.db"
import authRouter from "./modules/auth/auth.routes"
import { validate } from "./middlewares/validate"
import { loginSchema, registerSchema } from "./modules/auth/auth.schema"
const app = express();

const StartServer = async () => {
    try {
        app.use(express.json());
        app.use(cors());
        dotenv.config({ path: "./.env" })
        await dbConnection.DateBaseStartUP();

        app.use('/auth', authRouter)

        const PORT = process.env.PORT || 4000

        app.listen(PORT, () => {
            console.log("Backend started!");
        });
    } catch (error) {
        console.error("Backend Start Up Issue", error);
        process.exit(1);
    }
}

StartServer();