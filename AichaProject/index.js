const express =require ("express");
const app =express();
const port = 1500;
const mongoose = require('mongoose');
const routes=require("./config/routes");



app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(routes)



mongoose.connect("mongodb+srv://aichametioui:UC9pR8WrdRnjMggC@cluster0.dlcjunu.mongodb.net/DatPro?retryWrites=true&w=majority&appName=Cluster0")



app.listen (port , ()=>{
    console.log(`app runing at ${port}`)
})