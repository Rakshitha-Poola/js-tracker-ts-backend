import mongoose, {Document} from "mongoose";

export interface UserSchemaTypes extends Document{
    name:string,
    email:string,
    password:string,
    googleId?:string,
    role:string
}

const userSchema = new mongoose.Schema<UserSchemaTypes>({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        select:false
    },
    googleId: { 
        type: String, 
        unique: true 
    },
    role:{
        type: String,
        enum:["admin", "user"],
        default:"user",
        required:true
    }
}, {timestamps:true});

export const User = mongoose.model<UserSchemaTypes>("User", userSchema)
