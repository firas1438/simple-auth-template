"use server"
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

interface UserAccount {
  email: string;
  password: string;
  name: string;
}

export const register = async (values: UserAccount) => {
    const { email, password, name } = values;

    try {
        await connectDB();
        const userFound = await User.findOne({ email });
        if(userFound){ return { error: 'Email already exists!' } }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, });
        // in production, remove this comment and use the "savedUser" variable however you please.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const savedUser = await user.save();

    } catch(e){
        console.log(e);
    }
}