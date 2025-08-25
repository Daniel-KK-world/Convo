// auth controller functions to be called in the auth routes

import User from "../models/user.model";
import bcrypt from "bcryptjs"

// these functions will handle the logic for signup, login, and logout, obviously   
export const signup = async (res, req) => {
    const {fullName, email, password} = req.body;
    try {
        if (password.length < 6){
            return res.status(400).json({message: "Pasword must be at least 6 characters" })
        }

        const user = await User.findOne({email})

        if (user) return res.status(400).json({message: "Email already exsits"})

        //hash password 
        const salt = await bcrypt.genSalt(10) 
        const hashedPassword = await bcrypt.hash(password, salt) 

        const newUser = new User({
            fullName,
            email, 
            password: hashedPassword,  
        });

        if (newUser){
            //generate jwt token here   

        }else{
            res.status(400).json({message: "Invalid user data"});
        }

    } catch (error) {
        
    }
}

export const login = (res, req) => {
    res.send('login route');
}

export const logout = (res, req) => {
    res.send('logout route');
}