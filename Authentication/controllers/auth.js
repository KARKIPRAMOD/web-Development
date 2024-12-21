import User from "../models/user.js";
import bcrypt from  "bcrypt";
import { PassThrough } from "stream";

export const signup = async (req,res) => {

    const {email, password, name, username} = req.body;
    try {
        if( !name || !email || !username || !password){
            throw new Error ("All fielda are required");
        }

        const userAlreadyExist = await User.findOne({email});
        if(userAlreadyExist){
            return res.status(400).json({success:false, message: "user already exists"});
        }

        const hashPassword =  await bcrypt.hash(password,10);
        const user = new User({
            email, name,username, password:hashPassword,
        });
        await user.save();
    } catch (error) {
        res.status(400).json({success:false,message : error.message});
    }
};

export const login = async (req,res) => {
    res.send("Login Route");
};

export const logout = async (req,res) => {
    res.send("logout Route");
};
