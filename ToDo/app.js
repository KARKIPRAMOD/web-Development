const express = require("express");
const {connectDatabase} =  require("./connection");
const routes = require("./routes/url");
const bodyParser =require("body-parser");


const PORT = 8000;
const app = express();

connectDatabase("mongodb://127.0.0.1:27017/todo-app-1").then(console.log("Database connection sucessful"));




app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true}));
app.use("/",routes);


app.listen(PORT,()=>{
    console.log(`Server Started at port: ${PORT}`);
})
