import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import type { jwtObj } from '../types/auth.types';

dotenv.config({ path: '../config/.env' });

export function signJwt(obj: jwtObj) {

    const SECRET = process.env.SECRET;

    if (!SECRET) {
        throw new Error("Secret Not Found")
    }

    const token: string = jwt.sign(obj, SECRET);
    return token;
}

export function verifyJwt(token: string) {
    try {
        const SECRET = process.env.SECRET;

        if (!SECRET) {
            throw new Error("Secret Not Found")
        }

        const decoded = jwt.verify(token, SECRET);

        return decoded;
    } catch (error) {
        return false;
    }
}