import { LoginInput, RegisterInput } from "./auth.schema";
import { UserModel } from "./auth.model";
import { signJwt } from "../../utils/auth.utils";

// sign in and sign up and me
export async function registerUser(data: RegisterInput) {
    try {
        const newUser = new UserModel(data);
        const savedUser = await newUser.save();
        console.log(savedUser);
    } catch (error) {
        throw new Error("User Not Saved")
    }
}

export async function loginInUser(data: LoginInput) {
    try {
        const findUser = await UserModel.findOne({ email: data.email });

        if (findUser) {
            return signJwt({ email: findUser.email, _id: findUser._id.toString() });
        }

        throw new Error("User not found");
    } catch (error) {
        throw new Error("Problem in User Find");
    }
}
