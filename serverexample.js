// import express from "express";
// // const express = require("express"); // CommonJS
// const app = express();

// app.use(express.json());
// // express json is used for  parsing the incoming request with JSON payloads

// // app.get("/", (req, res) => {
// //   res.send("Hello Khola");
// // });

// app.post("/students", (req, res) => {
//   console.log(req.body);
//   res.send("Student Added");
// });

// // app.get("/user/:id", (req, res) => {
// //   console.log(req.params.id);
// //   res.send("User Found");

// // });


// // middleware 
// app.use((req,res,next)=>{
//    console.log("Middleware 1");
//    next();
// });

// app.use((req,res,next)=>{
//    console.log("Middleware 2");
//    next();
// });

// app.get("/",(req,res)=>{
//    res.send("Home");
// });

// app.listen(3000, () => {
//   console.log("Server Running");
// });

// // mongodb atlas
