import mongoose from "mongoose";
const { type } = require("os");

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
        reauired: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;