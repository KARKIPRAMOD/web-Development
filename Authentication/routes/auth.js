import express from "express";
import { login, logout, signup } from "../controllers/auth.js"
const router = express.Router();

// Render the ejs page 
router.get("/signup", (req, res) => {
    res.render("../views/signup"); 
});

router.get("/login",login);

router.get("/login",(req,res)=>{
    res.render("login");
})



router.post("/signup",signup);



router.get("/logout",logout);


export default router;