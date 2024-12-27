
import User from "../models/user.js";
import bcrypt from  "bcrypt";
import { v4 as uuidv4} from "uuid";
import {setUser} from "../utils/auth.js";

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
        

        res.status(200).json({
            succes: true,
            message: "User Created Successfully"
        });
    } catch (error) {
        res.status(400).json({success:false,message : error.message});
    }
};


export const login = async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            console.log(email,password);
            return res.status(400).json({Message: "All fields are required"});
            
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "User not found"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
        return res.status(400).json({message: "Invalid Password"});
        }    
        const token = setUser(user._id);
        res.cookie('uid',token);

        // res.status(200).json({
        //     Success: true,
        //     message: "Login Successful"
        // });

        return res.redirect("/api/auth/index");

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message:error.message
        })
    }
};

export const logout = async (req,res) => {
    res.send("logout Route");
};
