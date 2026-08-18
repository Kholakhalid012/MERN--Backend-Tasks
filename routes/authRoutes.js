import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import upload from "../middleware/upload.js";
import { validate } from "../middleware/validate.js";
import { registerSchema } from "../validations/authValidation.js";

const router = express.Router();

router.post(
  "/register",
  upload.single("image"),
  validate(registerSchema),
  registerUser
);

router.post(
  "/login",
  loginUser
);

export default router;