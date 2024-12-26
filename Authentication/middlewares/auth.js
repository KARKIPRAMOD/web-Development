import { getUser } from "../utils/auth.js";

export async function restricedToLoggedUserOnly(req, res, next) {
    console.log('Cookies on this request:', req.cookies);  

    const userId = req.cookies?.uid;
    console.log('Extracted userId:', userId);  
    if (!userId) {
        console.log('No userId cookie found, redirecting to login');
        return res.redirect("/api/auth/login");
    }

    const user = getUser(userId);

    if (!user) {
        console.log('User not found with id:', userId);
        return res.redirect("/api/auth/login");
    }
    console.log("user",user);
    req.user = user;  
    next();
}
