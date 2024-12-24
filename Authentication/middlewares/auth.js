import { getUser } from "../utils/auth.js"
async function restricedToLoggedUserOnly(req,re,next){
    const userId = req.cookies.uid;

    if(!userId) return restricedToLoggedUserOnly.redirect("/api/auth/login");
    
    const user = getUser(userId);


    next();
}