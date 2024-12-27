
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    lastLogin:{
        type: Date,
        default: Date.now,
    },

    // isVerified:{
    //     type: Boolean,
    //     default: false,
    // },

    // resetPasswordToken: String,
    // resetPasswordExperiesAt: Date,
    // verificationToken: String,
    // vertficationTokenExpiresAt: Date,

},{timestamps: true}
);
 
const User = mongoose.model('User', UserSchema);

export default User;
