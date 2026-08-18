import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
connectDB();

app.use( express.json() );
app.use((req,res,next)=>{ 
  console.log(req.method, req.url);
  next();
});

app.use( "/api/auth", authRoutes );
app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.listen( process.env.PORT, () => {
    console.log(
      `Server Running on Port ${process.env.PORT}`
    );
  }
);