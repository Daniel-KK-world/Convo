import mongoose from "mongoose";


//schema for user model  | So like a database table.    
const userSchema = new mongoose.Schema(
    {
        email:{
          type: String, 
          reuquired: true, 
          unique: true,      
        }, 

        fullName:{
            type: String, 
            reuquired: true, 
        }, 

        password:{
            type: String, 
            reuquired: true,
            minlength: 6,
        },

        profilePic:{
            type: String, 
            defaulta: "",
        }, 
    }, 

    {timestamps: true}

);

const User = mongoose.model("User", userSchema); 

export default User;