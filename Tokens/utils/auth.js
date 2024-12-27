import jwt from "jsonwebtoken";

export function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email
    },process.env.secreteKey);
};

export function getUser(token){
    try {
        return jwt.verify(token,process.env.secreteKey);
        }
    catch (error) {
        console.log(error.message);
    }
}
