import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import cloudinary from "../config/cloudinary.js";

export const registerUser = async (req, res) => {

  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash( password, 10 );
    let imageUrl = null;
    if (req.file) {
      const result = await cloudinary.uploader.upload( req.file.path);
      imageUrl = result.secure_url;
    }
    await User.create({ name, email, password: hashedPassword, image: imageUrl});
    return res.status(201).json({  message: "Registered Successfully" });
  
  }

  catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({  message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare( password, user.password );
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.status(200).json({ token });
  } 
  
  catch (error) {
    return res.status(500).json({
      message: "Server error"
    });
  }
};