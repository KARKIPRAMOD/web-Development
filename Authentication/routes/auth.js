import express from "express";
import { login, logout, signup } from "../controllers/auth.js"
const router = express.Router();

router.post("/signup",signup);

router.post("/login",login);

// Render the ejs page 
router.get("/signup", (req, res) => {
    res.render("signup"); 
});


router.get("/login",(req,res)=>{
    res.render("login");
})



router.get("/logout",logout);


export default router;